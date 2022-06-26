<template>
  <div class="container">
    <div class="layout">
      <form class="layout__form">
        <div class="layout__tabs">
          <div
            @click.prevent="sIdx = 1"
            :class="{'layout__tab': true, 'layout__tab-active': sIdx === 1}"
          ><div v-if="sIdx === 1" class="_step">#1</div><h3>Формат</h3>
          </div>
          <div
            @click.prevent="sIdx = 2"
            :class="{'layout__tab': true, 'layout__tab-active': sIdx === 2}"
          ><div v-if="sIdx === 2" class="_step">#2</div><h3>Количество</h3>
          </div>
          <div
            @click.prevent="sIdx = 3"
            :class="{'layout__tab': true, 'layout__tab-active': sIdx === 3}"
          ><div v-if="sIdx === 3" class="_step">#3</div><h3>Контент</h3>
          </div>
          <div
            @click.prevent="sIdx = 4"
            :class="{'layout__tab': true, 'layout__tab-active': sIdx === 4}"
          ><div v-if="sIdx === 4" class="_step">#4</div><h3>Экспорт</h3>
          </div>
        </div>
        <div class="layout__tab-content">
          <div v-if="sIdx === 1" class="form__item">
            <div class="_label-wrapper">
              <h3 for="format">Выберите стандарт штрих-кода</h3>
            </div>
            <select id="format" v-model="format">
              <option value="ean13">EAN 13</option>
              <option value="ean8">EAN 8</option>
              <option value="ean5">EAN 5</option>
              <option value="pharmacode">Pharmacode</option>
              <option value="codabar">Codabar</option>
              <option value="code128">CODE128</option>
              <option value="code39">CODE39</option>
              <option value="itf">ITF</option>
            </select>
          </div>
          <div v-else-if="sIdx === 2" class="form__item">
            <div class="_label-wrapper">
              <div class="_step"><h3>#2</h3></div>
              <h3>Какое количество штрих-кодов нужно?</h3>
            </div>
            <div class="_flex">
              <input type="text" class="_text" placeholder="Количество" v-model="count" pattern="">
            </div>
          </div>
          <div v-else-if="sIdx === 3" class="form__item">
            <div class="_label-wrapper">
              <div class="_step"><h3>#3</h3></div>
              <h3 for="format">Введите необходимое содержимое </h3>
            </div>
            <input class="_text" v-if="format !== 'ean13'" type="text" placeholder="Текст" v-model="text">
            <div v-else class="_format-group">
              <input type="text" maxlength="1" class="_number" placeholder="Префикс" v-model="data.prefix">
              <input type="text" maxlength="6" class="_number" placeholder="Код" v-model="data.code">
              <input type="text" maxlength="5" class="_number" placeholder="Уникальный номер 1-го штрих-кода" v-model="data.number">
            </div>
          </div>
          <div v-else-if="sIdx === 4" class="form__item">
            <div class="_label-wrapper">
              <div class="_step"><h3>#3</h3></div>
              <h3 for="format">Введите необходимое содержимое </h3>
              <button v-if="generated" @click.prevent="exportToPDF" class="_btn">Экспортировать в PDF</button>
            </div>
            <button class="_btn" @click.prevent="generator">Сгенерировать</button>
          </div>
        </div>
      </form>
      <div class="layout__barcode">
        <div class="layout__barcode-container">
          <h3 v-if="!generated">Вы пока не сгенерировали необходимые штрих-коды</h3>
          <div v-else class="layout__table-container">
            <table>
              <tr><th>№</th><th>Штрих-код</th></tr>
              <tr v-for="(num, idx) in +beforeGenerate" :key="num">
                <td>{{ idx + 1 }}</td>
                <td>
                  <div class="_barcode" >
                    <svg :data-num="idx + 1"></svg>
                  </div>
                </td>
              </tr>
            </table>
            <div class="_space"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JsBarcode from 'jsbarcode'
// import SVGtoPDF from 'svg-to-pdfkit'

export default {
  data: () => ({
    sIdx: 1,
    format: 'ean13',
    count: null,
    beforeGenerate: null,
    generated: false,
    text: '',
    data: {
      prefix: '',
      code: '',
      number: ''
    }
  }),
  methods: {
    generator () {
      let content = ''
      if (this.format === 'ean13') {
        let result = ''
        for (const key in this.data) {
          result += this.data[key]
        }
        content = result
      } else {
        content = this.text
      }
      this.generateBarcode(content)
    },
    generateBarcode (content) {
      this.beforeGenerate = +this.count
      setTimeout(() => {
        for (let i = 0; i <= this.beforeGenerate; i++) {
          const res = +content.substring(0, content.length) + i
          JsBarcode(`[data-num="${i + 1}"]`, res, {
            format: this.format,
            background: '#ffffff00'
          })
        }
      }, 1000)
      this.generated = true
    }
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
  @import './assets/scss/variables';
  @import './assets/scss/mixins';
  @import './assets/scss/globalStyles';

  .container {
    width: 1170px;
    margin: auto;
  }

  @import './assets/scss/layoutStyles';

  ._barcode {
    padding: 0;
  }

  ._step {
    position: absolute;
    top: 0;
    left: 0;
    margin: 5px;
    font-size: 25px;
    font-weight: bold;
    color: #3a3a3a77;
    transition: $transition;
  }

  ._space {
    height: 1px;
  }

  ._btn {
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: white;
    font-family: 'Montserrat', sans-serif;
  }

  ._select-wrapper {
    width: 100%;
  }

  ._text {
    width: calc(100% - 30px);
  }

  ._format-group {
    @include all-cent;
    justify-content: space-between;
  }

  ._number:nth-child(1) {
    width: 15%;
  }

  ._number:nth-child(2) {
    width: 21%;
  }

  ._number:nth-child(3) {
    width: 46%;
  }
</style>
