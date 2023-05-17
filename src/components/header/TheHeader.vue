<template>
  <div class="header-wrapper">
    <div class="_container">
      <div class="header _row">
        <RouterLink to="/" class="icon _row">
          <div class="_i"><QrIcon /></div>
          <header>QBG</header>
        </RouterLink>
        <div class="options _row">
          <ThemeToggler />
          <div
            @click="changeLang"
            :title="curLang === 'ru' ? $i18n('header.lang') : $i18n('header.lang')"
            class="_i-btn"
          >
            <button><TranslateIcon /></button>
          </div>
          <div class="br"></div>
          <a
            href="https://github.com/post-apocalypse/qb-generator"
            target="_blank"
            :title="$i18n('header.git')"
            class="_i icon"
          ><GitHubIcon/></a>
          <a
            href="https://t.me/afterallspace"
            target="_blank"
            :title="$i18n('header.telegram')"
            class="_i icon"
          ><TelegramIcon /></a>
          <a
            href="mailto:afterallspace@gmail.com"
            target="_blank"
            :title="$i18n('header.mail')"
            class="_i"
          >
            <EmailIcon />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RouterLink } from 'vue-router'

const changeLang = inject('i18n') as Function
const curLang = inject('curLang') as CurLang
</script>

<style scoped lang="scss">
.header-wrapper {
  position: fixed;
  box-sizing: border-box;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: var(--tp-c);
  backdrop-filter: blur(8px);

  mask: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 30%,
    rgba(0, 0, 0, 0) 100%
  );
}

.header {
  height: toRem(70);
  width: 100%;
  justify-content: space-between;
}

.options {
  height: 100%;
}

.br {
  height: toRem(25);
  width: toRem(2);
  background-color: var(--txt-m);
}
</style>
