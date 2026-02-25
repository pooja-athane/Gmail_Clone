import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const isDev = command === 'serve'
  const isVercel = env.VERCEL === '1'
  const base = isDev || isVercel ? '/' : '/Gmail_Clone/'

  return {
    plugins: [react(), tailwindcss()],
    base: base,
    build: {
      outDir: 'docs', // Output to 'docs' folder for GitHub Pages
      rollupOptions: {
        input: 'index.html', // Explicitly set index.html as entry
      },
    },
  };
})
 