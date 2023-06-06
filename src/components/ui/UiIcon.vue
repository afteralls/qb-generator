<template>
  <div :class="['i', props.size]"><slot /></div>
</template>

<script setup lang="ts">
const props = defineProps<{ size?: 'sm' | 'md' | 'lg' }>()
</script>

<style lang="scss">
.i {
  display: flex;
  justify-content: center;
  align-items: center;
  width: toRem(25);
  height: toRem(25);

  svg {
    width: 100%;
    height: 100%;
    transition: fill 0.5s ease;
    fill: var(--txt-m);
  }

  &.sm {
    width: toRem(16);
    height: toRem(16);
  }

  &.md {
    width: toRem(50);
    height: toRem(50);
  }

  &.lg {
    width: toRem(80);
    height: toRem(80);
  }
}
</style>
