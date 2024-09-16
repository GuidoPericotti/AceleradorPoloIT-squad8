import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 4096, // Ajusta el límite para los recursos en línea (en bytes)
  },
  assetsInclude: ['**/*.mp4'], // Asegúrate de que Vite incluya archivos mp4 como activos
});
