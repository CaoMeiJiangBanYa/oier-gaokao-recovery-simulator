import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // 必须和你的仓库名完全一致
  base: '/oier-gaokao-recovery-simulator/',
  plugins: [react()],
  build: {
    emptyOutDir: true
  }
})
