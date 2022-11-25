<script setup>
import LogoIcon from '@/assets/svg/LogoIcon.vue'
import TelegramIcon from '@/assets/svg/TelegramIcon.vue'
import GitHubIcon from '@/assets/svg/GitHubIcon.vue'
import TranslateIcon from '@/assets/svg/TranslateIcon.vue'
import TheThemeSwitcher from '@/components/TheThemeSwitcher.vue'
</script>

<template>
  <nav class="nav-wrapper">
    <div class="_container">
      <div class="nav">
        <div class="nav__logo _row">
          <LogoIcon />
          <h2>Barcode Generator</h2>
        </div>
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
          <div class="br"></div>
          <div class="nav__auth _row">
            <router-link to="/login">
              <h4 class="nav__el">Log in</h4>
            </router-link>
            <router-link to="/login">
              <h4 class="nav__el">Sign up</h4>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
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

  &__settings {
    svg {
      fill: var(--txt-c);
      transition: all 0.5s ease;
      cursor: pointer;
    }

    svg:hover {
      fill: var(--txt-c-h);
    }
  }

  &__el {
    color: var(--txt-c);
    transition: var(--transition);
    cursor: pointer;
  }

  &__el:hover {
    color: var(--txt-c-h);
  }
}

.br {
  background-color: rgba(128, 128, 128, 0.5);
  width: 1px;
  height: 100%;
}
</style>