<script setup>
import LogoIcon from '@/assets/svg/LogoIcon.vue'
import TelegramIcon from '@/assets/svg/TelegramIcon.vue'
import GitHubIcon from '@/assets/svg/GitHubIcon.vue'
import TranslateIcon from '@/assets/svg/TranslateIcon.vue'
import TheThemeSwitcher from './TheThemeSwitcher.vue'
</script>

<template>
  <nav class="nav-wrapper">
    <div class="_container">
      <div class="nav">
        <router-link to="/" class="nav__logo _row">
          <LogoIcon />
          <h2>Barcode Generator</h2>
        </router-link>
        <div class="nav__settings _row">
          <div class="nav__lang _row">
            <TranslateIcon />
          </div>
          <div class="br"></div>
          <div class="nav__theme _row">
            <TheThemeSwitcher />
          </div>
          <div class="br"></div>
          <div class="nav__contacts _row">
            <a href="https://github.com/post-apocalypse"><GitHubIcon /></a>
            <a href="https://t.me/afterallspace"><TelegramIcon /></a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.nav-wrapper {
  position: fixed;
  box-sizing: border-box;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: var(--tp-c);
  backdrop-filter: blur(8px);

  svg {
    height: 1.5rem;
    width: auto;
  }
}

.nav {
  display: flex;
  justify-content: space-between;
  gap: var(--space);
  padding: var(--space);

  &__logo {
    a {
      display: flex;
      align-items: center;
    }
  }

  &__settings {
    svg {
      cursor: pointer;
    }
  }

  &__el, &__logo {
    color: var(--txt-c);
    transition: var(--transition);
    cursor: pointer;
  }

  &__el:hover, &__logo:hover {
    color: var(--txt-c-h);
  }
}

.br {
  background-color: rgba(128, 128, 128, 0.5);
  width: 1px;
  height: 100%;
}
</style>
