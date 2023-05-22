<template>
  <div class="barcode">
    <div class="_column">
      <div class="_grid t-o">
        <div class="_s-column">
          <small>{{ $i18n('generator.set.content') }}</small>
          <div class="action-wp">
            <input
              type="text"
              :placeholder="$i18n(`library.standarts.${main.set.curStandart.codeName}.placeholder`)"
              :maxlength="main.set.curStandart.max"
            />
            <div class="action">
              <TheSelect
                :inWp="true"
                :options="standartArr"
                :selected="main.set.curStandart.name"
                @change:option="(idx: number) => main.set.curStandart = main.standarts[idx]"
              />
            </div>
          </div>
        </div>
        <div class="_s-column">
          <small>{{ $i18n('generator.set.quantity') }}</small>
          <input type="text" placeholder="1-999" />
        </div>
      </div>
      <div class="_grid o-o">
        <div class="_s-column">
          <small>{{ $i18n('generator.set.example') }}</small>
          <div class="example _center _ui">
            <small v-if="wrong">
              {{ $i18n('generator.set.invalid') }}
            </small>
          </div>
        </div>
        <div class="_grid">
          <div class="_s-column">
            <small>{{ $i18n('generator.set.bg') }}</small>
            <input type="text" :placeholder="$i18n('generator.set.bg_ph')" />
          </div>
          <TheCheckbox
            :checked="modell"
            :type="'checkbox'"
            @change:model="() => (modell = !modell)"
          >
            {{ $i18n('generator.set.showTxt') }}
          </TheCheckbox>
          <div class="_s-column">
            <small>{{ $i18n('generator.set.color') }}</small>
            <input type="text" :placeholder="$i18n('generator.set.color_ph')" />
          </div>
        </div>
      </div>
    </div>
    <div class="_s-column">
      <small>{{ $i18n('generator.preview.title') }}</small>
      <div class="preview _center _ui">
        <small v-if="!generated">
          {{ $i18n('generator.preview.info') }}
        </small>
      </div>
    </div>
    <div class="_column">
      <div class="_s-column">
        <div class="_s-row">
          <div class="_i sm"><InfoIcon /></div>
          <small>{{ $i18n('generator.export.tip') }}</small>
        </div>
        <button class="_btn">
          <div class="_i"><GenerateIcon /></div>
          <h4>{{ $i18n('generator.export.generate') }}</h4>
        </button>
      </div>
      <div class="_s-column">
        <small>{{ $i18n('generator.export.format') }}</small>
        <div class="_grid o-o-o">
          <TheCheckbox
            v-for="format in exportFormats"
            :key="format"
            :name="'export'"
            :checked="m === format"
            :model="m"
            :type="'radio'"
            @change:model="(val: string) => m = val"
          >
            {{ format.toUpperCase() }}
          </TheCheckbox>
        </div>
      </div>
      <div class="_s-column">
        <small>{{ $i18n('generator.export.fileName') }}</small>
        <input type="text" placeholder="barcode-one" />
      </div>
      <div class="_grid o-o">
        <button class="_btn">
          <div class="_i"><DownloadIcon /></div>
          <h4>{{ $i18n('generator.export.downloadBtn') }}</h4>
        </button>
        <button class="_btn">
          <div class="_i"><CreateIcon /></div>
          <h4>{{ $i18n('generator.export.saveTempBtn') }}</h4>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const modell = ref<boolean>(true)
const generated = ref(false)
const wrong = ref(true)
const exportFormats = ['png', 'jpg', 'svg']
const m = ref('svg')

const main = useMainStore()
const standartArr: string[] = []
main.standarts.forEach(standart => standartArr.push(standart.name))
</script>

<style scoped lang="scss">
.barcode {
  display: grid;
  width: 100%;
  gap: calc(var(--space) * 2);
  grid-template-columns: 2fr 1fr 1.2fr;

  input {
    width: 100%;
  }
}

.action-wp {
  position: relative;
}

.action {
  position: absolute;
  right: toRem(2);
  top: toRem(2);
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

.example,
.preview {
  height: 100%;
  text-align: center;
}
</style>
