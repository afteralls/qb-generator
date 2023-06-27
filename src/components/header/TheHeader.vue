<template>
  <AppHotkeys v-model="hotkeyModal" />
  <div class="header-wrapper bg-lg">
    <div class="_container">
      <nav class="header _row _d">
        <UiLink to="/" :title="$i18n('header.gtHome')" :local="true">
          <UiIcon><QrIcon /></UiIcon>
          <UiText type="header" text="QBG" />
        </UiLink>
        <div class="options _row _d">
          <ThemeToggler />
          <UiButton
            @trigger="cpb.changeLang(), titleLangHandler()"
            :title="cpb.curLang === 'ru' ? $i18n('header.lang') : $i18n('header.lang')"
            mode="icon"
          >
            <TranslateIcon />
          </UiButton>
          <div class="br hide"></div>
          <div class="desc-links _row _d"><TheLinks /></div>
          <MobLinks />
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
const cpb = useComposableStore()
const router = useRouter()
const hotkeyModal = ref<boolean>(false)
const i18n = inject('func') as LangFunc

const { shift, h, g, l } = useMagicKeys()

watchEffect(() => {
  if (shift.value && h.value) hotkeyModal.value = !hotkeyModal.value
  else if (shift.value && g.value) router.push('/generator')
  else if (shift.value && l.value) router.push('/library')
})

const titleLangHandler = () => (document.title = i18n(router.currentRoute.value.name as string))
</script>

<style scoped lang="scss">
.header-wrapper {
  position: fixed;
  box-sizing: border-box;
  top: 0;
  width: 100%;
  z-index: 10;
  backdrop-filter: blur(8px);
  transition: var(--tr-fg);
}

.bg-c {
  background-color: var(--bg);
}

.bg-lg {
  background: linear-gradient(180deg, var(--bg) 0%, var(--tp) 100%);
}

.header {
  height: toRem(70);
  width: 100%;
  z-index: 5;
  justify-content: space-between;
}

.options {
  height: 100%;
}

.br {
  transition: var(--tr);
  height: toRem(25);
  width: toRem(1);
  background-color: var(--txt-m);
}

.hide {
  @media (max-width: $zf) {
    display: none;
  }
}

.desc-links {
  @media (max-width: $sm) {
    display: none;
  }
}
</style>
