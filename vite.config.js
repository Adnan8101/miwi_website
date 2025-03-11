import { resolve } from 'path';

export default {
  // ...existing configuration...
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'index.html')
    }
  }
}
