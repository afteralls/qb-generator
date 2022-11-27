<template>
  <div class="_wrapper">
    <div class="generator">
      <div class="generator__settings">
        <div class="_column">
          <small>Standart</small>
          <div class="_row">
            <div v-for="standart in formats" class="generator__standart">
              {{ standart.name }}
            </div>
          </div>
        </div>
        <div class="_column">
          <small>Content</small>
          <input type="text" v-model="content">
        </div>
        <div class="_row">
          <div class="_column">
            <small>Example</small>
            <svg id="example"></svg>
          </div>
          <div class="_column">
            <small>Settings</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDataStore } from '@/stores/dataStore.js'
import { watch, ref } from 'vue'

const { formats } = useDataStore()
const format = ref('ean13')
const content = ref('')

const generateExample = () => {
  setTimeout(() => {
    JsBarcode('#example', content.value, {
      format: formatName.value,
      background: exampleFormat.background,
      lineColor: exampleFormat.lineColor,
      displayValue: exampleFormat.showText
    })
  }, 300 || 1)
}

watch(content, () => {
  generateExample()
})
</script>

<style lang="scss">
.generator {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__settings {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: calc(var(--space) * 2);

    small {
      color: var(--txt-c-h);
      text-transform: uppercase;
    }
  }

  &__standart {
    border-radius: var(--br-rad);
    background-color: var(--wrapper-c);
    padding: var(--space);
    transition: var(--transition);
    cursor: pointer;

    &:hover {
      background-color: var(--wrapper-c-h);
    }
  }
}
</style>