<template>
  <div class="header-wrapper">
    <div class="_container">
      <nav class="header _row">
        <UiLink to="/" :title="$i18n('header.home')" :local="true">
          <UiIcon><QrIcon /></UiIcon>
          <UiText type="header" text="QBG" />
        </UiLink>
        <div class="options _row">
          <ThemeToggler />
          <UiButton
            @trigger="composable.changeLang(), titleLangHandler()"
            :title="composable.curLang === 'ru' ? $i18n('header.lang') : $i18n('header.lang')"
            mode="icon"
          ><TranslateIcon /></UiButton>
          <div class="br hide"></div>
          <div class="desc-links _row">
            <TheLinks />
          </div>
          <div class="mob-links">
            <UiButton @trigger="showLinks = !showLinks" :title="$i18n('header.link')" mode="icon">
              <LinksIcon />
              <div :class="{ 'link-arrow': true, act: showLinks }">
                <UiIcon size="min"><ArrowIcon /></UiIcon>
              </div>
            </UiButton>
            <Transition name="main">
              <div ref="linkTarget" v-if="showLinks" class="hidden-links _ui _row">
                <TheLinks />
              </div>
            </Transition>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
const composable = useComposableStore()
const route = useRoute()
const i18n = inject('func') as LangFunc

const showLinks = ref<boolean>(false)
const linkTarget = ref<HTMLDivElement | null>(null)

onClickOutside(linkTarget, (evt) => {
  if (!(evt.target as HTMLElement).closest('.mob-links')) {
    showLinks.value = false
  }
})

const titleLangHandler = () => (document.title = i18n(route.name as string))
</script>

<style scoped lang="scss">
.header-wrapper {
  position: fixed;
  box-sizing: border-box;
  top: 0;
  width: 100%;
  z-index: 10;
  backdrop-filter: blur(8px);
  // transition: background-color 0.5s ease;
  // background-color: var(--tp);
  background: linear-gradient(180deg, var(--bg) 0%, var(--tp) 100%);
}

.header {
  height: toRem(70);
  width: 100%;
  z-index: 5;
  justify-content: space-between;

  @media (max-width: $sm) {
    height: toRem(57);
  }
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

.mob-links {
  display: none;

  @media (max-width: $sm) {
    display: flex;
  }
}

.link-arrow {
  position: absolute;
  bottom: toRem(12);
  right: toRem(12);

  svg {
    transition: var(--tr);
  }

  &.act {
    svg {
      transform: rotate(180deg);
    }
  }
}

.hidden-links {
  position: fixed;
  right: var(--space);
  top: toRem(73);
  padding: var(--space);
}
</style>
