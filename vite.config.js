import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => {
  const isDev = command === 'serve'
  const isVercel = process.env.VERCEL === '1'

  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    base: isDev || isVercel ? '/' : '/Gmail_Clone/',
  }
})