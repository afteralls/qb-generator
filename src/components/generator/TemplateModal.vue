<template>
  <TheModal :isOpen="model" @modal:close="$emit('templateModal:close')">
    <div class="example _row">
      <AppTemplate mode="barcode" :name="tempName" :desc="tempDesc" :date="date" />
      <div class="_column">
        <div class="_s-column">
          <small>{{ $i18n('generator.modal.tempName') }}</small>
          <input
            type="text"
            name="tempName"
            maxlength="11"
            v-model="tempName"
            :placeholder="$i18n('generator.modal.exName')"
          />
        </div>
        <div class="_s-column">
          <small>{{ $i18n('generator.modal.tempDesc') }}</small>
          <input
            type="text"
            name="tempDesc"
            maxlength="12"
            v-model="tempDesc"
            :placeholder="$i18n('generator.modal.exDesc')"
          />
        </div>
        <button
          @click="saveTemplate"
          :disabled="!tempName.length"
          :class="{ _btn: true, _disabled: !tempName.length }"
        >
          <div class="_i"><CreateIcon /></div>
          <h4>{{ $i18n('generator.modal.saveBtn') }}</h4>
        </button>
      </div>
    </div>
  </TheModal>
</template>

<script setup lang="ts">
defineProps<{ model: boolean }>()
defineEmits<{ (evt: 'templateModal:close'): void }>()

const main = useMainStore()
const tempName = ref<string>('')
const tempDesc = ref<string>('')
const date = new Date().toLocaleDateString()

const saveTemplate = () => {
  // some logic...
}
</script>

<style scoped lang="scss">
.example {
  ._column {
    width: 100%;
  }

  @media (max-width: $sm) {
    flex-direction: column;
  }
}
</style>
