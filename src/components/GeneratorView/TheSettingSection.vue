<template>
  <div class="settings">
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
    <div class="settings__row">
      <div class="_column">
        <small>Example</small>
        <div class="settings__example">
          <div v-if="set.flag" class="_svg-wrapper"><svg id="example"></svg></div>
          <h3 v-else>Enter valid content</h3>
        </div>
      </div>
      <div class="_column">
        <div class="_column short">
          <small>Background color</small>
          <input type="text" placeholder="'#ffffff' or 'transparent'" v-model="set.bgColor">
        </div>
        <div class="cb-wrapper">
          <Transition name="route"><CheckIcon v-if="set.showData" /></Transition>
          <input
            @click="set.showData = !set.showData"
            v-model="set.showData"
            type="checkbox"
            id="showTxt"
          >
          <label for="showTxt"><small>Show text / code</small></label>
        </div>
        <div class="_column short">
          <small>Code color</small>
          <input type="text" placeholder="'#000000' or 'black'" v-model="set.codeColor">
        </div>
      </div>
    </div>
    <div class="_column">
      <small>Quantity</small>
      <input
        placeholder="Digits (1 — 2000)"
        type="text"
        v-model="set.quantity"
        maxlength="4"
      >
    </div>
    <div class="_column">
      <small>Export Settings</small>
      <div class="settings__input-wp short">
        <input
          placeholder="Archive Name"
          type="text"
          v-model="set.exportPackName"
          maxlength="15"
        >
        <AppSelect
          :select-options="{ model: set.exportFormat, items: formats}"
          @update-data="(format) => set.exportFormat = format"
          class="settings__select"
        />
      </div>
    </div>
    <div class="_btn">
      <h3>Generate</h3>
    </div>
  </div>
</template>

<script setup>
import CheckIcon from '@/assets/svg/CheckIcon.vue'
import { useDataStore } from '@/stores/dataStore.js'
import AppSelect from '@/components/GeneratorView/AppSelect.vue'
const { set, standarts, formats } = useDataStore()
</script>

<style scoped lang="scss">
.settings {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: calc(var(--space) * 2);

  &__row {
    display: flex;
    gap: calc(var(--space) * 2);
  }

  &__example {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--br-rad);
    background-color: var(--wrapper-c);
    width: 15rem;
    flex: 1 1;
    transition: var(--transition);

    svg {
      border-radius: var(--br-rad);
      max-width: 100%;
      height: auto;
      margin: var(--space);
    }
  }

  &__input-wp {
    position: relative;
    z-index: 5;

    input {
      width: 200px;
      padding-right: 10rem !important;
    }
  }

  &__select {
    position: absolute;
    right: 5px;
    top: 5px;
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

  input[type="checkbox"] {
    display: none;
  }

  label {
    cursor: pointer;
    position: relative;
    transition: var(--transition);
  }

  label::before {
    content: '';
    display: inline-block;
    width: 40px;
    height: 40px;
    vertical-align: middle;
    margin-right: var(--space);
    border-radius: var(--br-rad);
    background-color: var(--wrapper-c);
    cursor: pointer;
  }
}

.short {
  input {
    width: 12.5rem;
  }
}
</style>