import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Proxy API routes to `vercel dev` (default port 3000) during local development.
    proxy: {
      '/api': {
        target: process.env.VITE_DEV_API_PROXY ?? 'http://127.0.0.1:3000',
        changeOrigin: true,
      },
    },
  },
})
