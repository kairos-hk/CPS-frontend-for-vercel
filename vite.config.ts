import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://54.180.126.168:5001',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  }
})
