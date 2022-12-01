<template>
  <section class="home">
    <div class="_column headers">
      <h1>Barcode Generator</h1>
      <h2>Application for generating your own barcodes</h2>
      <p>Create Barcodes in a couple of clicks in your own design,<br>use the desired standard and export in the desired format.<br>Save templates, share and use them at any time</p>
      <router-link class="_btn" to="/generator">
        <small>Go to Generator</small>
      </router-link>
    </div>
    <div class="logo-wrapper">
      <LogoIcon />
    </div>
  </section>
</template>

<script setup>
import LogoIcon from '@/assets/svg/LogoIcon.vue'
</script>

<style scoped lang="scss">
.home {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: var(--space);
}

.logo-wrapper {
  filter: drop-shadow(0 0 10rem var(--circle-c));

  svg {
    width: 100%;
    height: 100%;
  }
}

.headers {
  h1 { font-size: 4rem; }
  h2 { font-size: 2rem; }
  p { font-size: 1.2rem; }
}
</style>
