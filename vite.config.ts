
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // تأكد أن المسار الأساسي يطابق اسم المستودع الخاص بك على GitHub
  base: '/profile/',
  define: {
    // هذا الجزء ضروري جداً لمنع خطأ "process is not defined" في المتصفح
    'process.env': {
      API_KEY: process.env.API_KEY || ''
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  }
});
