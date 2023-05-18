<template>
  <section class="home">
    <div class="info _column">
      <h1>QB Generator</h1>
      <p class="bg">{{ $i18n('home.desc') }}</p>
      <RouterLink class="_btn" to="/generator" :title="$i18n('home.gtGen')">
        <div class="_i"><BarcodeIcon /></div>
        <h4>{{ $i18n('home.gtGen') }}</h4>
      </RouterLink>
    </div>
    <div class="logo-wrapper"><LogoIcon /></div>
  </section>
</template>

<style scoped lang='scss'>
.home {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: var(--space);

  @media (max-width: $lg) {
    flex-direction: column-reverse;
  }
}

.info {
  align-items: flex-start;
  max-width: toRem(600);

  @media (max-width: $lg) {
    text-align: center;
    align-items: center;
  }
}

.logo-wrapper {
  filter: drop-shadow(0 0 10rem var(--m));
  width: toRem(400);
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: $lg) {
    width: toRem(250);
  }

  @media (max-width: $zf) {
    width: toRem(100%);
  }
}
</style>