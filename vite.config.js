import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/log-in-out-react-bs/",
  assetsDir: 'assets',
  plugins: [react()],
})
