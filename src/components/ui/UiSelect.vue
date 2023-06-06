<template>
  <div :class="{ select: true, wp: inWp }">
    <UiButton
      ref="selectTarget"
      title=""
      @trigger="isOpen = !isOpen"
    >
      <UiText type="small" :text="modelValue" />
      <div :class="{ active: isOpen }"><UiIcon><ArrowIcon /></UiIcon></div>
    </UiButton>
    <Transition name="main" mode="out-in">
      <div v-if="isOpen" @click="optionsHandler" class="options">
        <UiButton v-for="(option, idx) in options" :key="idx" :data-idx="idx" :title="option">
          <UiText type="small" :text="option" />
        </UiButton>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
export interface Select {
  options: string[]
  inWp?: boolean
  modelValue: string
}

withDefaults(defineProps<Select>(), { inWp: false })
const emit = defineEmits<{ (evt: 'update:modelValue', value: number): void }>()

const isOpen = ref<boolean>(false)
const optionsHandler = (evt: MouseEvent) => {
  emit('update:modelValue', +(evt.target as HTMLButtonElement).dataset.idx!)
  isOpen.value = false
}

const selectTarget = ref<HTMLDivElement | null>(null)
onClickOutside(selectTarget, (evt) => {
  if (!(evt.target as HTMLElement).closest('.selected')) {
    isOpen.value = false
  }
})
</script>

<style scoped lang="scss">
.select {
  position: relative;
}

.wp {
  & .selected,
  & .option {
    height: toRem(41);
  }
}

.selected {
  justify-content: space-between;
}

.options {
  position: absolute;
  z-index: 5;
  top: toRem(48);
  width: 100%;
  transition: var(--tr);
  background-color: var(--txt-m);
  border-radius: var(--br-rad);
}

.option {
  width: 100%;
  justify-content: flex-start;
  border-color: var(--txt-m);

  small {
    pointer-events: none;
  }
}

.active {
  svg {
    transform: rotate(180deg);
  }
}

.md {
  width: toRem(170);
}
</style>
