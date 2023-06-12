<template>
  <UiModal :isOpen="model" @modal:close="$emit('templateModal:close')">
    <div class="example _row">
      <AppTemplate
        :mode="main.set.mode"
        :name="tempName"
        :desc="tempDesc"
        :date="date"
        :isExample="true"
      />
      <div class="_column">
        <div class="_s-column">
          <UiText type="small" :text="$i18n('generator.modal.tempName')" />
          <UiInput
            name="tempName"
            v-model="tempName"
            :length="11"
            :placeholder="$i18n('generator.modal.exName')"
          />
        </div>
        <div class="_s-column">
          <UiText type="small" :text="$i18n('generator.modal.tempDesc')" />
          <UiInput
            name="tempDesc"
            v-model="tempDesc"
            :length="12"
            :placeholder="$i18n('generator.modal.exDesc')"
          />
        </div>
        <UiButton :title="''" @trigger="saveTemplate" :disabled="!tempName.length">
          <UiIcon><CreateIcon /></UiIcon>
          <UiText type="h4" :text="$i18n('generator.modal.saveBtn')" />
        </UiButton>
      </div>
    </div>
  </UiModal>
</template>

<script setup lang="ts">
defineProps<{ model: boolean }>()
const emit = defineEmits<{ (evt: 'templateModal:close'): void }>()

const main = useMainStore()
const router = useRouter()
const tempName = ref<string>('')
const tempDesc = ref<string>('')
const date = new Date().toLocaleDateString()

const saveTemplate = () => {
  main.templates.push({
    mode: 'barcode',
    name: tempName.value,
    desc: tempDesc.value,
    standart: main.set.standart,
    href: window.location.href,
    path: router.options.history.location,
    date: new Date().toLocaleDateString()
  })
  tempName.value = ''
  tempDesc.value = ''
  emit('templateModal:close')
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
