// vite.config.ts
import Inspect from 'vite-plugin-inspect';
// import {resolve} from 'path';

export default {
  plugins: [Inspect()],
  build: {
    rollupOptions: {
      input: {
        // main: resolve(__dirname, 'index.html'),
        // team: resolve(__dirname, 'team/index.html'),
        // services: resolve(__dirname, 'services/index.html'), 
        // date: resolve(__dirname, 'date/index.html'), 
        // payment: resolve(__dirname, 'payment/index.html')
      }
    }
  }
}