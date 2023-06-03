<template>
  <AppModal :isOpen="model" @modal:close="$emit('templateModal:close')">
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
  </AppModal>
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
