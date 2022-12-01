<template>
  <div class="template">
    <div class="_column">
      <QrIcon v-if="templateStandart === 'qr'" />
      <BarcodeIcon v-else />
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
import QrIcon from '@/assets/svg/QrIcon.vue'
import BarcodeIcon from '@/assets/svg/BarcodeIcon.vue'
defineProps(['templateStandart'])
</script>

<style lang="scss">
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