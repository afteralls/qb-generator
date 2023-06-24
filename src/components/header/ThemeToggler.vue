<template>
  <div :title="isDark ? $i18n('header.tL') : $i18n('header.tD')" class="toggler">
    <input v-model="isDark" name="theme" type="checkbox" />
    <div class="circle _center">
      <Transition name="slide" mode="out-in">
        <UiIcon v-if="isDark" size="min"><DarkModeIcon /></UiIcon>
        <UiIcon v-else size="min"><LightModeIcon /></UiIcon>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
const cpb = useComposableStore()
const isDark = useDark({ selector: 'body', attribute: 'class', valueLight: 'light' })
const curColor = computed(() => (isDark.value ? '#0c0c0d' : '#ffffff'))
const selector: string = 'meta[name="theme-color"]'
const docMeta = () => document.querySelector(selector)!.setAttribute('content', curColor.value)

cpb.isDark = isDark.value
watch(isDark, (val) => {
  const headerWp: HTMLDivElement | null = document.querySelector('.header-wrapper')
  headerWp!.classList.replace('bg-lg', 'bg-c')
  docMeta()
  cpb.isDark = val
  setTimeout(() => headerWp!.classList.replace('bg-c', 'bg-lg'), 500)
})

onMounted(() => {
  docMeta()
  const body: HTMLBodyElement | null = document.querySelector('body')
  setTimeout(() => (body!.style.transition = 'background-color 0.5s ease'), 0)
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
    transform: translateX(toRem(7));
  }
  &-leave-to {
    opacity: 0;
    transform: translateX(toRem(7));
  }
}

.toggler {
  height: toRem(25);
  width: toRem(50);
  background-color: var(--fg-m);
  border-radius: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  transition: var(--tr);
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
    margin-left: toRem(24.9);
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
  left: toRem(0.1);
}
</style>
