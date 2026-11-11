import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Using base '/' for GitHub user pages (raifatk.github.io)
export default defineConfig({
  plugins: [react()],
  base: '/',
})
