<template>
  <div :class="['i', size]"><slot /></div>
</template>

<script setup lang="ts">
defineProps<{ size?: 'min' | 'sm' | 'md' | 'lg' }>()
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

  &.min {
    width: toRem(16);
    height: toRem(16);
  }

  &.sm {
    width: toRem(20);
    height: toRem(20);
  }

  &.md {
    width: toRem(50);
    height: toRem(50);
    min-width: toRem(50);
  }

  &.lg {
    width: toRem(80);
    height: toRem(80);
    min-width: toRem(80);
  }
}
</style>
