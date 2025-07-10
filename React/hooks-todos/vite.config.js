import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'   // vite 路径别名配置  node 
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // 别名路径配置
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
