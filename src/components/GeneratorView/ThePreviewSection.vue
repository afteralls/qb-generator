<template>
  <section class="preview">
    <small>Preview</small>
    <div class="preview__wrapper">
      <div v-if="!set.generateFlag" class="preview__tip">
        <InfoIcon />
        <h3>This window is a preview for your barcodes, but you haven't generated them yet...</h3>
      </div>
      <table v-else class="preview__table">
        <tr><th>№</th><th>Barcode</th></tr>
        <tr v-for="(num, idx) in parseInt(set.beforeQuanSet)" :key="num">
          <td>{{ idx + 1 }}</td>
          <td><div class="canvas-wrapper"><svg :data-num="idx + 1"></svg></div></td>
        </tr>
      </table>
      <div class="space"></div>
    </div>
  </section>
</template>

<script setup>
import InfoIcon from '@/assets/svg/InfoIcon.vue'
import { useDataStore } from '@/stores/dataStore.js'

const { set } = useDataStore()
</script>

<style scoped lang="scss">
.preview {
  display: flex;
  flex-direction: column;
  width: 21rem;
  gap: var(--space);

  table {
    display: block;
    border-spacing: none;
    border-radius: var(--br-rad);

    svg {
      width: 100%;
      height: auto;
    }
  }

  th:nth-child(1) {
    border-radius: var(--br-rad) 0 0 0;
  }
  
  th:nth-child(2) {
    border-radius: 0 var(--br-rad) 0 0;
    width: 100%;
  }
  
  tr:last-child td:nth-child(1) {
    border-radius: 0 0 0 var(--br-rad);
  }
  
  tr:last-child td:nth-child(2) {
    border-radius: 0 0 var(--br-rad) 0;
  }

  &__wrapper {
    overflow-y: scroll;
    height: 100%;
    max-height: 33.75rem;
    box-sizing: border-box;
    border-radius: var(--br-rad);
    padding: var(--space);
    background: linear-gradient(210deg, var(--accent-c), var(--wrapper-c) 50%);
  }

  &__tip {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: var(--space);
  }

  &__table {
    display: block;
  }

  svg {
    width: 50px;
    height: auto;
    max-height: 10rem;
  }
}

.space {
  height: 1px;
}
</style>