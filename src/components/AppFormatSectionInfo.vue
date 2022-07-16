<template>
  <div class="layout__info-wrapper">
    <div class="format">
      <div class="format__desc">
        <h3> Краткое описание</h3>
        <div class="_red-mark">
          <p>{{ activeFormat.desc }}</p>
        </div>
      </div>
      <div class="format__info">
        <div class="format__example">
          <table id="table">
            <tr><th>Пример штрих-кода</th></tr>
            <tr><td>
              <div class="_img-wrapper">
                <img
                  :src="require(`../assets/img/barcode-exsamples/${formatName}.png`)"
                  alt="Пример штрих-кода"
                >
              </div>
            </td></tr>
          </table>
        </div>
        <div class="format__structure">
          <h3>Структура штрих-кода</h3>
          <ul>
            <li v-for="el in activeFormat.info" :key="el">{{ el }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['activeFormat', 'formatName']
}
</script>

<style lang="scss">
@import '../assets/scss/mixins';
@import '../assets/scss/_format';
</style>
