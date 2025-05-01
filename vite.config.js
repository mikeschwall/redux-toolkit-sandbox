import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
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
