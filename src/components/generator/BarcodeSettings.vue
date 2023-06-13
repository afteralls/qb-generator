<template>
  <div class="_column settings">
    <div class="_grid cont-g">
      <div class="_s-column">
        <UiText type="small" :text="$i18n('generator.set.content')" />
        <div class="action-wp">
          <UiInput
            name="content"
            v-model="main.set.content"
            :placeholder="$i18n(`library.standarts.${main.set.curStandart.codeName}.ph`)"
            :length="main.set.curStandart.max"
          />
          <div class="action">
            <UiSelect
              :inWp="true"
              :options="getStandartArr"
              :modelValue="main.set.curStandart.name"
              @update:modelValue="(idx: number) => main.set.standart = idx"
            />
          </div>
        </div>
      </div>
      <div class="_s-column">
        <UiText type="small" :text="$i18n('generator.set.quantity')" />
        <UiInput name="quantity" v-model="main.set.quantity" placeholder="1-999" />
      </div>
    </div>
    <div class="_grid ex-g">
      <div class="_s-column">
        <UiText type="small" :text="$i18n('generator.set.example')" />
        <div class="example _center _ui">
          <UiText v-if="!main.set.isCorrect" type="small" :text="$i18n('generator.set.invalid')" />
          <div v-else class="_center">
            <svg id="barcode-ex"></svg>
          </div>
        </div>
      </div>
      <div class="_grid">
        <div class="_s-column">
          <UiText type="small" :text="$i18n('generator.set.bg')" />
          <UiInput
            name="bgColor"
            v-model="main.set.bgColor"
            :placeholder="$i18n('generator.set.bg_ph')"
          />
        </div>
        <UiCheckbox
          v-model="main.set.showData"
          name="showData"
          :label="$i18n('generator.set.showTxt')"
        />
        <div class="_s-column">
          <UiText type="small" :text="$i18n('generator.set.color')" />
          <UiInput
            name="codeColor"
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
.settings {
  grid-area: Set;

  @media (max-width: $gen) {
    gap: calc(var(--space) * 2);
  }
}

.cont-g {
  grid-template-columns: 2fr 1fr;

  @media (max-width: $gen) {
    grid-template-columns: 1fr;
  }
}

.ex-g {
  grid-template-columns: 1fr 1fr;

  @media (max-width: $gen) {
    gap: calc(var(--space) * 2);
    grid-template-columns: 1fr;
  }
}

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
  height: toRem(191);
  text-align: center;

  svg {
    height: 100%;
    height: toRem(191);
    width: auto;
    border-radius: calc(var(--br-rad) / 2);
  }
}
</style>
