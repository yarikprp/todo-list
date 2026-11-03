import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig((mode) => {
    const isProd = mode === 'production'

    return {
      base: isProd ? '/todo-react/' : '/',
      plugins: [react()],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      }
  }
})
