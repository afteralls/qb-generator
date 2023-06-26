<template>
  <RouterLink v-if="local" :to="to" class="_row _d link" :title="title"><slot /></RouterLink>
  <a class="link" v-else :href="to" target="_blank" :title="title"><slot /></a>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ to: string; title: string; local?: boolean }>(), { local: false })
</script>

<style lang="scss">
.link {
  &:visited {
    color: var(--txt-m);
  }

  &:hover,
  &:focus {
    color: var(--m);
    svg {
      fill: var(--m);
    }
  }
}
</style>
