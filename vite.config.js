import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // 👈 This makes expect, describe, it globally available
    environment: 'jsdom',
    setupFiles: './setupTests.js' // if you use jest-dom
  },
  build: {
    minify: 'terser', // instead of 'esbuild'
    terserOptions: {
      compress: {
        // Avoid aggressive compression
        drop_console: false,
        drop_debugger: false,
        unsafe: false
      },
      mangle: false
    }
  }
});
