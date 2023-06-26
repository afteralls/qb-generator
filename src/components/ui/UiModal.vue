<template>
  <Teleport to="body">
    <Transition name="up" mode="out-in">
      <div v-if="modelValue" class="modal _center">
        <div ref="windowTarget" class="window">
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits<{ (evt: 'update:modelValue', val: boolean): void }>()

const windowTarget = ref<HTMLDivElement | null>(null)
onClickOutside(windowTarget, () => {
  emit('update:modelValue', !props.modelValue)
})
</script>

<style scoped lang="scss">
.modal {
  background-color: var(--tp);
  backdrop-filter: blur(8px);
  // background: linear-gradient(180deg, var(--bg) 0%, var(--tp) 100%);
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  overflow: hidden;
}

.window {
  transition: var(--tr-fg);
  padding: var(--space);
  border-radius: var(--br-rad);
  background-color: var(--fg-m);
  border: toRem(1) solid var(--br);
  background-color: var(--bg);
}
</style>
