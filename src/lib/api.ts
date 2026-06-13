// Public landing API — https://api.moyrebenok.com.kz/api/v1
// Both endpoints below are public (no auth). Base is overridable via VITE_API_BASE.
//
// Dev: default to the relative path "/api/v1" so requests go through the Vite
//      proxy (vite.config.ts) and avoid cross-origin CORS issues locally.
// Prod: default to the absolute API URL. The backend must include the landing's
//       origin in its CORS allowlist for browser calls to succeed.
const API_BASE =
  import.meta.env.VITE_API_BASE?.replace(/\/$/, '') ||
  (import.meta.env.DEV ? '/api/v1' : 'https://api.moyrebenok.com.kz/api/v1')

export type School = {
  id: number
  name: string
  logo: string | null
  address: string | null
  phone: string | null
  children_count: number
  staff_count: number
}

/** GET /landing/schools/ — active connected schools for the social-proof section. */
export async function getSchools(signal?: AbortSignal): Promise<School[]> {
  const res = await fetch(`${API_BASE}/landing/schools/`, {
    headers: { Accept: 'application/json' },
    signal,
  })
  if (!res.ok) throw new Error(`schools ${res.status}`)
  return res.json()
}

export type FeedbackPayload = {
  name: string
  phone: string
  email?: string
  message: string
}

export type FeedbackResult =
  | { ok: true }
  | { ok: false; status: number; fieldErrors?: Record<string, string[]>; detail?: string }

/** POST /landing/feedback/ — landing lead form. IP-throttled (scope "feedback"). */
export async function sendFeedback(
  payload: FeedbackPayload,
): Promise<FeedbackResult> {
  let res: Response
  try {
    res = await fetch(`${API_BASE}/landing/feedback/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })
  } catch {
    // network / CORS failure
    return { ok: false, status: 0, detail: 'network' }
  }

  if (res.ok) return { ok: true }

  let data: Record<string, unknown> = {}
  try {
    data = await res.json()
  } catch {
    /* non-JSON error body */
  }

  const { detail, ...rest } = data as {
    detail?: string
    [k: string]: unknown
  }
  const fieldErrors = Object.keys(rest).length
    ? (rest as Record<string, string[]>)
    : undefined

  return { ok: false, status: res.status, fieldErrors, detail }
}
