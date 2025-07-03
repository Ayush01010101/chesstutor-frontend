import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
   
    
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ['**/*.wasm'],
  optimizeDeps: {
    include: ['stockfish.wasm'],
  },
  // server: {
    
  //   headers: {
  //     'Cross-Origin-Opener-Policy': 'same-origin',
  //     'Cross-Origin-Embedder-Policy': 'require-corp',
  //   },
  // },
})