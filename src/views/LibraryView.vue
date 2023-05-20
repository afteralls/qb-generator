<template>
  <div class="_wrapper">
    <section class="examples">
      <div class="example _ui _column" v-for="(standart, idx) in curLangStandarts" :key="idx">
        <Transition name="main" mode="out-in">
          <img :src="getImageUrl(standart.import)" alt="Barcode example" />
        </Transition>
        <h2 class="md">{{ standart.name }}</h2>
        <div class="info">
          <small>{{ $i18n('library.desc') }}</small>
          <p>{{ standart.desc }}</p>
        </div>
        <div class="info">
          <small>{{ $i18n('library.structure') }}</small>
          <ol>
            <li v-for="(item, id) in standart.info" :key="id">
              <p>{{ item }}</p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import langs from '@/languages/langData'

const lang = useLangStore()
const main = useMainStore()

const curLangStandarts = computed(() =>
  lang.curLang === 'ru' ? langs.ru.library.standarts : langs.en.library.standarts
)

const getImageUrl = (name: string) => {
  const urlTheme = main.isDark ? 'L' : 'D'
  return new URL(`../assets/svg/examples/${name + urlTheme}.svg`, import.meta.url).href
}

watch(() => main.isDark, () => { console.log('some') })
</script>

<style scoped lang="scss">
.examples {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  gap: var(--space);

  ol {
    margin: 0;
    padding-left: toRem(20);
  }
}

.info {
  display: flex;
  flex-direction: column;
  gap: calc(var(--space) / 2);
}

.example {
  align-items: flex-start;
  width: toRem(394.58);
  height: toRem(590);

  img {
    height: toRem(200) !important;
    max-width: 100%;
  }

  rect,
  img g {
    fill: var(--txt-m);
  }

  @media (max-width: $lib) {
    width: 100%;
    height: auto;
  }

  @media (max-width: $sm) {
    img {
      max-height: 150px;
    }
  }
}
</style>
