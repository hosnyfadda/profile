
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // تم ضبط المسار الأساسي ليتوافق مع اسم المستودع "profile"
  base: '/profile/',
  build: {
    outDir: 'dist',
  }
});
