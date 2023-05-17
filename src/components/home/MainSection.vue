<template>
  <section class="home">
    <div class="info _column">
      <h1>QB Generator</h1>
      <p class="lg">{{ $i18n('home.desc') }}</p>
      <RouterLink class="_btn _center" to="/generator" :title="$i18n('home.gtGen')">
        <div class="_i"><BarcodeIcon /></div>
        <h3>{{ $i18n('home.gtGen') }}</h3>
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
    flex-direction: column;
  }
}

.info {
  align-items: flex-start;
  max-width: toRem(600);

  @media (max-width: $lg) {
    text-align: center;
    align-items: center;
    // order: 2;
  }
}

.logo-wrapper {
  filter: drop-shadow(0 0 10rem var(--m));
  min-width: toRem(400);
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: $lg) {
    svg {
      order: 1;
      max-width: 250px;
      height: 100%;
    }
  }
}
</style>