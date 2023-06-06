<template>
  <div class="copyright _center">
    <UiText type="h4" text="Made with" />
    <UiIcon><HeartIcon /></UiIcon>
    <UiText type="h4" text="by" />
    <UiLink href="https://t.me/afterallspace" mode="text" :title="$i18n('header.telegram')">
      <UiText type="h4" text="Daniil Sukharnikov" />
    </UiLink>
  </div>
</template>

<style scoped lang="scss">
.copyright {
  gap: toRem(5);
  flex-wrap: wrap;

  svg {
    fill: red;
  }
}
</style>
