<template>
  <div class="_wrapper">
    <section class="examples">
      <div class="example _ui _column" v-for="(standart, idx) in curLangStandarts" :key="idx">
        <Transition name="main" mode="out-in">
          <img :src="getImageUrl(standart.import)" alt="Barcode example" />
        </Transition>
        <header class="md">{{ standart.name }}</header>
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
</script>

<style scoped lang="scss">
.examples {
  display: grid;
  gap: var(--space);
  grid-template-columns: 1fr 1fr 1fr;

  ol {
    padding-left: toRem(19);
  }

  @media (max-width: $mx) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: $sm) {
    grid-template-columns: 1fr;
  }
}

.info {
  display: flex;
  flex-direction: column;
  gap: calc(var(--space) / 2);
}

.example {
  align-items: flex-start;

  img {
    height: toRem(200) !important;
    max-width: 100%;
  }

  @media (max-width: $sm) {
    img {
      max-height: toRem(150);
    }
  }
}
</style>
