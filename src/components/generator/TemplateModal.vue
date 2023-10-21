<template>
  <UiModal :model-value="modelValue" @update:model-value="$emit('update:modelValue', !modelValue)">
    <UiBlock layout="row" class="example space">
      <AppTemplate
        :mode="cpb.mode"
        :name="tempName"
        :desc="tempDesc"
        :date="date"
        :isExample="true"
      />
      <UiBlock layout="col" class="space">
        <UiBlock layout="col">
          <UiBlock layout="col" mode="sm">
            <UiText :text="$i18n('generator.modal.tempName')" />
            <UiInput
              name="tempName"
              v-model="tempName"
              :length="11"
              :placeholder="$i18n('generator.modal.tempName_ph')"
            />
          </UiBlock>
          <UiBlock layout="col" mode="sm">
            <UiText :text="$i18n('generator.modal.tempDesc')" />
            <UiInput
              name="tempDesc"
              v-model="tempDesc"
              :length="12"
              :placeholder="$i18n('generator.modal.tempDesc_ph')"
            />
          </UiBlock>
        </UiBlock>
        <UiBlock layout="grid" mode="d2">
          <UiButton
            :title="$i18n('generator.modal.saveBtn')"
            @trigger="saveTemplate"
            :disabled="!tempName.length"
          >
            <UiIcon><CreateIcon /></UiIcon>
            <UiText type="h4" :text="$i18n('generator.modal.saveBtn')" />
          </UiButton>
          <UiButton
            :title="$i18n('generator.modal.cancelBtn')"
            @trigger="$emit('update:modelValue', !modelValue)"
          >
            <UiIcon><CancelIcon /></UiIcon>
            <UiText type="h4" :text="$i18n('generator.modal.cancelBtn')" />
          </UiButton>
        </UiBlock>
      </UiBlock>
    </UiBlock>
  </UiModal>
</template>

<script setup lang="ts">
const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits<{ (evt: 'update:modelValue', val: boolean): void }>()

const cpb = useComposableStore()
const router = useRouter()
const tempName = ref<string>('')
const tempDesc = ref<string>('')
const date = new Date().toLocaleDateString()

const saveTemplate = () => {
  cpb.templates.push({
    mode: cpb.mode,
    name: tempName.value,
    desc: tempDesc.value,
    href: window.location.href,
    path: router.options.history.location,
    date: date
  })

  // console.log('href:', window.location.href)
  // console.log('path:', router.options.history.location)

  tempName.value = ''
  tempDesc.value = ''
  emit('update:modelValue', !props.modelValue)
}
</script>

<style scoped lang="scss">
.example {
  .col {
    width: 100%;
  }

  @media (max-width: $sm) {
    flex-direction: column;
  }
}

.space {
  @media (max-width: $mob) {
    gap: calc(var(--space) * 2);
  }
}
</style>
