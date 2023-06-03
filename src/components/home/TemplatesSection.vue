<template>
  <section class="templates">
    <div class="_row">
      <RouterLink to="/generator" class="template _center _column _ui" :title="$i18n('home.new')">
        <div class="_i mx"><CreateIcon /></div>
        <h3>{{ $i18n('home.create') }}</h3>
      </RouterLink>
      <RouterLink v-for="(template, idx) in main.templates" :to="template.path" :key="idx">
        <AppTemplate
          :name="template.name"
          :desc="template.desc"
          :date="template.date"
          mode="barcode"
          isExample: boolean
        />
      </RouterLink>
      <div v-if="!main.templates.length" class="tip _column">
        <div class="_i lg"><InfoIcon /></div>
        <h4>{{ $i18n('home.tipTitle') }}</h4>
        <p class="txt">{{ $i18n('home.tipDesc') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const main = useMainStore()
</script>

<style scoped lang="scss">
.templates {
  overflow-x: scroll;
  width: 100%;
}

.template {
  height: toRem(250);
  width: toRem(250);
  min-width: toRem(250);
  cursor: pointer;
  text-align: center;
  transition: var(--tr);

  &:focus, &:hover {
    background-color: var(--fg-s);
    border-color: var(--m-h);
  }
}

.tip {
  justify-content: center;
  max-width: toRem(350);
  min-width: toRem(350);
}
</style>
