import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import Icons from 'unplugin-icons/vite';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',

  vite: {
    plugins: [
      tailwindcss(),
      Icons({
        compiler: 'astro',
      }),
    ],
  },

  adapter: cloudflare({
    imageService: 'passthrough',
    imagesBindingName: false,
  }),
  session: {
    driver: 'memory',
  },
});
