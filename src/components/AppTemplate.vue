<template>
  <div class="template">
    <div class="_column">
      <BarcodeIcon />
      <small>Name</small>
      <slot name="codename"></slot>
      <small>Description</small>
      <slot name="desc"></slot>
    </div>
    <div class="_row">
      <small>Date</small>
      <slot name="date"></slot>
    </div>
  </div>
</template>

<script setup>
import BarcodeIcon from '@/assets/svg/BarcodeIcon.vue'
</script>

<style scoped lang="scss">
.template {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: var(--space);
  background-color: var(--wrapper-c);
  border-radius: var(--br-rad);
  padding: var(--space);
  height: var(--template-size);
  min-width: var(--template-size);
  max-width: var(--template-size);
  transition: var(--transition);
  cursor: pointer;
  color: var(--txt-c);

  svg {
    width: 5rem !important;
    height: auto;
  }

  &:hover {
    background-color: var(--wrapper-c-h);
  }
}
</style>
