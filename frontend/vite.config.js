import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: process.env.FRONTEND_PORT,
    strictPort: true,
    watch: {
      usePolling: true
    }
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '/@': fileURLToPath(new URL('/src/pages/styles', import.meta.url))
    }
  }
})
