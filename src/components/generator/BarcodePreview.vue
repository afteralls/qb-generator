<template>
  <div class="_s-column">
    <small>{{ $i18n('generator.preview.title') }}</small>
    <div class="preview">
      <div v-if="!main.set.generated" class="_center tip">
        <small>
          {{ $i18n('generator.preview.info') }}
        </small>
      </div>
      <div v-else class="table-wrapper">
        <table>
          <tr>
            <th>№</th>
            <th>Barcode</th>
          </tr>
          <tr v-for="(num, idx) in +main.set.beforeQuanSet!" :key="num">
            <td>{{ idx + 1 }}</td>
            <td>
              <svg :data-num="idx + 1"></svg>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const main = useMainStore()
</script>

<style scoped lang="scss">
.preview {
  height: toRem(276);
  text-align: center;
  transition: background-color 0.5s ease;
  padding: 0 var(--space-m);
  border-radius: var(--br-rad);
  background-color: var(--fg-m);
  border: toRem(1) solid var(--br);
}

.table-wrapper {
  height: 100%;
  overflow-y: scroll;
  padding: var(--space-m) 0;
}

svg {
  display: block;
  border-radius: calc(var(--br-rad) / 2);
}

table {
  display: block;
  border-spacing: toRem(5);

  th,
  td {
    background-color: var(--fg-s);
    padding: var(--space-m);
    border-radius: var(--space-m);
  }
}

.tip {
  width: 100%;
  height: 100%;
}
</style>
