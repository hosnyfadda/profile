
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // تأكد أن المسار الأساسي يطابق اسم المستودع الخاص بك على GitHub
  base: '/profile/',
  define: {
    // تعريف المفتاح بشكل ثابت أو كمتغير نصي لمنع خطأ process is not defined
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ''),
    'process.env': {}
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', '@google/genai'],
        },
      },
    },
  }
});
