<template>
  <div class="_col _s preview">
    <UiText type="small" :text="$i18n('generator.preview')" />
    <div class="preview-wrapper">
      <div v-if="!brc.set.generated" class="_center tip">
        <UiText type="small" :text="$i18n('generator.previewInfo')" />
      </div>
      <div v-else class="table-wrapper">
        <table>
          <tr>
            <th><UiText type="h4" text="№" /></th>
            <th><UiText type="h4" :text="$i18n('generator.barcode')" /></th>
          </tr>
          <tr v-for="(num, idx) in +brc.set.beforeQuanSet!" :key="num">
            <td><UiText type="h4" :text="(idx + 1).toString()" /></td>
            <td class="max _center">
              <svg :data-num="idx + 1"></svg>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const brc = useBarcodeStore()
</script>

<style scoped lang="scss">
.preview {
  grid-area: Prev;
}

.preview-wrapper {
  height: toRem(276);
  text-align: center;
  transition: var(--tr-fg);
  padding: 0 var(--space-m);
  border-radius: var(--br-rad);
  background-color: var(--fg-m);
  border: toRem(1) solid var(--br);

  @media (max-width: $mx) {
    display: flex;
    justify-content: center;
  }
}

.table-wrapper {
  height: 100%;
  overflow-y: scroll;
  padding: var(--space-m) 0;
}

table {
  display: block;
  border-spacing: toRem(5);

  th,
  td {
    transition: var(--tr-fg);
    background-color: var(--fg-s);
    padding: var(--space-m);
    border-radius: var(--space-m);
  }
}

.max {
  width: 100%;

  svg {
    display: block;
    border-radius: calc(var(--br-rad) / 2);
    width: 100%;
    height: auto;
  }

  @media (max-width: $sm) {
    width: auto;
  }

  @media (max-width: $mob) {
    width: 100%;
  }
}

.tip {
  width: 100%;
  height: 100%;
}
</style>
