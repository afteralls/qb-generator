<template>
  <div class="template _column _ui">
    <div v-if="!isExample" class="actions _row">
      <UiIcon><ShareIcon /></UiIcon>
      <UiIcon><TrashIcon /></UiIcon>
    </div>
    <UiIcon size="md" v-if="mode === 'qr'"><QrIcon /></UiIcon>
    <UiIcon size="md" v-else><BarcodeIcon /></UiIcon>
    <div class="_s-column">
      <UiText type="small" :text="$i18n('generator.modal.name')" />
      <UiText type="h3" :text="name || $i18n('generator.modal.exName')" />
    </div>
    <div class="_s-column">
      <UiText type="small" :text="$i18n('generator.modal.desc')" />
      <UiText :text="desc || $i18n('generator.modal.exDesc')" />
    </div>
    <UiText type="small" :text="date" />
  </div>
</template>

<script setup lang="ts">
import type { Template } from '@/stores/main'

withDefaults(defineProps<Template>(), { isExample: false })
</script>

<style scoped lang="scss">
.template {
  height: toRem(250);
  position: relative;
  width: toRem(250);
  min-width: toRem(250);
  cursor: pointer;
  text-align: left !important;
  align-items: flex-start;
  transition: var(--tr-g);
  color: var(--txt);


}

.actions {
  position: absolute;
  right: var(--space);
}
</style>
