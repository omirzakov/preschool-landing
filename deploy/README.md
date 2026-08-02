# Деплой лендинга на moyrebenok.com.kz

Итоговая схема:

| Домен | Что отдаёт |
|---|---|
| `moyrebenok.com.kz` | новый лендинг (статика Vite) |
| `old.moyrebenok.com.kz` | старый Django-проект `online_preschool` (остаётся жив) |
| `api.moyrebenok.com.kz` | бэкенд API — **не трогаем** |

Порядок важен: сначала поднимаем старый проект на поддомене и проверяем его,
и только потом переключаем основной домен. Основной домен не лежит ни минуты,
откат — переключение симлинка.

## Что уже есть на сервере

Конфиги nginx в `/etc/nginx/sites-enabled/`:

| Файл | Что обслуживает |
|---|---|
| `online_preschool` | старый Django на `moyrebenok.com.kz` |
| `api.moyrebenok.com.kz` | бэкенд API — не трогаем |
| `default` | заглушка nginx |

Параметры старого проекта (взяты из его рабочего конфига):

| | |
|---|---|
| Каталог проекта | `/home/projects/online_preschool` |
| gunicorn | unix-сокет `/run/gunicorn.sock` |
| Статика Django | `/home/projects/online_preschool/staticfiles/` |
| Медиа | отдельного блока в nginx нет — отдаёт сам Django |
| Сертификат | `/etc/letsencrypt/live/moyrebenok.com.kz/` (домен + `www`) |

Кода лендинга на сервере нет и не будет: собираем локально, заливаем готовую
статику. Node на сервере не нужен.

Сервер: `root@77.105.141.91`. Все команды ниже даны с реальными адресами
и путями — подставлять ничего не нужно.

---

## Шаг 1. Бэкап

```bash
sudo cp /etc/nginx/sites-available/online_preschool ~/nginx-backup-$(date +%F).conf
```

---

## Шаг 2. DNS-запись для поддомена

В панели управления доменом добавь **A-запись**:

```
old.moyrebenok.com.kz  →  77.105.141.91
```

Дождись, пока разойдётся (может занять до нескольких часов):

```bash
dig +short old.moyrebenok.com.kz
```

**Пока команда не вернёт IP сервера — дальше не идти.** Certbot не сможет
выпустить сертификат и шаг 3 упрётся в ошибку.

---

## Шаг 3. Поднять старый проект на old.moyrebenok.com.kz

### 3.1. Создать конфиг

Сначала файл, потом симлинк — если сделать наоборот, `nginx -t` упадёт с
`No such file or directory` на битой ссылке.

```bash
sudo tee /etc/nginx/sites-available/old.moyrebenok.com.kz > /dev/null <<'EOF'
server {
    listen 80;
    server_name old.moyrebenok.com.kz;

    location = /favicon.ico { access_log off; log_not_found off; }

    location /static/ {
        alias /home/projects/online_preschool/staticfiles/;
    }

    location / {
        include proxy_params;
        proxy_pass http://unix:/run/gunicorn.sock;
    }
}
EOF
```

### 3.2. Включить

```bash
sudo ln -s /etc/nginx/sites-available/old.moyrebenok.com.kz /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

Если `nginx -t` ругается — убери симлинк (`sudo rm /etc/nginx/sites-enabled/old.moyrebenok.com.kz`)
и разбирайся, основной сайт при этом не затронут.

### 3.3. Сертификат

```bash
sudo certbot --nginx -d old.moyrebenok.com.kz
```

Certbot сам допишет ssl-директивы и редирект с HTTP на HTTPS.

### 3.4. Настройки Django

В `/home/projects/online_preschool/online_preschool/settings.py`:

```python
# ALLOWED_HOSTS = ['*'] — поддомен уже покрывает, менять не нужно.
# Django 4.2 требует явный origin для POST-форм (логин) по HTTPS:
CSRF_TRUSTED_ORIGINS = ['https://old.moyrebenok.com.kz']
```

Перезапустить:

```bash
sudo systemctl restart gunicorn
# если имя сервиса другое: systemctl list-units | grep -i gunicorn
```

### 3.5. Запись в django.contrib.sites

Проект использует `SITE_ID = 1` и allauth — домен из этой записи подставляется
в письма (сброс пароля). Не обновишь — ссылки из писем поведут на лендинг:

```bash
cd /home/projects/online_preschool
python manage.py shell -c "from django.contrib.sites.models import Site; s=Site.objects.get(pk=1); s.domain='old.moyrebenok.com.kz'; s.name='old.moyrebenok.com.kz'; s.save(); print(s.domain)"
```

Если проект под virtualenv — сначала активируй его (`source venv/bin/activate`).

### 3.6. Проверка

- `https://old.moyrebenok.com.kz/` открывается, редиректит на `/ru/`
- `https://old.moyrebenok.com.kz/admin/` — вход работает
- стили `/static/`, картинки `/media/`, логин пользователя

Основной домен всё ещё показывает старый проект — если что-то не так, чинишь без спешки.

