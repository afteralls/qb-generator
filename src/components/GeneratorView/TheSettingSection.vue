<template>
  <div class="settings">
    <div class="settings__row">
      <div class="_column">
        <small>Content</small>
        <div class="settings__input-wp">
          <input
            :placeholder="set.curStandart.placeholder"
            type="text"
            v-model="set.content"
            :maxlength="set.curStandart.max"
          >
          <AppSelect
            :select-options="{ model: set.standart, items: standarts}"
            @update-data="(standart) => set.standart = standart"
            class="settings__select"
          />
        </div>
      </div>
      <div class="_column">
      <small>Quantity</small>
        <input
          placeholder="Digits (2000)"
          type="text"
          v-model="set.quantity"
          maxlength="4"
          class="adaptive"
        >
      </div>
    </div>
    <div class="settings__row">
      <div class="_column">
        <small>Example</small>
        <div class="settings__example">
          <div v-if="set.isCorrect" class="_svg-wrapper">
            <svg id="example"></svg>
          </div>
          <h3 v-else>Enter valid content</h3>
        </div>
      </div>
      <div class="_column">
        <div class="_column">
          <small>Background color</small>
          <input type="text" placeholder="'#ffffff' or 'transparent'" v-model="set.bgColor">
        </div>
        <div class="cb-wrapper">
          <Transition name="main"><CheckIcon v-if="set.showData" /></Transition>
          <input @click="set.showData = !set.showData" v-model="set.showData" type="checkbox" id="st">
          <label for="st"><small>Show text / code</small></label>
        </div>
        <div class="_column">
          <small>Code color</small>
          <input type="text" placeholder="'#000000' or 'black'" v-model="set.codeColor">
        </div>
      </div>
    </div>
    <TheExportSection />
  </div>
</template>

<script setup>
import CheckIcon from '@/assets/svg/CheckIcon.vue'
import { useDataStore } from '@/stores/dataStore.js'
import AppSelect from '@/components/GeneratorView/AppSelect.vue'
import TheExportSection from '@/components/GeneratorView/TheExportSection.vue'
import { onMounted } from 'vue'
import { useUrlSearchParams } from '@vueuse/core'

const { set, standarts, generateBarcode, corLengthHandler } = useDataStore()

onMounted(() => {
  const params = useUrlSearchParams('history')
    setTimeout(() => {
      set.standart = params.standart || 'EAN 13'
    }, 50)
    setTimeout(() => {
      set.content = params.content || ''
      set.codeColor = params.codeColor || '#000000'
      set.bgColor = params.bgColor || 'transparent'
      set.showData = params.showData || true
      set.quantity = params.quantity || ''
      if (corLengthHandler) {
        generateBarcode('#example', set.content)
      }
    }, 51)
})
</script>

<style scoped lang="scss">
.settings {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: calc(var(--space) * 2);

  &__row {
    display: flex;
    width: 100%;
    gap: calc(var(--space) * 2);
  }

  &__example {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--br-rad);
    background-color: var(--wrapper-c);
    width: 15rem;
    height: 12.875rem;
    transition: var(--transition);

    svg {
      border-radius: var(--br-rad);
      max-width: 100%;
      height: auto;
      max-height: 10.875rem;
      margin: var(--space);
    }
  }

  &__qr-section {
    display: flex;
    width: 100%;
    border-radius: var(--br-rad);
    background-color: var(--wrapper-c);
    flex: 1 1;
  }

  &__input-wp {
    position: relative;
    z-index: 5;

    input {
      width: 10rem;
      padding-right: 10rem !important;
    }
  }

  &__select {
    position: absolute;
    right: 0.3125rem;
    top: 0.3125rem;
  }

  &__standart {
    border-radius: var(--br-rad);
    background-color: var(--wrapper-c);
    padding: var(--space);
    transition: var(--transition);
    cursor: pointer;
  }

  &__standart, &__example {
    &:hover {
      background-color: var(--wrapper-c-h);
    }
  }
}

.cb-wrapper {
  position: relative;

  svg {
    width: 50px;
    height: auto;
    position: absolute;
    bottom: 0px;
    z-index: 1;
    pointer-events: none;
  }
}

.adaptive {
  width: 120px;
}
</style>
