<template>
  <div class="barcode">
    <div class="_column">
      <div class="grid t-to-o">
        <div class="_s-column">
          <small>Стандарт</small>
          <input type="text">
        </div>
        <div class="_s-column">
          <small>Количество</small>
          <input type="text">
        </div>
      </div>
      <div class="grid o-to-o">
        <div class="_s-column">
          <small>Пример</small>
          <div class="example _ui"></div>
        </div>
        <div class="grid">
          <div class="_s-column">
            <small>Стандарт</small>
            <input type="text">
          </div>
          <TheCheckbox :model="modell" @change:model="() => modell = !modell" />
          <div class="_s-column">
            <small>Количество</small>
            <input type="text">
          </div>
        </div>
      </div>
    </div>
    <div class="export">
      <button class="_btn">
        <div class="_i"><GenerateIcon /></div>
        <h4>Генерировать</h4>
      </button>
    </div>
    <div class="prewiew"></div>
  </div>
</template>

<script setup lang='ts'>
const modell = ref<boolean>(true)

</script>

<style scoped lang='scss'>
.barcode {
  display: grid;
  width: 100%;
  gap: var(--space);
  grid-template-columns: 2fr 1.5fr 1fr;
}

.settings {

}

.grid {
  display: grid;
  width: 100%;
  gap: var(--space);

  input {
    width: 100%;
  }
}

.t-to-o {
  grid-template-columns: 2fr 1fr;
}

.o-to-o {
  grid-template-columns: 1fr 1fr;
}

.example {
  height: 100%;
}
</style>