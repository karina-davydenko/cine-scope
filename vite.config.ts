import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import less from 'less'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests',
    mockReset: true,
  },
  css: {
    preprocessorOptions: {
      [less]: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#1890ff',
        },
      },
    },
  },
})
