<template>
  <UiBlock layout="wrapper">
    <UiBlock type="section" layout="row" :center="true" class="not-found">
      <div class="banner"><NotFoundIcon /></div>
      <UiBlock layout="col" class="info">
        <UiText type="h2" mode="lg" :text="$i18n('notfound.title')" />
        <UiButton to="/" :title="$i18n('notfound.linkTitle')">
          <UiIcon><HomeIcon /></UiIcon>
          <UiText type="h4" :text="$i18n('notfound.btn')" />
        </UiButton>
      </UiBlock>
    </UiBlock>
  </UiBlock>
</template>

<style scoped lang="scss">
.not-found {
  @media (max-width: $sm) {
    flex-direction: column;
  }
}

.banner {
  svg {
    height: toRem(400);
    width: auto;
  }

  @media (max-width: $md) {
    svg {
      width: toRem(350);
      height: auto;
    }
  }

  @media (max-width: $sm) {
    svg {
      width: toRem(250);
      height: auto;
    }
  }
}

.info {
  align-items: center;
  text-align: center;
  width: 100%;

  @media (max-width: $sm) {
    align-items: center;
    text-align: center;
  }
}
</style>
