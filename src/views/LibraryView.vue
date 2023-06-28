<template>
  <UiBlock layout="wrapper">
    <UiBlock layout="col" mode="lg">
      <UiBlock layout="col" class="mw">
        <UiText type="h2" mode="lg" :text="$i18n('library.title')" />
        <UiText type="p" :text="$i18n('library.info')" />
      </UiBlock>
      <UiBlock type="section" layout="grid" mode="d3" class="examples">
        <UiBlock layout="col" :wp="true" class="example" v-for="(st, idx) in curLangSt" :key="idx">
          <img :src="getImageUrl(st.import)" alt="Barcode example" />
          <UiText type="header" mode="md" :text="st.name" />
          <div class="info">
            <UiText :text="$i18n('library.desc')" />
            <UiText type="p" :text="st.desc" />
          </div>
          <div class="info">
            <UiText :text="$i18n('library.structure')" />
            <ol>
              <li v-for="(item, idx) in st.info" :key="idx">
                <UiText type="p" :text="item" />
              </li>
            </ol>
          </div>
        </UiBlock>
      </UiBlock>
    </UiBlock>
  </UiBlock>
</template>

<script setup lang="ts">
import langs from '@/languages/langData'

const cpb = useComposableStore()
const curLangSt = computed(() =>
  cpb.curLang === 'ru' ? langs.ru.library.standarts : langs.en.library.standarts
)

const getImageUrl = (name: string) => {
  const urlTheme = cpb.isDark ? 'L' : 'D'
  return new URL(`../assets/svg/examples/${name + urlTheme}.svg`, import.meta.url).href
}
</script>

<style scoped lang="scss">
.info {
  display: flex;
  flex-direction: column;
  gap: calc(var(--space) / 2);
}

.examples {
  ol {
    padding-left: toRem(19);
  }

  li::marker {
    transition: color 0.5s ease;
  }
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

.mw {
  max-width: toRem(700);
}
</style>
