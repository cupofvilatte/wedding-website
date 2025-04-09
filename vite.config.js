import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src/',          // Use src as the root folder
  build: {
    outDir: '../dist',     // ✅ Output in the root dist folder
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),
        home: resolve(__dirname, 'src/pages/home/index.html'),
        faq: resolve(__dirname, 'src/pages/faq/index.html'),
        guestbook: resolve(__dirname, 'src/pages/guestbook/index.html'),
        album: resolve(__dirname, 'src/pages/album/index.html')
      }
    }
  }
});
