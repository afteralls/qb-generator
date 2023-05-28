import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/module.scss";'
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      imports: [
        {
          'vue': ['ref', 'computed', 'watch', 'reactive', 'onMounted', 'inject'],
          'vue-router': ['useRouter', 'RouterView', 'useRoute'],
          'pinia': ['defineStore'],
          'jsbarcode': [
            ['default', 'JsBarcode'],
          ],
          '@vueuse/core': [
            'useStorage',
            'useDark',
            'useNavigatorLanguage',
            'useEventListener',
            'useShare',
            'onClickOutside',
            'useUrlSearchParams'
          ]
        }
      ],
      dts: './types/imports.d.ts',
      defaultExportByFilename: true,
      dirs: [
        './src/utils',
        './src/stores'
      ]
    }),
    Components({
      dirs: ['./src/components', './src/assets/svg'],
      extensions: ['vue'],
      deep: true,
      dts: './types/components.d.ts'
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'Barcode Generator',
        short_name: 'Barcode Generator',
        description: 'Аpplication for generating your own barcodes',
        theme_color: '#242424',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
