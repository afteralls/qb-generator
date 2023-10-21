<<<<<<< HEAD
<template>
  <div class="main-page">
    <img src="../assets/img/barcode.webp" alt="Штрих-код">
    <div class="main-page__text">
      <h1>Barcode Generator</h1>
      <p>Аpplication for generating your own barcodes</p>
    </div>
    <button
      class="_btn"
      @click.prevent="$router.push('/generator')"
    ><h3>Go to Generator</h3></button>
    <div style="display: flex; gap: 15px;">
      <div class="main-page__row">
        <a class="_link" href="https://t.me/apocalypsecore">
          <div class="_img-wrapper"><img src="../assets/img/telegram.webp" alt="Telegram"></div>
          <h3>Text me</h3>
        </a>
        <a class="_link" href="https://github.com/post-apocalypse/barcode-gen-app">
          <div class="_img-wrapper"><img src="../assets/img/github.webp" alt="Add"></div>
          <h3>Source</h3>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/scss/main';

.main-page {
  @include all-cent;
  flex-direction: column;
  gap: $gap * 2;
  width: 100%;
  text-align: center;

  &__text {
    @include all-cent;
    flex-direction: column;
    gap: $gap;
    background: rgba(255,255,255,0.2);
    backdrop-filter: blur(10px);
    padding: $gap ($gap * 3);

    -webkit-mask: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 7%,
      rgba(0, 0, 0, 1) 93%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  &__row {
    @include all-cent;
    gap: $gap;
  }

  h1, p, h3 { margin: 0; }
  img { max-width: 200px; }
  button { padding: 0 15px; }
}
</style>
=======

import TheCopyright from '../components/HomeView/TheCopyright.vue';

<template>
<div class="_wrapper">
  <TheHomeSection />
  <TheTemplatesSection />
  <TheLibrarySection />
  <TheCopyright />
</div>
</template>
>>>>>>> 5baed4873112c0132bf6864ad9d3b64d222d22b6
