<template>
  <div class="main-page">
    <img src="../assets/img/barcode.png" alt="Штрих-код">
    <h1>Генератор штрих-кодов</h1>
    <p>Приложение для генерации штрих-кодов в различных форматах</p>
    <button
      class="_btn"
      @click.prevent="$router.push('/barcode-gen-app/dist/generator')"
    >Перейти к Генератору</button>
    <div style="display: flex; gap: 15px;">
      <div class="main-row">
        <a href="https://t.me/apocalypsecore">
          <img src="../assets/img/telegram.png" alt="Telegram">
          <h3>Связаться</h3>
        </a>
      </div>
      <div class="main-row">
        <a href="https://github.com/post-apocalypse/barcode-gen-app">
          <img src="../assets/img/github.png" alt="GitHub">
          <h3>Исходный код</h3>
        </a>
      </div>
    </div>
    <div class="main-row">
      <h3>Написано на</h3>
      <img src="../assets/img/logo.png" alt="Vue Logo">
      <h3>Vue.js</h3>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/scss/variables';

a {
  text-decoration: none;
  display: flex;
  align-items: center;
}

a, a:visited {
  color: black;
}

.main-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  text-align: center;

  h1, p, h3 {
    margin: 0;
  }

  img {
    max-width: 200px;
  }

  button {
    padding: 0 15px;
  }
}

.main-row {
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 30px;
    margin: 5px;
  }
}
</style>
