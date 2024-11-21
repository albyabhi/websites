import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    global: 'globalThis',
  },
  server: {
    proxy: {
      '/auth': 'http://localhost:5000',
      '/note': 'http://localhost:5000',
    },
  },
});
