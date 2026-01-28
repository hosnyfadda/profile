
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // المسار الأساسي يجب أن يطابق اسم المستودع الخاص بك
  base: '/profile/',
  define: {
    // تعريف آمن لمتغيرات البيئة
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ''),
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production')
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: false
  }
});
