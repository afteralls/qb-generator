<template>
  <div :title="isDark ? $i18n('header.tL') : $i18n('header.tD')" class="toggler">
    <input v-model="isDark" type="checkbox" />
    <div class="circle _center">
      <Transition name="slide" mode="out-in">
        <div v-if="isDark" class="_i sm"><DarkModeIcon /></div>
        <div v-else class="_i sm"><LightModeIcon /></div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
const main = useMainStore()
const isDark = useDark({ selector: 'body', attribute: 'class', valueDark: 'dark', valueLight: 'light' })
const curColor = computed(() => isDark.value ? '#0c0c0d' : '#ffffff')
const selector: string = 'meta[name="theme-color"]'
const docMeta = () => document.querySelector(selector)!.setAttribute('content', curColor.value)

main.isDark = isDark.value
watch(isDark, (val) => { docMeta(); main.isDark = val })

onMounted(() => { 
  docMeta()
  const body: HTMLBodyElement | null = document.querySelector('body')
  setTimeout(() => body!.style.transition = 'all 0.5s ease', 0)
})
</script>

<style scoped lang="scss">
.slide {
  &-enter-active,
  &-leave-active {
    transition: all 0.25s ease;
  }
  &-enter-from {
    opacity: 0;
    transform: translateX(7px);
  }
  &-leave-to {
    opacity: 0;
    transform: translateX(-7px);
  }
}

.toggler {
  height: toRem(25);
  width: toRem(50);
  background-color: var(--fg-m);
  border-radius: 1rem;
  position: relative;
  box-sizing: border-box;
  border: toRem(1) solid var(--br);
}

input {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;
  cursor: pointer;

  &:checked + .circle {
    margin-left: toRem(25);
  }

  &:hover + .circle,
  &:focus + .circle {
    background-color: var(--m);

    svg {
      fill: var(--light-txt-m);
    }
  }
}

.circle {
  width: toRem(23);
  height: toRem(23);
  background-color: var(--bg);
  border-radius: var(--space);
  transition: var(--tr);
  position: absolute;
}
</style>
