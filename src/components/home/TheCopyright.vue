<template>
  <UiBlock :center="true" class="copyright">
    <UiText type="h4" text="Made with" />
    <UiIcon><HeartIcon /></UiIcon>
    <UiText type="h4" text="by" />
    <UiLink to="https://t.me/afterallspace" mode="text" :title="$i18n('links.telegram')">
      <UiText type="h4" text="Daniil Sukharnikov" />
    </UiLink>
  </UiBlock>
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
