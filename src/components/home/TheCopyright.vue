<template>
  <div class="copyright _center">
    <h4>Made with</h4>
    <div class="_i"><HeartIcon /></div>
    <h4>by <a href="https://t.me/afterallspace" :title="$i18n('header.telegram')">Daniil Sukharnikov</a></h4>
  </div>
</template>

<style scoped lang="scss">
.copyright {
  gap: 5px;
  flex-wrap: wrap;

  svg {
    fill: var(--txt-c);
    fill: red;
  }

  a { transition: var(--tr); }
  a:hover { color: var(--m); }
}
</style>
