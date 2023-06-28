<template><Block /></template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: 'div' | 'section' | 'nav'
    layout?: 'row' | 'col' | 'grid' | 'container' | 'wrapper'
    mode?: 'sm' | 'lg' | 'd2' | 'd3' | 's2'
    center?: boolean
    wp?: boolean
  }>(),
  { type: 'div' }
)

const slots = defineSlots<{
  default(): any
}>()

const Block = () =>
  h(
    props.type,
    { class: [props.layout, props.mode, props.center ? 'center' : '', props.wp ? 'wp' : ''] },
    slots.default()
  )
</script>

<style scoped lang="scss">
.row {
  display: flex;
  align-items: center;
  gap: var(--space);
}

.col {
  display: flex;
  flex-direction: column;
  gap: var(--space);
}

.sm {
  gap: calc(var(--space) / 2);
}

.lg {
  gap: calc(var(--space) * 2);
}

.grid {
  display: grid;
  gap: var(--space);
}

.d2 {
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: $mob) {
    grid-template-columns: 1fr;
  }
}

.d3 {
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: $mx) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: $sm) {
    grid-template-columns: 1fr;
  }
}

.s2 {
  grid-template-columns: 1fr 1fr;

  @media (max-width: $sm) {
    width: 100%;
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.wp {
  transition: var(--tr-fg);
  padding: var(--space);
  border-radius: var(--br-rad);
  background-color: var(--fg-m);
  border: toRem(1) solid var(--br);

  &:hover {
    background-color: var(--fg-s);
  }
}

.container {
  max-width: 80rem;
  margin: auto;
  padding: 0 2rem;

  @media (max-width: $lg) {
    padding: 0 1.5rem;
  }

  @media (max-width: $md) {
    padding: 0 1rem;
  }
}

.wrapper {
  margin: 9rem auto 2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 8rem;

  @media (max-width: $sm) {
    margin: calc(var(--header-height) + 4rem) auto 2rem auto;
    gap: 4rem;
  }
}
</style>
