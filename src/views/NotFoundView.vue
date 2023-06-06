<template>
  <div class="_wrapper">
    <div class="not-found _row _center">
      <div class="banner"><NotFoundIcon /></div>
      <div class="_column info">
        <UiText type="h2" mode="lg" :text="$i18n('notfound.title')" />
        <UiButton type="link" to="/" :title="$i18n('notfound.linkTitle')">
          <UiIcon><HomeIcon /></UiIcon>
          <UiText type="h4" :text="$i18n('notfound.btn')" />
        </UiButton>
      </div>
    </div>
  </div>
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

  @media (max-width: $sm) {
    flex-direction: column;

    svg {
      width: toRem(250);
      height: auto;
    }
  }
}

.info {
  align-items: flex-start;

  @media (max-width: $sm) {
    align-items: center;
    text-align: center;
  }
}
</style>
