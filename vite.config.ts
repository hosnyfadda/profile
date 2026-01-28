
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path must match your repository name
  base: '/profile/',
  define: {
    // Define environment variables for Vite
    'import.meta.env.VITE_API_KEY': JSON.stringify(process.env.API_KEY || ''),
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: false
  }
});
