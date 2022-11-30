<template>
  <div class="template">
    <div class="template__code-icon">
      <QrIcon v-if="templateStandart === 'qr'" />
      <BarcodeIcon v-else />
    </div>
    <small>Name</small>
    <h3 v-if="templateName === ''">Main Template</h3>
    <slot name="codename"></slot>
    <div v-if="templateDesc" class="_column">
      <small>Description</small>
      <slot name="desc"></slot>
    </div>
  </div>
</template>

<script setup>
import QrIcon from '@/assets/svg/QrIcon.vue'
import BarcodeIcon from '@/assets/svg/BarcodeIcon.vue'
defineProps(['templateStandart', 'templateName', 'templateDesc'])
</script>

<style lang="scss">
.template {
  display: flex;
  justify-content: flex-start;
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
  word-wrap: break-word;

  &__code-icon {
    svg {
      width: 5rem;
      height: auto;
    }
  }

  &:hover {
    background-color: var(--wrapper-c-h);
  }
}
</style>