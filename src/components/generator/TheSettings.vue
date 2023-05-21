<template>
  <div class="barcode">
    <div class="_column">
      <div class="grid t-o">
        <div class="_s-column">
          <small>Стандарт</small>
          <input type="text">
        </div>
        <div class="_s-column">
          <small>Количество</small>
          <input type="text">
        </div>
      </div>
      <div class="grid o-o">
        <div class="_s-column">
          <small>Пример</small>
          <div class="example _ui"></div>
        </div>
        <div class="grid">
          <div class="_s-column">
            <small>Стандарт</small>
            <input type="text">
          </div>
          <TheCheckbox :value="modell" :type="'checkbox'" @change:model="() => modell = !modell">
            {{ $i18n('generator.settings.showTxt') }}
          </TheCheckbox>
          <div class="_s-column">
            <small>Количество</small>
            <input type="text">
          </div>
        </div>
      </div>
    </div>
    <div class="_column">
      <div class="_s-column">
        <div class="_s-row">
          <div class="_i sm"><InfoIcon /> </div>
          <small>Сгенерируйте перед экспортом</small>
        </div>
        <button class="_btn">
          <div class="_i"><GenerateIcon /></div>
          <h4>Генерировать</h4>
        </button>
      </div>
      <div class="_s-column">
        <small>Формат экспорта</small>
        <div class="grid o-o-o">
          <TheCheckbox
            v-for="format in exportFormats"
            :key="format"
            :name="'export'"
            :value="format"
            :model="m"
            :type="'radio'"
            @change:model="(val: string) => m = val"
          >
            {{ format.toUpperCase() }}
          </TheCheckbox>
        </div>
      </div>
      <div class="_s-column">
        <small>Название файла</small>
        <input type="text">
      </div>
      <div class="grid o-o">
        <button class="_btn">
          <h4>Скачать</h4>
        </button>
        <button class="_btn">
          <h4>Сохранить</h4>
        </button>
      </div>
    </div>
    <div class="_s-column">
      <small>Превью</small>
      <div class="preview _ui"></div>
    </div>
  </div>
</template>

<script setup lang='ts'>
const modell = ref<boolean>(true)
const exportFormats = ['png','jpg','svg']
const m = ref('svg')
</script>

<style scoped lang='scss'>
.barcode {
  display: grid;
  width: 100%;
  gap: calc(var(--space) * 2);
  grid-template-columns: 2fr 1.2fr 1fr;
}

.grid {
  display: grid;
  width: 100%;
  gap: var(--space);

  input {
    width: 100%;
  }
}

.t-o {
  grid-template-columns: 2fr 1fr;
}

.o-o {
  grid-template-columns: 1fr 1fr;
}

.o-o-o {
  grid-template-columns: 1fr 1fr 1fr;
}

.example, .preview {
  height: 100%;
}
</style>