<template>
  <div class="_column">
    <div class="_grid _t-o">
      <div class="_s-column">
        <small>{{ $i18n('generator.set.content') }}</small>
        <div class="action-wp">
          <input
            type="text"
            v-model="main.set.content"
            :placeholder="$i18n(`library.standarts.${main.set.curStandart.codeName}.ph`)"
            :maxlength="main.set.curStandart.max"
          />
          <div class="action">
            <TheSelect
              :inWp="true"
              :options="getStandartArr"
              :selected="main.set.curStandart.name"
              @change:option="(idx: number) => main.set.standart = idx"
            />
          </div>
        </div>
      </div>
      <div class="_s-column">
        <small>{{ $i18n('generator.set.quantity') }}</small>
        <input type="text" v-model="main.set.quantity" placeholder="1-999" />
      </div>
    </div>
    <div class="_grid _o-o">
      <div class="_s-column">
        <small>{{ $i18n('generator.set.example') }}</small>
        <div class="example _center _ui">
          <small v-if="!main.set.isCorrect">
            {{ $i18n('generator.set.invalid') }}
          </small>
          <div v-else class="barcode _center">
            <svg id="example"></svg>
          </div>
        </div>
      </div>
      <div class="_grid">
        <div class="_s-column">
          <small>{{ $i18n('generator.set.bg') }}</small>
          <input
            type="text"
            v-model="main.set.bgColor"
            :placeholder="$i18n('generator.set.bg_ph')"
          />
        </div>
        <TheCheckbox
          :checked="main.set.showData"
          :type="'checkbox'"
          @change:model="() => (main.set.showData = !main.set.showData)"
        >
          {{ $i18n('generator.set.showTxt') }}
        </TheCheckbox>
        <div class="_s-column">
          <small>{{ $i18n('generator.set.color') }}</small>
          <input
            type="text"
            v-model="main.set.codeColor"
            :placeholder="$i18n('generator.set.color_ph')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const main = useMainStore()
const getStandartArr = computed<string[]>(() =>
  main.standarts.map((standart: Standart) => standart.name)
)
</script>

<style scoped lang="scss">
.action-wp {
  position: relative;

  input {
    padding-right: toRem(186);
  }
}

.action {
  position: absolute;
  right: toRem(2);
  top: toRem(2);
}

.example {
  padding: var(--space-m);
  height: 100%;
  text-align: center;

  svg {
    height: 100%;
    border-radius: calc(var(--br-rad) / 2);
  }
}
</style>
