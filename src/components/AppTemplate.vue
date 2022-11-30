<template>
  <div class="_template">
    <div class="template__code-icon">
      <QrIcon v-if="standart === 'qr'" />
      <BarcodeIcon v-else />
    </div>
    <h3>{{ name }}</h3>
  </div>
</template>

<script setup>
import QrIcon from '@/assets/svg/QrIcon.vue'
import BarcodeIcon from '@/assets/svg/BarcodeIcon.vue'
</script>

<style scoped lang="scss">

</style>