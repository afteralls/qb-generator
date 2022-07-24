const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '.' : '/',
  pwa: {
    name: 'Генератор штрих-кодов',
    themeColor: '#2AF598',
    manifestOptions: {
      display: 'standalone',
      background_color: '#2AF598'
    },
    iconPaths: {
      msTileImage: 'img/icons/icon-512x512.png'
    },
    icons: [
      {
        'src': 'img/icons/icon-192x192.png',
        'sizes': '192x192',
        'type': 'image/png',
        'purpose': 'maskable'
      },
      {
        'src': 'img/icons/icon-512x512.png',
        'sizes': '512x512',
        'type': 'image/png',
        'purpose': 'maskable'
      }
    ]
  }
})
