<template>
  <div :class="{ 'select': true, 'wp': inWp }">
    <button ref="selectTarget" @click="isOpen = !isOpen" class="_btn selected md">
      <small>{{ selected }}</small>
      <div :class="{ '_i': true, 'active': isOpen }"><ArrowIcon /></div>
    </button>
    <Transition name="main" mode="out-in">
      <div v-if="isOpen" @click="optionsHandler" class="options">
        <button v-for="(option, idx) in options" :key="idx" :data-idx="idx" class="_btn option">
          <small>{{ option }}</small>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
interface Select {
  options: string[]
  inWp?: boolean
  selected?: string | null
}

defineProps<Select>()
const emit = defineEmits<{ (evt: 'change:option', selected: number): void }>()

const isOpen = ref<boolean>(false)
const optionsHandler = (evt: MouseEvent) => {
  emit('change:option', +(evt.target as HTMLButtonElement).dataset.idx!)
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
  position: relative
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
}

.active {
  svg {
    transform: rotate(180deg);
  }
}

.lg {
  width: toRem(200);
}

.md {
  width: toRem(170);
}

.sm {
  width: toRem(100);
}
</style>
