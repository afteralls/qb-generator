<template>
  <div class="layout__info-wrapper" style="justify-content: center; text-align: center;">
    <p>At this stage, after entering the content, you can immediately proceed to the next step and generate barcodes with default settings</p>
    <div class="_or"><strong>o r</strong></div>
    <div class="_button-wrapper">
      <button
        @click.prevent="$emit('gen-ex')"
        class="_btn"
        :disabled="!inputLengthHandler"
      ><h3>Enable Advanced Settings</h3></button>
    </div>
    <p>And in real time, adjust the color of the background, the barcode itself, as well as hide the display of text/code, if necessary</p>
    <div class="_small-text" style="display: flex; justify-content: center">
      <p>*&nbsp;</p><small>All changes will immediately take effect for subsequent barcodes</small>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['gen-ex'],
  props: ['inputLengthHandler']
}
</script>
