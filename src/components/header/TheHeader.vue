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
          <div class="br hide"></div>
          <div class="desc-links _row">
            <TheLinks />
          </div>
          <div class="mob-links _row">
            <div @click="showLinks = !showLinks" :title="$i18n('header.link')" class="_i-btn">
              <button>
                <LinksIcon />
                <div :class="{ 'link-arrow': true, _i: true, sm: true, act: showLinks }">
                  <ArrowIcon />
                </div>
              </button>
            </div>
            <Transition name="main" mode="out-in">
              <div ref="linkTarget" v-if="showLinks" class="hidden-links _row">
                <TheLinks />
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const changeLang = inject('i18n') as Function
const curLang = inject('curLang') as CurLang

const showLinks = ref<boolean>(false)
const linkTarget = ref<HTMLDivElement | null>(null)
onClickOutside(linkTarget, (evt) => {
  if (!(evt.target as HTMLElement).closest('._i-btn')) {
    showLinks.value = false
  }
})
</script>

<style scoped lang="scss">
.header-wrapper {
  position: fixed;
  box-sizing: border-box;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: var(--tp);
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
  bottom: toRem(-4);
  right: toRem(-4);

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
  border-radius: var(--br-rad);
  background-color: var(--fg-m);
}
</style>
