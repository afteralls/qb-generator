<template>
  <div class="copyright _center">
    <h4>Made with</h4>
    <div class="_i"><HeartIcon /></div>
    <h4>
      by
      <a
        href="https://t.me/afterallspace"
        target="_blank"
        class="text"
        :title="$i18n('header.telegram')"
      >
        Daniil Sukharnikov
      </a>
    </h4>
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
