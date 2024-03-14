import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// vite.config.js
export default defineConfig({
  server:{
    proxy: {
      //'/api': "http://localhost:5000"
      '/api': {
        // Replace 'http://localhost:5000' with the base URL of your backend server
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      
    }
    
  },
  plugins:[react()]

})

