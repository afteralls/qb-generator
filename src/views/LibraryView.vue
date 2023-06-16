<template>
  <div class="_wrapper">
    <section class="examples">
      <div class="example _ui _column" v-for="(standart, idx) in curLangStandarts" :key="idx">
        <img :src="getImageUrl(standart.import)" alt="Barcode example" />
        <UiText type="header" mode="md" :text="standart.name" />
        <div class="info">
          <UiText type="small" :text="$i18n('library.desc')" />
          <UiText :text="standart.desc" />
        </div>
        <div class="info">
          <UiText type="small" :text="$i18n('library.structure')" />
          <ol>
            <li v-for="(item, id) in standart.info" :key="id">
              <UiText :text="item" />
            </li>
          </ol>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import langs from '@/languages/langData'

const cpb = useComposableStore()
const curLangStandarts = computed(() =>
  cpb.curLang === 'ru' ? langs.ru.library.standarts : langs.en.library.standarts
)

const getImageUrl = (name: string) => {
  const urlTheme = cpb.isDark ? 'L' : 'D'
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

  li::marker {
    transition: color 0.5s ease;
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
