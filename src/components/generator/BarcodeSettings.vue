<template>
  <UiBlock layout="col" class="settings">
    <UiBlock layout="grid" class="cont-g">
      <UiBlock layout="col" mode="sm">
        <UiText :text="$i18n('generator.set.content')" />
        <div class="action-wp">
          <UiInput
            name="content"
            data-content
            v-model="brc.set.content"
            :placeholder="$i18n(`library.standarts.${brc.set.curStandart.codeName}.ph`)"
            :length="brc.set.curStandart.max"
          />
          <div class="action">
            <CustomSelect
              :inWp="true"
              :options="getStandartArr"
              :modelValue="brc.set.curStandart.name"
              @update:modelValue="formatHandler"
            />
          </div>
        </div>
      </UiBlock>
      <UiBlock layout="col" mode="sm">
        <UiText :text="$i18n('generator.set.quantity')" />
        <UiInput name="quantity" :length="3" v-model="brc.set.quantity" placeholder="1-999" />
      </UiBlock>
    </UiBlock>
    <UiBlock layout="grid" mode="d2" class="ex-g">
      <UiBlock layout="col" mode="sm">
        <UiText :text="$i18n('generator.set.example')" />
        <UiBlock :center="true" :wp="true" class="example">
          <UiText v-if="!brc.set.isCorrect" :text="$i18n('generator.set.invalid')" />
          <UiBlock v-else :center="true">
            <svg id="barcode-ex"></svg>
          </UiBlock>
        </UiBlock>
      </UiBlock>
      <UiBlock layout="grid">
        <UiBlock layout="col" mode="sm">
          <UiText :text="$i18n('generator.set.bg')" />
          <UiInput
            name="bgColor"
            v-model="brc.set.bgColor"
            :placeholder="$i18n('generator.set.bg_ph')"
          />
        </UiBlock>
        <CustomCheckbox
          v-model="brc.set.showData"
          name="showData"
          :label="$i18n('generator.set.showTxt')"
        />
        <UiBlock layout="col" mode="sm">
          <UiText :text="$i18n('generator.set.color')" />
          <UiInput
            name="codeColor"
            v-model="brc.set.codeColor"
            :placeholder="$i18n('generator.set.color_ph')"
          />
        </UiBlock>
      </UiBlock>
    </UiBlock>
  </UiBlock>
</template>

<script setup lang="ts">
const brc = useBarcodeStore()
const contentTarget = ref<HTMLInputElement | null>(null)

const getStandartArr = computed<string[]>(() =>
  brc.standarts.map((standart: Standart) => standart.name)
)

const formatHandler = (idx: number) => {
  brc.set.standart = idx
  contentTarget.value!.focus()
}

const { shift, ctrl } = useMagicKeys()

watchEffect(() => {
  if (shift.value && ctrl.value) contentTarget.value!.focus()
})

onMounted(() => {
  contentTarget.value = document.querySelector('[data-content]')
})
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
  @media (max-width: $gen) {
    gap: calc(var(--space) * 2);
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
