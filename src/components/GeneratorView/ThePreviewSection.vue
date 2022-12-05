<template>
  <section class="preview">
    <small>{{ $i18n('generator.preview.prev') }}</small>
    <div class="preview__wrapper">
      <div v-if="!set.generated" class="preview__tip">
        <InfoIcon />
        <h3>{{ $i18n('generator.preview.info') }}</h3>
      </div>
      <table v-else class="preview__table">
        <tr><th>№</th><th>{{ $i18n('generator.preview.code') }}</th></tr>
        <tr v-for="(num, idx) in +set.beforeQuanSet" :key="num">
          <td>{{ idx + 1 }}</td>
          <td><div class="_svg-wrapper"><svg :data-num="idx + 1"></svg></div></td>
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
  justify-content: center;
  width: 21rem;
  gap: var(--space);

  @media (max-width: 900px) {
    width: 100%;
    max-width: 521px;
  }

  @media (max-width: 575px) {
    max-width: 359px;
  }

  table {
    display: block;
    border-spacing: none;
    border-radius: var(--br-rad);

    svg {
      width: 100%;
      height: auto;
    }

    @media (max-width: 900px) {
      max-width: 300px;
      margin: 0 auto;
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