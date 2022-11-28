<template>
  <div class="input-wp">
    <input
      :placeholder="set.curFormat.placeholder"
      type="text"
      v-model="set.content"
      :maxlength="set.curFormat.max"
    >
    <AppSelect class="select-wp" />
  </div>
</template>

<script setup>
import AppSelect from './AppSelect.vue'
</script>

<style scoped lang="scss">
.input-wp {
  position: relative;
  z-index: 5;

  input {
    width: 200px;
    padding-right: 10rem !important;
  }
}

.select-wp {
  position: absolute;
  right: 5px;
  top: 5px;
}
</style>