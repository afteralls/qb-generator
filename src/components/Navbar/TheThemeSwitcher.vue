<script setup>
import { useDark } from '@vueuse/core'
const isDark = useDark({
  selector: 'body',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light',
})
</script>

<template>
  <h4>Dark Mode</h4>
  <div class="switch">
    <input id="switch" class="switch__input" name="switch" type="checkbox" v-model="isDark">
    <label class="switch__toggler" for="switch"></label>
  </div>
</template>

<style lang="scss">
.switch {
  position: relative;

  &__input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  &__toggler {
    display: flex;
    position: relative;
    width: 46px;
    height: 22px;
    background-color: #f1f1f1;
    border-radius: var(--br-rad);
    transition: var(--transition);
    cursor: pointer;

    &::before {
      content: '';
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 2px;
      left: 2px;
      width: 18px;
      height: 18px;
      border-radius: 100%;
      background-color: var(--light-bg-c);
      color: var(--light-wrapper-c);
      transition: var(--transition);
      box-sizing: border-box;
    }
  }

  &__input:checked + .switch__toggler {
    background-color: #3a3a3a;

    &::before {
      left: 25px;
      background-color: var(--dark-bg-c);
    }
  }
}
</style>