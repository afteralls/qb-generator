const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Barcode Generator',
    themeColor: '#559bab',
    lang: 'ru',
    short_name: 'barcode-generator',
    description: 'Приложение для генерации штрих-кодов в различных форматах',
    manifestOptions: {
      display: 'standalone',
      background_color: '#559bab'
    },
  }
})
