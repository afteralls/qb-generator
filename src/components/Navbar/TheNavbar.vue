<template>
  <nav ref="navSize" class="nav-wrapper">
    <div class="_container">
      <div class="nav">
        <RouterLink to="/" class="nav__logo _row">
          <LogoIcon />
          <h3>{{ $i18n('nav.name') }}</h3>
        </RouterLink>
        <div v-if="width > 900" class="nav__settings _row">
          <div class="nav__theme _row">
            <TheThemeSwitcher />
          </div>
          <div class="br"></div>
          <div class="nav__lang">
            <TranslateIcon @click="change" />
          </div>
          <div class="br"></div>
          <div class="nav__contacts _row">
            <a href="https://github.com/post-apocalypse"><GitHubIcon /></a>
            <a href="https://t.me/afterallspace"><TelegramIcon /></a>
          </div>
        </div>
        <TheMenuIconButton
          v-else
          class="nav__menu-icon"
          @click.prevent="isMenuActive = !isMenuActive"
          :is-menu-active="isMenuActive"
        />
        <Transition name="main">
          <TheMenu v-show="isMenuActive">
            <template #theme>
              <TheThemeSwitcher />
            </template>
            <template #lang>
              <TranslateIcon @click="change" />
            </template>
            <template #contacts>
              <a href="https://github.com/post-apocalypse"><GitHubIcon /></a>
              <a href="https://t.me/afterallspace"><TelegramIcon /></a>
            </template>
          </TheMenu>
        </Transition>
      </div>
    </div>
  </nav>
</template>

<script setup>
import LogoIcon from '@/assets/svg/LogoIcon.vue'
import TelegramIcon from '@/assets/svg/TelegramIcon.vue'
import GitHubIcon from '@/assets/svg/GitHubIcon.vue'
import TranslateIcon from '@/assets/svg/TranslateIcon.vue'
import TheThemeSwitcher from './TheThemeSwitcher.vue'
import TheMenuIconButton from './TheMenuButton.vue'
import { useResizeObserver } from '@vueuse/core'
import TheMenu from './TheMenu.vue'
import { useRouter } from 'vue-router'
import { inject, ref, onMounted } from 'vue'

const isMenuActive = ref(false)
const navSize = ref(null)
const width = ref(null)
useResizeObserver(navSize, entries => { width.value = entries[0].contentRect.width })
onMounted(() => { width.value = window.window.innerWidth })
const router = useRouter()
const changeLang = inject('i18n')
const change = () => { router.go(router.options.history.location); changeLang() }
</script>

<style scoped lang="scss">
.nav-wrapper {
  position: fixed;
  box-sizing: border-box;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: var(--tp-c);
  backdrop-filter: blur(8px);

  h3 {
    text-transform: uppercase;
    color: var(--)
  }

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

    @media (max-width: 900px) {
      display: none;
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

  &__menu-icon {
    display: none;

    @media (max-width: 900px) {
      display: block;
    }
  }

  &__menu {
    background-color: var(--tp-c);
    backdrop-filter: blur(8px);
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 50;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.br {
  background-color: rgba(128, 128, 128, 0.5);
  width: 1px;
  height: 100%;
}
</style>
