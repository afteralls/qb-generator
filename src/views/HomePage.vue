<template>
  <div class="main-page">
    <h1>Генератор штрих-кодов</h1>
    <p>Приложение для генерации штрих-кодов в различныйх форматах</p>
    <button class="_btn" @click.prevent="$router.push('/barcode-generation-app/dist/barcode')">Перейти к Генератору</button>
  </div>
</template>

<style lang="scss">
@import '../assets/scss/variables';

.main-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: $gap;
}
</style>
