<template>
  <section class="home">
    <div class="info _col _d">
      <UiText type="h1" text="QB Generator" />
      <UiText mode="bg" :text="$i18n('home.desc')" />
      <UiButton type="link" to="/generator" :title="$i18n('home.gtGen')">
        <UiIcon><BarcodeIcon /></UiIcon>
        <UiText type="h4" :text="$i18n('home.gtGen')" />
      </UiButton>
    </div>
    <div class="logo-wrapper"><LogoIcon /></div>
  </section>
</template>

<style scoped lang="scss">
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
