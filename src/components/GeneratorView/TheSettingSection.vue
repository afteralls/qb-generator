<template>
  <div class="settings">
    <div class="settings__row">
      <div class="_column">
        <small>{{ $i18n('generator.settings.content') }}</small>
        <div class="settings__input-wp">
          <input
            :placeholder="$i18n(`library.standarts.${set.curStandart.codeName}.placeholder`)"
            type="text"
            ref="cont"
            v-model="set.content"
            :maxlength="set.curStandart.max"
          >
          <TheSelect
            :select-options="{ model: set.standart, items: standarts }"
            @update-data="(standart) => set.standart = standart"
            class="settings__select"
          />
        </div>
      </div>
      <div class="_column">
      <small>{{ $i18n('generator.settings.quantity') }}</small>
        <input
          :placeholder="$i18n('generator.settings.quan_plh')"
          type="text"
          v-model="set.quantity"
          maxlength="3"
          class="adaptive"
        >
      </div>
    </div>
    <div class="settings__row">
      <div class="_column">
        <small>{{ $i18n('generator.settings.example') }}</small>
        <div class="settings__example">
          <div v-if="set.isCorrect" class="_svg-wrapper">
            <svg id="example"></svg>
          </div>
          <h3 v-else>{{ $i18n('generator.settings.invalid') }}</h3>
        </div>
      </div>
      <div class="_column sideset">
        <div class="_column">
          <small>{{ $i18n('generator.settings.bg') }}</small>
          <input type="text" :placeholder="$i18n('generator.settings.bg_plh')" v-model="set.bgColor">
        </div>
        <div class="_cb-wrapper">
          <Transition name="main"><CheckIcon v-if="set.showData" /></Transition>
          <input @click="set.showData = !set.showData" v-model="set.showData" type="checkbox" id="st">
          <label for="st"><small>{{ $i18n('generator.settings.showTxt') }}</small></label>
        </div>
        <div class="_column">
          <small>{{ $i18n('generator.settings.color') }}</small>
          <input type="text" :placeholder="$i18n('generator.settings.color_plh')" v-model="set.codeColor">
        </div>
      </div>
    </div>
    <TheExportSection />
  </div>
</template>

<script setup>
import CheckIcon from '@/assets/svg/CheckIcon.vue'
import { useDataStore } from '@/stores/dataStore.js'
import TheSelect from '@/components/GeneratorView/TheSelect.vue'
import TheExportSection from '@/components/GeneratorView/TheExportSection.vue'
import { onMounted } from 'vue'
import { useUrlSearchParams } from '@vueuse/core'

const { set, standarts, generateBarcode, corLengthHandler } = useDataStore()

onMounted(() => {
  const params = useUrlSearchParams('history')
    setTimeout(() => { set.standart = params.standart || 'EAN 13' }, 50)
    setTimeout(() => {
      set.content = params.content || ''
      set.codeColor = params.codeColor || '#000000'
      set.bgColor = params.bgColor || 'transparent'
      set.showData = params.showData || true
      set.quantity = params.quantity || ''
      set.generated = false
      if (corLengthHandler) { generateBarcode('#example', set.content) }
    }, 51)
})
</script>

<style scoped lang="scss">
.settings {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: calc(var(--space) * 2);
  max-width: 502px;

  @media (max-width: 900px) {
    max-width: 500px;
    gap: var(--space);

    & ._column {
      input {
        box-sizing: border-box;
        width: 100%;
      }
    }
  }

  @media (max-width: 575px) {
    max-width: 393px;
    & ._column {
      width: 100%;
    }
  }

  &__row {
    display: flex;
    width: 100%;
    gap: calc(var(--space) * 2);

    @media (max-width: 900px) {
      gap: var(--space);
    }

    @media (max-width: 575px) {
      flex-direction: column;
      
    }
  }

  &__example {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
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

    @media (max-width: 575px) {
      width: 100%;
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
      width: 330px;
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

.adaptive {
  max-width: 140px;
  input { width: 100%; }

  @media (max-width: 575px) {
    max-width: 100%;
  }
}

.sideset {
  @media (max-width: 900px) {
    width: 100%;
    justify-content: space-between;
    & ._column {
      width: 100%;

     input {
        width: 100%;
      }
    }
  }
}
</style>
