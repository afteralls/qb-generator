<template>
  <div class="layout__barcode">
    <div class="layout__barcode-container">
      <div v-if="!generated" class="_not-gen">
        <h3>Данное окно — превью для ваших штрих-кодов, но вы их пока не сгенерировали...</h3>
      </div>
      <div v-else class="layout__table-container">
        <table id="table">
          <tr><th>№</th><th>Штрих-код</th></tr>
          <tr v-for="(num, idx) in beforeGenerate" :key="num">
            <td>{{ idx + 1 }}</td>
            <td><div class="_img-wrapper"><svg :data-num="idx + 1"></svg></div></td>
          </tr>
        </table>
        <div class="_space"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['generated', 'beforeGenerate']
}
</script>
