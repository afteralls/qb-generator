<template>
  <Teleport to="body">
    <Transition name="main" mode="out-in">
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
const body: HTMLBodyElement | null = document.querySelector('body')
const windowTarget = ref<HTMLDivElement | null>(null)

watch(
  () => props.modelValue,
  (v) => {
    if (v) {
      body!.style.height = '100%'
      body!.style.overflow = 'hidden'
      setTimeout(() => windowTarget.value!.classList.add('act'), 0)
    } else {
      windowTarget.value!.classList.remove('act')
      body!.style.height = ''
      body!.style.overflow = ''
    }
  }
)

onClickOutside(windowTarget, () => {
  emit('update:modelValue', !props.modelValue)
})
</script>

<style scoped lang="scss">
.modal {
  background-color: var(--tp);
  backdrop-filter: blur(8px);
  background: linear-gradient(180deg, var(--bg) 0%, var(--tp) 30%);
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 50;

  @media (max-width: $mob) {
    align-items: flex-end;
  }
}

.window {
  transition: all 0.25s ease;
  padding: calc(var(--space) * 2);
  border-radius: var(--br-rad);
  background-color: var(--fg-m);
  border: toRem(1) solid var(--br);
  background-color: var(--bg);
  max-height: toRem(700);
  overflow: scroll;
  transform: translateY(toRem(500));
  opacity: 0;
  box-shadow: toRem(0) toRem(0) toRem(50) rgba(0, 0, 0, 0.2);

  @media (max-width: $mob) {
    width: 100%;
    border: none;
    padding: calc(var(--space) * 3) calc(var(--space) * 2);
    border-top: toRem(1) solid var(--br);
    box-shadow: toRem(0) toRem(-30) toRem(30) rgba(0, 0, 0, 0.15);
    border-radius: var(--br-rad) var(--br-rad) 0 0;
  }
}

.act {
  animation: bounce 0.5s ease;
  opacity: 1;
  transform: translateY(toRem(0));
}

@keyframes bounce {
  0% {
    opacity: 0;
    transform: translateY(toRem(400));
  }
  60% {
    opacity: 1;
    transform: translateY(toRem(-20));
  }
  100% {
    transform: translateY(0);
  }
}
</style>
