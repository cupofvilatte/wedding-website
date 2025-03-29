import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',          // Use src as the root folder
  server: {
    port: 5173            // Dev server port
  },
  base: '/wedding-website/',   // 👈 GitHub Pages base URL
  build: {
    outDir: '../dist',     // ✅ Output in the root dist folder
    rollupOptions: {
      input: {
        home: './src/pages/home/index.html',          // Home page
        faq: './src/pages/faq/index.html',            // FAQ page
        guestbook: './src/pages/guestbook/index.html', // Guestbook page
        album: './src/pages/album/index.html'         // Album page
      }
    }
  }
});
