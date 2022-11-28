<template>
  <section class="preview">
    <small>Preview</small>
    <div class="preview__wrapper">
      <div v-if="!previews.value" class="preview__tip">
        <InfoIcon />
        <h3>This window is a preview for your barcodes, but you haven't generated them yet...</h3>
      </div>
      <table v-else id="table">
        <tr><th>№</th><th>Barcode</th></tr>
        <tr v-for="(num, idx) in beforeGenerate" :key="num">
          <td>{{ idx + 1 }}</td>
          <td><div class="_img-wrapper"><svg :data-num="idx + 1"></svg></div></td>
        </tr>
      </table>
      <div class="_space"></div>
    </div>
  </section>
</template>

<script setup>
import InfoIcon from '@/assets/svg/InfoIcon.vue'
import { ref } from 'vue'
const previews = ref([])
</script>

<style scoped lang="scss">
.preview {
  display: flex;
  flex-direction: column;
  width: 21rem;
  gap: var(--space);

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: var(--br-rad);
    padding: var(--space);
    background-color: var(--wrapper-c);
    flex: 1 1;
  }

  &__tip {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: var(--space);
  }

  svg {
    width: 50px;
    height: auto;
  }
}
</style>