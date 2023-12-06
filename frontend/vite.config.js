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
  define: {
    "process": process,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '$styles': fileURLToPath(new URL('/src/styles', import.meta.url)),
      '$images': fileURLToPath(new URL('/src/images', import.meta.url)),
      '$context': fileURLToPath(new URL('/src/context', import.meta.url)),
      '$components': fileURLToPath(new URL('/src/components', import.meta.url)),
    },
  }
})
