<template>
  <div class="container">
    <div class="layout">
      <form class="layout__form">
        <div class="form__item">
          <div class="_label-wrapper">
            <div class="_step"><h3>Шаг #1</h3></div>
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
         <div class="form__item">
          <div class="_label-wrapper">
            <div class="_step"><h3>Шаг #2</h3></div>
            <h3>Какое количество штрих-кодов нужно?</h3>
          </div>
          <div class="_flex">
            <input type="text" class="_text" placeholder="Количество" v-model="count" pattern="">
          </div>
        </div>
        <div class="form__item">
          <div class="_label-wrapper">
            <div class="_step"><h3>Шаг #3</h3></div>
            <h3 for="format">Введите необходимое содержимое </h3>
          </div>
          <input class="_text" v-if="format !== 'ean13'" type="text" placeholder="Текст" v-model="text">
          <div v-else class="_format-group">
            <input type="text" maxlength="1" class="_number" placeholder="Префикс" v-model="data.prefix">
            <input type="text" maxlength="6" class="_number" placeholder="Код" v-model="data.code">
            <input type="text" maxlength="5" class="_number" placeholder="Уникальный номер 1-го штрих-кода" v-model="data.number">
          </div>
        </div>
        <div class="_label-wrapper">
            <div class="_step"><h3>Готово!</h3></div>
            <h3 for="format">Осталось только сгенерировать штрих-коды</h3>
          </div>
        <button class="_btn" @click.prevent="generator">Сгенерировать</button>
      </form>
      <div class="layout__barcode">
        <div class="_barcode-container">
          <h2 v-if="!generated">Вы пока не сгенерировали необходимые штрих-коды</h2>
          <table v-else>
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
            format: this.format
          })
        }
      }, 1000)
      this.generated = true
    }
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap');

  $br-rad: 10px;
  $margin: 15px;
  $fs: 20px;

  @mixin all-cent {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @mixin tag-settings {
    border-radius: $br-rad;
    font-family: 'Montserrat', sans-serif;
    outline: none;
    border: none;
    font-size: 16px;
    padding: 0 15px;
  }

  body {
    margin: 0; padding: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    font-family: 'Montserrat', sans-serif;
    background-color: #08AEEA;
    background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);
  }

  svg {
    border-radius: $br-rad;
  }

  select {
    width: 200px;
    height: 40px;
    @include tag-settings;
    transition: 1s ease;
  }

  td, th {
    text-align: center;
    margin: 0 0 15px 0;
  }

  th:nth-child(1) {
    padding: 0 0 0 15px;
  }

  input {
    height: 40px;
    @include tag-settings;
    transition: 1s ease;
  }

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"]:checked + label::before {
    content: '';
    background-size: 100%;
    background-color: lawngreen;
    perspective: 1000ms;
    transition: 0.5s;
  }

  label {
    padding-left: 20px;
    cursor: pointer;
  }

  label::before {
    content: '';
    display: inline-block;
    width: 50px;
    height: 50px;
    vertical-align: middle;
    margin-left: -20px;
    margin-right: $margin;
    border-radius: 25%;
    background-color: rgb(255, 255, 255);
  }

  #app {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
  }

  .layout {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95vh;

    &__form, &__barcode, &__preview {
      display: flex;
      justify-content: center;
      margin: $margin;
    }

    &__form {
      width: 60%;
      flex-direction: column;
      justify-content: space-between;

      h3 {
        margin: $margin 0;
        font-size: $fs;
      }
    }

    &__barcode {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      button {
        margin: $margin;
      }
    }

    &__barcode-container {
      overflow-y: scroll;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: $br-rad;
      padding: 15px;
      display: flex;
      text-align: center;
    }
  }

  ._btn {
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: $fs;
  }

  button {
    transition: 1s ease;
  }

  select:hover, input:hover, button:hover {
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.2);
  }

  button:hover {
    background-color: #FBAB7E;
    background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
  }

  ._select-wrapper {
    width: 100%;
  }

  ._label-wrapper {
    display: flex;
    align-items: center;
    margin: $margin 0;
  }

  ._step {
    @include all-cent;
    top: 0; left: 0;
    height: 50px;
    margin-right: $margin;
    padding: 0 15px;
    background-color: #4158D0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    border-radius: $br-rad;
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

  ._flex {
    display: flex;
    align-items: center;

    button {
      height: 40px;
      margin-left: $margin;
      padding: 0 15px;
    }
  }

  .container {
    width: 1170px;
    margin: auto;
  }
</style>
