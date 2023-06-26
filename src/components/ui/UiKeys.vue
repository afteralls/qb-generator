<template>
  <div class="_row _d">
    <div class="_row _s">
      <div v-for="(keyName, idx) in keys" :key="idx" class="_row _s _center">
        <div class="key _center"><UiText type="h3" :text="keyName" /></div>
        <UiText v-if="idx !== keys.length - 1" type="h3" text="+" />
      </div>
    </div>
    <UiText type="h3" text="—" />
    <UiText type="h4" :text="tip" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ keys: string[]; tip: string }>()
</script>

<style scoped lang="scss">
.key {
  height: toRem(35);
  padding: 0 var(--space);
  border-radius: var(--br-rad);
  background-color: var(--btn-bg-m);
  color: var(--fg-m) !important;
  transition: var(--tr-fg);
  border: toRem(1) solid var(--btn-bg-m);
}
</style>
