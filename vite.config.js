import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',          // Use src as the root folder
  server: {
    port: 5173            // Dev server port
  },
  build: {
    outDir: '../dist',     // Output directory for the production build
    rollupOptions: {
      input: {
        main: './src/index.html',                     // Main entry point
        home: './src/pages/home/index.html',          // Home page
        faq: './src/pages/faq/index.html',            // FAQ page
        guestbook: './src/pages/guestbook/index.html', // Guestbook page
        album: './src/pages/album/index.html'         // Album page
      }
    }
  }
});