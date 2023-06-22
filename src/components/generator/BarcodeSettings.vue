<template>
  <div class="_column settings">
    <div class="_grid cont-g">
      <div class="_s-column">
        <UiText type="small" :text="$i18n('generator.set.content')" />
        <div class="action-wp">
          <UiInput
            name="content"
            v-model="brc.set.content"
            :placeholder="$i18n(`library.standarts.${brc.set.curStandart.codeName}.ph`)"
            :length="brc.set.curStandart.max"
          />
          <div class="action">
            <UiSelect
              :inWp="true"
              :options="getStandartArr"
              :modelValue="brc.set.curStandart.name"
              @update:modelValue="(idx: number) => brc.set.standart = idx"
            />
          </div>
        </div>
      </div>
      <div class="_s-column">
        <UiText type="small" :text="$i18n('generator.set.quantity')" />
        <UiInput name="quantity" :length="3" v-model="brc.set.quantity" placeholder="1-999" />
      </div>
    </div>
    <div class="_grid ex-g">
      <div class="_s-column">
        <UiText type="small" :text="$i18n('generator.set.example')" />
        <div class="example _center _ui">
          <UiText v-if="!brc.set.isCorrect" type="small" :text="$i18n('generator.set.invalid')" />
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
            v-model="brc.set.bgColor"
            :placeholder="$i18n('generator.set.bg_ph')"
          />
        </div>
        <UiCheckbox
          v-model="brc.set.showData"
          name="showData"
          :label="$i18n('generator.set.showTxt')"
        />
        <div class="_s-column">
          <UiText type="small" :text="$i18n('generator.set.color')" />
          <UiInput
            name="codeColor"
            v-model="brc.set.codeColor"
            :placeholder="$i18n('generator.set.color_ph')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const brc = useBarcodeStore()
const getStandartArr = computed<string[]>(() =>
  brc.standarts.map((standart: Standart) => standart.name)
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
    max-width: 100%;
    border-radius: calc(var(--br-rad) / 2);
  }
}
</style>
