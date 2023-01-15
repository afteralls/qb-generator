<template>
<div class="_wrapper">
  <section class="examples">
    <AppExample v-for="standart in curLangStandarts">
      <template #img><img :src="getImageUrl(standart.import)" alt="Barcode example"></template>
      <template #name><h1>{{ standart.name }}</h1></template>
      <template #desc><p>{{ standart.desc }}</p></template>
      <template #structure>
        <ol><li v-for="item in standart.info"><p>{{ item }}</p></li></ol>
      </template>
    </AppExample>
  </section>
</div>
</template>

<script setup>
import { ru, en } from '@/languages/langData'

const lang = inject('currentLang')
const curLangStandarts = computed(() => lang.value === 'ru' ? ru.library.standarts : en.library.standarts)
const getImageUrl = name => new URL(`../assets/svg/examples/${name}.svg`, import.meta.url).href
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
    padding-left: 20px;
  }

  @media (max-width: 500px) {
    img {
      max-width: 100%;
      width: 100%;
      max-height: 150px;
    }
  }
}
</style>
