
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // استبدل REPO-NAME باسم المستودع الخاص بك على GitHub لضمان تحميل الملفات بشكل صحيح
  base: '/REPO-NAME/',
  build: {
    outDir: 'dist',
  }
});
