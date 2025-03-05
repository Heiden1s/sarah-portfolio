import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/https://github.com/heiden1s/sarah-portfolio.git/',
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase',
      scopeBehaviour: 'local',
    },
    preprocessorOptions: {
      css: {
        sourceMap: true,
      },
    },
  },
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
}) 