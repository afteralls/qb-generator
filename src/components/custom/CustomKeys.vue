<template>
  <UiBlock layout="row">
    <UiBlock layout="row" mode="sm">
      <UiBlock :center="true" layout="row" mode="sm" v-for="(keyName, idx) in keys" :key="idx">
        <UiBlock :center="true" class="key"><UiText type="h3" :text="keyName" /></UiBlock>
        <UiText v-if="idx !== keys.length - 1" type="h3" text="+" />
      </UiBlock>
    </UiBlock>
    <UiText type="h3" text="—" />
    <UiText type="h4" :text="tip" />
  </UiBlock>
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
