<template>
<nav ref="navSize" class="nav-wrapper">
  <div class="_container">
    <div class="nav">
      <RouterLink to="/" class="_row" :title="$i18n('nav.home')">
        <LogoIcon />
        <h3>{{ $i18n('nav.name') }}</h3>
      </RouterLink>
      <div v-if="width > 900" class="options _row">
        <NavThemeSwitcher />
        <div class="_br"></div>
        <TranslateIcon @click="changeLang" />
        <div class="_br"></div>
        <NavContacts />
      </div>
      <NavMobMenu v-else>
        <template #theme><NavThemeSwitcher /></template>
        <template #translation><TranslateIcon @click="changeLang" /></template>
        <template #contacts><NavContacts /></template>
      </NavMobMenu>
    </div>
  </div>
</nav>
</template>

<script setup>
const changeLang = inject('i18n')
const curLang = inject('currentLang')
const navSize = ref(null)
const width = ref(null)

useResizeObserver(navSize, entries => { width.value = entries[0].contentRect.width })
onMounted(() => document.documentElement.lang = curLang)
</script>

<style lang="scss">
.nav-wrapper {
  position: fixed;
  box-sizing: border-box;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: var(--tp-c);
  backdrop-filter: blur(8px);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space);
  padding: var(--space);
  height: 60px;

  h3 { text-transform: uppercase; }

  svg {
    height: 24px;
    width: auto;
    cursor: pointer;
  }
}

.options {
  height: 100%;
}
</style>