---

## Шаг 4. Собрать лендинг локально

На своей машине, в корне `preschool-landing`:

```bash
pnpm install --frozen-lockfile
pnpm build
```

Результат — каталог `dist/` (~320 КБ). Адрес API зашит в сборку
(`https://api.moyrebenok.com.kz/api/v1`), переменные окружения не нужны.

---

## Шаг 5. Залить статику

Из корня `preschool-landing` (Git Bash):

```bash
scp -r dist root@77.105.141.91:/tmp/landing-build
```

Затем на сервере:

```bash
REL=/var/www/moyrebenok-landing/releases/$(date +%Y%m%d-%H%M%S)
sudo mkdir -p "$REL"
sudo cp -r /tmp/landing-build/. "$REL"
sudo chown -R www-data:www-data "$REL"
sudo ln -sfn "$REL" /var/www/moyrebenok-landing/current
rm -rf /tmp/landing-build
ls -la /var/www/moyrebenok-landing/current/
```

Последняя команда должна показать `index.html` и каталог `assets`.

Симлинк `current` даёт деплой без простоя и мгновенный откат на прошлый релиз.

---

## Шаг 6. Переключить основной домен на лендинг

Файл старого проекта не трогаем — создаём отдельный конфиг и переключаем симлинки.

### 6.1. Создать конфиг лендинга

```bash
sudo tee /etc/nginx/sites-available/moyrebenok.com.kz > /dev/null <<'EOF'
server {
    listen 80;
    server_name moyrebenok.com.kz www.moyrebenok.com.kz;

    location /.well-known/acme-challenge/ {
        root /var/www/html;
    }

    location / {
        return 301 https://moyrebenok.com.kz$request_uri;
    }
}

server {
    listen 443 ssl;
    server_name www.moyrebenok.com.kz;

    ssl_certificate     /etc/letsencrypt/live/moyrebenok.com.kz/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/moyrebenok.com.kz/privkey.pem;
    include             /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam         /etc/letsencrypt/ssl-dhparams.pem;

    return 301 https://moyrebenok.com.kz$request_uri;
}

server {
    listen 443 ssl;
    server_name moyrebenok.com.kz;

    ssl_certificate     /etc/letsencrypt/live/moyrebenok.com.kz/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/moyrebenok.com.kz/privkey.pem;
    include             /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam         /etc/letsencrypt/ssl-dhparams.pem;

    root  /var/www/moyrebenok-landing/current;
    index index.html;

    access_log /var/log/nginx/moyrebenok-landing.access.log;
    error_log  /var/log/nginx/moyrebenok-landing.error.log;

    gzip on;
    gzip_comp_level 5;
    gzip_min_length 1024;
    gzip_proxied any;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml;

    # Имена файлов в /assets/ содержат хеш — кешируем надолго.
    location /assets/ {
        try_files $uri =404;
        access_log off;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # index.html не кешируем, иначе после деплоя отдастся старая версия.
    location = /index.html {
        add_header Cache-Control "no-store";
    }

    location / {
        try_files $uri $uri/ /index.html;
    }
}
EOF
```

`http2` намеренно не включён: в текущем конфиге его нет, а директива `http2 on`
требует nginx >= 1.25.1 и на более старой версии уронит `nginx -t`.

### 6.2. Переключить

```bash
sudo rm /etc/nginx/sites-enabled/online_preschool
sudo ln -s /etc/nginx/sites-available/moyrebenok.com.kz /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

`rm` удаляет только симлинк — конфиг в `sites-available` остаётся на месте.
`&&` гарантирует, что reload не выполнится при ошибке конфига.

### 6.3. Проверка

- `https://moyrebenok.com.kz/` — новый лендинг
- секция со школами подтянула данные из API
- форма обратной связи отправляется
- `https://old.moyrebenok.com.kz/ru/` — старый проект жив

---

## Откат

```bash
sudo rm /etc/nginx/sites-enabled/moyrebenok.com.kz
sudo ln -s /etc/nginx/sites-available/online_preschool /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

Старый проект вернётся на основной домен. Поддомен `old.` продолжит работать,
он ничему не мешает.

---

## Если лендинг открылся, но данные не подгрузились: CORS

Лендинг ходит на `https://api.moyrebenok.com.kz` кросс-доменно. В CORS-allowlist
бэкенда должен быть origin `https://moyrebenok.com.kz`. Проверка:

```bash
curl -sI -H "Origin: https://moyrebenok.com.kz" \
  https://api.moyrebenok.com.kz/api/v1/landing/schools/ | grep -i access-control
```

Должен вернуться заголовок `access-control-allow-origin`. Если пусто — добавь
домен в настройки CORS бэкенда, иначе секция школ покажет запасной вариант,
а форма обратной связи будет падать с сетевой ошибкой.

---

## Последующие деплои

```bash
pnpm build
scp -r dist root@77.105.141.91:/tmp/landing-build
```

Дальше блок с сервера из шага 5. Конфиги nginx менять больше не нужно.
