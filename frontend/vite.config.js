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
  }
})
