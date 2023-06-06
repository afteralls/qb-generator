<template>
  <section class="library _ui _row">
    <div class="info _column">
      <UiText type="h2" class="md" :text="$i18n('home.libTitle')" />
      <UiText class="wp" :text="$i18n('home.libDesc')" />
      <UiButton :title="$i18n('home.libLinkTitle')" type="link" to="/library">
        <UiIcon><InfoIcon /></UiIcon>
        <UiText type="h4" :text="$i18n('home.gtLib')" />
      </UiButton>
    </div>
    <div class="banner"><QrIcon /></div>
  </section>
</template>

<style scoped lang="scss">
.library {
  width: 100%;
  justify-content: flex-end;
  text-align: right;
  padding: calc(var(--space) * 2);
  gap: calc(var(--space) * 2);

  @media (max-width: $sm) {
    flex-direction: column-reverse;
  }
}

.info {
  align-items: flex-end;

  p {
    max-width: toRem(550);
  }

  @media (max-width: $sm) {
    align-items: center;
    text-align: center;
  }
}

.banner {
  svg {
    width: toRem(200);
    height: toRem(200);
  }
}
</style>
