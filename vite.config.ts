import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// In dev we proxy /api -> the public API so browser calls aren't blocked by CORS.
// In production the app calls the absolute API URL (see src/lib/api.ts); the
// backend must allow the landing's origin in its CORS allowlist.
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.moyrebenok.com.kz',
        changeOrigin: true,
        secure: true,
      },
    },
  },
})
