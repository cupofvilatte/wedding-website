import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src/',
  build: {
    outDir: '../dist',
    // cssCodeSplit: false,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),
        home: resolve(__dirname, 'src/pages/home/index.html'),
        faq: resolve(__dirname, 'src/pages/faq/index.html'),
        guestbook: resolve(__dirname, 'src/pages/guestbook/index.html'),
        album: resolve(__dirname, 'src/pages/album/index.html')
      },
      output: {
        manualChunks(id) {
          if (id.includes('injectHeaderFooter')) {
            return null;
          }
        }
      }
    }
  }
});
