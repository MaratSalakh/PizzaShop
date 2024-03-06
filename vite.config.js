import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      // Plugin options
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      pngquant: {
        quality: [0.65, 0.9],
        speed: 4,
      },
      mozjpeg: {
        quality: 65,
      },
      svgo: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
        ],
      },
    }),
    // Add any other plugins you're using
  ],
});
