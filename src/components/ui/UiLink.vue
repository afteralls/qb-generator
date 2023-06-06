<template>
  <a :href="href" :class="mode" target="_blank"><slot /></a>
</template>

<script setup lang="ts">
defineProps<{ href: string, mode: 'text' | 'icon', title: string }>()
</script>

<style scoped lang="scss">
a {
  cursor: pointer;
  transition: var(--tr);

  &:visited {
    color: var(--txt-m);
  }

  &.text {
    transition: var(--tr);

    &.bold {
      font-weight: bold;
      font-size: toRem(20);
    }

    &:hover,
    &:focus {
      color: var(--m);
    }
  }

  &.icon {
    &:hover,
    &:focus {
      color: var(--m);

      svg {
        fill: var(--m);
      }
    }
  }
}
</style>
