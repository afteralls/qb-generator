<template>
  <div class="header-wrapper">
    <div class="_container">
      <div class="header _row">
        <div class="_row">
          <div class="_i md"><LogoIcon /></div>
          <header>QB Generator</header>
        </div>
        <div class="_row">
          <ThemeToggler />
          <div
            @click="changeLang"
            :title="curLang === 'ru' ? $i18n('header.lang') : $i18n('header.lang')"
            class="_i-btn"
          ><button><TranslateIcon /></button></div>
          <div class="br"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
const changeLang = inject('i18n') as Function
const curLang = inject('curLang') as CurLang
</script>

<style scoped lang='scss'>
.header-wrapper {
  position: fixed;
  box-sizing: border-box;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: var(--tp-c);
  backdrop-filter: blur(8px);
}

.header {
  height: toRem(50);
  width: 100%;
  justify-content: space-between;
}

.br {
  height: 100%;
  width: 1px;
  background-color: var(--txt-m);
}
</style>