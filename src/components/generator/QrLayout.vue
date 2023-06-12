<template>
  <div class="qr-wrapper _column">
    <div class="_s-column">
      <UiText type="small" :text="$i18n('generator.set.content')" />
      <UiInput
        name="content"
        v-model="main.set.content"
        :placeholder="$i18n(`library.standarts.${main.set.curStandart.codeName}.ph`)"
        :length="main.set.curStandart.max"
      />
    </div>
    <div class="_s-column">
      <UiText type="small" :text="$i18n('generator.set.example')" />
      <div class="example _center _ui">
        <UiText v-if="!main.set.isCorrect" type="small" :text="$i18n('generator.set.invalid')" />
        <div v-else class="barcode _center">
          <svg id="example"></svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const main = useMainStore()
</script>

<style lang="scss">

</style>
