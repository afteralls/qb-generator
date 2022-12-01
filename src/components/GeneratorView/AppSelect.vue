<template>
  <div @click="open = !open" class="select">
    <ArrowIcon :class="{ select__arrow: true, rotate: open }" />
    <div class="select__selected"><small>{{ selectOptions.model }}</small></div>
    <Transition name="main">
      <div v-show="open" class="select__items">
        <div class="select__item"
          v-for="item of data" :key="item" @click="$emit('updateData', item), !open">
          <small>{{ item }}</small>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import ArrowIcon from '@/assets/svg/ArrowIcon.vue'
import { ref, computed } from 'vue'
import { useEventListener } from '@vueuse/core'

const props = defineProps(['selectOptions'])
const open = ref(false)
const data = computed(() => props.selectOptions.items.map(item => item.name))

useEventListener(document, 'click', (evt) => {
  if (evt.target.classList[0] !== 'select') {
    open.value = false;
  }
})
</script>

<style lang="scss">
.select {
  position: relative;
  width: 9rem;
  outline: none;
  z-index: 5;
  cursor: pointer;

  &__selected {
    padding: 0.66rem;
    background-color: var(--wrapper-c-h);
    border-radius: var(--br-rad);
    color: var(--txt-c);
    user-select: none;
    transition: var(--transition);
    pointer-events: none;
  }

  &__arrow {
    z-index: 1;
    position: absolute;
    right: 0;
    top: calc(50% - 1.1875rem);
    transition: var(--transition);
    fill: var(--txt-c-h);
    height: 100%;
    pointer-events: none;
  }

  &__items {
    display: flex;
    flex-direction: column;
    border-radius: var(--br-rad);
    position: absolute;
    top: 3.125rem;
    background-color: var(--wrapper-c);
    width: 100%;
    box-sizing: border-box;
    z-index: 1;
    transition: var(--transition);
  }

  &__item {
    padding: 0.66rem;
    border-radius: var(--br-rad);
    user-select: none;

    &:hover {
      background-color: var(--wrapper-c-h);
    }
  }
}

.rotate {
  transform: rotate(180deg);
}
</style>
