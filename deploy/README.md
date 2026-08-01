# Деплой лендинга на moyrebenok.com.kz

Итоговая схема:

| Домен | Что отдаёт |
|---|---|
| `moyrebenok.com.kz` | новый лендинг (статика из `dist/`) |
| `old.moyrebenok.com.kz` | старый Django-проект `online_preschool` (остаётся как есть) |
| `api.moyrebenok.com.kz` | бэкенд API — **не трогаем** |

Порядок важен: сначала поднимаем старый проект на поддомене и убеждаемся, что он
работает, и только потом переключаем основной домен. Так основной домен не лежит
ни минуты, а откат — это возврат одного файла конфига.

---

## Текущая конфигурация сервера

Снята с рабочего конфига, конфиги в `deploy/nginx/` уже под неё подогнаны —
подставлять ничего не нужно:

| | |
|---|---|
| Django-проект | `/home/projects/online_preschool` |
| gunicorn | unix-сокет `/run/gunicorn.sock` |
| Статика Django | `alias /home/projects/online_preschool/staticfiles/` |
| Медиа | отдельного блока в nginx нет — отдаёт сам Django |
| Сертификат | `/etc/letsencrypt/live/moyrebenok.com.kz/` (покрывает домен и `www`) |

## Шаг 0. Снять бэкап текущего конфига

```bash
ssh user@server
ls /etc/nginx/sites-enabled/          # уточнить имя файла конфига
sudo cp /etc/nginx/sites-available/moyrebenok.com.kz ~/nginx-backup-$(date +%F).conf
```

---

## Шаг 1. DNS-запись для поддомена

В панели управления доменом добавь **A-запись**:

```
old.moyrebenok.com.kz  →  <IP сервера>
```

Проверить, что запись разошлась (может занять до нескольких часов):

```bash
dig +short old.moyrebenok.com.kz
```

Пока не вернёт IP сервера — дальше не идти, certbot не выпустит сертификат.

---

## Шаг 2. Поднять старый проект на old.moyrebenok.com.kz

1. Скопируй `deploy/nginx/old.moyrebenok.com.kz.conf` в
   `/etc/nginx/sites-available/old.moyrebenok.com.kz` — он уже содержит
   реальный сокет и пути, править не нужно.

2. Включи и проверь:

```bash
sudo ln -s /etc/nginx/sites-available/old.moyrebenok.com.kz /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

3. Выпусти сертификат:

```bash
sudo certbot --nginx -d old.moyrebenok.com.kz
```

Certbot сам допишет ssl-блок и редирект с HTTP.

4. **Django-настройки.** В `online_preschool/settings.py` на сервере:

```python
# ALLOWED_HOSTS = ['*'] — уже покрывает поддомен, менять не нужно.
# Django 4.2 требует явного origin для POST-форм (логин, формы) по HTTPS:
CSRF_TRUSTED_ORIGINS = ['https://old.moyrebenok.com.kz']
```

Перезапусти gunicorn:

```bash
sudo systemctl restart gunicorn      # имя сервиса уточни: systemctl list-units | grep -i gunicorn
```

5. **Запись в django.contrib.sites.** Проект использует `SITE_ID = 1` и allauth —
   домен из этой записи попадает в письма (например, сброс пароля). Обнови его,
   иначе ссылки из писем поведут на лендинг:

```bash
cd /path/to/online_preschool
python manage.py shell -c "from django.contrib.sites.models import Site; s=Site.objects.get(pk=1); s.domain='old.moyrebenok.com.kz'; s.name='old.moyrebenok.com.kz'; s.save(); print(s.domain)"
```

6. **Проверь до переключения основного домена:**
   - `https://old.moyrebenok.com.kz/` открывается и редиректит на `/ru/`
   - `https://old.moyrebenok.com.kz/admin/` — вход работает
   - логин пользователя, картинки из `/media/`, стили из `/static/`

Если что-то не так — основной домен пока не тронут, чинишь спокойно.

---

## Шаг 3. Собрать лендинг локально

На своей машине, в корне `preschool-landing`:

```bash
pnpm install --frozen-lockfile
pnpm build
```

Результат — каталог `dist/` (~320 КБ). Проверено: сборка проходит.

API-адрес зашит правильный (`https://api.moyrebenok.com.kz/api/v1`),
переменные окружения задавать не нужно.

---

## Шаг 4. Залить статику на сервер

```bash
ssh user@server "sudo mkdir -p /var/www/moyrebenok-landing/releases"

# из корня preschool-landing (Git Bash)
scp -r dist user@server:/tmp/landing-build

ssh user@server '
  REL=/var/www/moyrebenok-landing/releases/$(date +%Y%m%d-%H%M%S)
  sudo mv /tmp/landing-build "$REL"
  sudo chown -R www-data:www-data "$REL"
  sudo ln -sfn "$REL" /var/www/moyrebenok-landing/current
'
```

Симлинк `current` даёт мгновенный откат на прошлый релиз и деплой без простоя.

---

## Шаг 5. Переключить основной домен на лендинг

1. Замени содержимое `/etc/nginx/sites-available/moyrebenok.com.kz` на
   `deploy/nginx/moyrebenok.com.kz.conf` — пути к сертификату в нём уже верные.

2. Применить:

```bash
sudo nginx -t && sudo systemctl reload nginx
```

`nginx -t` обязателен: при ошибке конфига reload не выполнится и сайт продолжит работать.

3. Проверь:
   - `https://moyrebenok.com.kz/` — новый лендинг
   - секция со школами подтянулась (данные из API)
   - форма обратной связи отправляется без ошибки
   - `https://old.moyrebenok.com.kz/ru/` — старый проект жив

---

## Откат

```bash
sudo cp ~/nginx-backup-<дата>.conf /etc/nginx/sites-available/moyrebenok.com.kz
sudo nginx -t && sudo systemctl reload nginx
```

Старый проект вернётся на основной домен. Поддомен `old.` при этом продолжит
работать — он ничему не мешает.

---

## Что проверить отдельно: CORS

Лендинг ходит на `https://api.moyrebenok.com.kz` из браузера, то есть
кросс-доменно. В CORS-allowlist бэкенда должен быть origin:

```
https://moyrebenok.com.kz
```

Если его нет — секция школ покажет запасной вариант, а форма обратной связи
будет падать с сетевой ошибкой. Проверяется в консоли браузера (ошибки CORS)
или так:

```bash
curl -sI -H "Origin: https://moyrebenok.com.kz" \
  https://api.moyrebenok.com.kz/api/v1/landing/schools/ | grep -i access-control
```

Должен вернуться заголовок `access-control-allow-origin`. Кода бэкенда
`api.moyrebenok.com.kz` в этом репозитории нет, поэтому проверить заранее нельзя.

---

## Последующие деплои

```bash
pnpm build
# затем Шаг 4 — nginx менять больше не нужно
```
