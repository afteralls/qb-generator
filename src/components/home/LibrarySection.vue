<template>
  <UiBlock type="section" layout="row" :wp="true" mode="lg" class="library">
    <UiBlock layout="col" class="info">
      <UiText type="h2" class="md" :text="$i18n('home.libTitle')" />
      <UiText type="p" mode="wp" :text="$i18n('home.libDesc')" />
      <UiButton :title="$i18n('home.libLinkTitle')" to="/library">
        <UiIcon><InfoIcon /></UiIcon>
        <UiText type="h4" :text="$i18n('home.gtLib')" />
      </UiButton>
    </UiBlock>
    <div class="banner"><QrIcon /></div>
  </UiBlock>
</template>

<style scoped lang="scss">
.library {
  width: 100%;
  justify-content: flex-end;
  text-align: right;
  padding: calc(var(--space) * 2);

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
    transition: var(--tr);
    fill: var(--txt-m);
    width: toRem(200);
    height: toRem(200);
  }
}
</style>
