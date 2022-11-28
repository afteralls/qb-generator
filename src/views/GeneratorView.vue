<template>
  <div class="_wrapper">
    <div class="generator">
      <div class="generator__settings">
        <div class="_column">
          <small>Content</small>
          
        </div>
        <div class="generator__row">
          <div class="_column">
            <small>Example</small>
            <div class="generator__example">
              <div v-if="set.flag" class="svg-wrapper"><svg id="example"></svg></div>
              <h3 v-else>Enter valid content</h3>
            </div>
          </div>
          <div class="_column">
            <div class="_column">
              <small>Background color</small>
              <input class="short" type="text" v-model="set.bgColor">
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
            <div class="_column">
              <small>Code color</small>
              <input class="short" type="text" v-model="set.codeColor">
            </div>
          </div>
        </div>
        <div class="_column">
          <small>Quantity</small>
          <input class="short" placeholder="Digits (1 — 2000)" type="text" maxlength="4">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CheckIcon from '@/assets/svg/CheckIcon.vue'
import { useDataStore } from '@/stores/dataStore.js'

import { watch, ref } from 'vue';

const { set } = useDataStore()
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

.short { width: 150px; }

.svg-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>