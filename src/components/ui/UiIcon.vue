<template>
  <div :class="['icon', props.size]"><slot /></div>
</template>

<script setup lang="ts">
const props = defineProps<{ size?: 'sm' | 'md' | 'lg' }>()
</script>

<style scoped lang="scss">
svg {
  width: 100%;
  transition: var(--tr);
  height: 100%;
  fill: var(--txt-m);
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: toRem(25);
  height: toRem(25);

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
