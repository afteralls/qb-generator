<template>
  <div class="_wrapper">
    <div class="not-found _row _center">
      <div class="banner"><NotFoundIcon /></div>
      <div class="_column info">
        <h2>{{ $i18n('notfound.title') }}</h2>
        <RouterLink to="/" :title="$i18n('notfound.linkTitle')" class="_btn">
          <div class="_i"><HomeIcon /></div>
          <h4>{{ $i18n('notfound.btn') }}</h4>
        </RouterLink>
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
