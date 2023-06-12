<template>
  <section class="templates">
    <div class="_row">
      <RouterLink to="/generator" class="template _center _column _ui t-link" :title="$i18n('home.new')">
        <UiIcon size="lg"><CreateIcon /></UiIcon>
        <UiText type="h3" :text="$i18n('home.create')" />
      </RouterLink>
      <RouterLink
        class="t-link"
        v-for="(template, idx) in main.templates"
        :to="(template.path as string)"
        :key="idx"
      >
        <AppTemplate
          :name="template.name"
          :desc="template.desc"
          :date="template.date"
          mode="barcode"
        />
      </RouterLink>
      <div v-if="!main.templates.length" class="tip _column">
        <UiIcon size="md"><InfoIcon /></UiIcon>
        <UiText type="h4" :text="$i18n('home.tipTitle')"/>
        <UiText :text="$i18n('home.tipDesc')"/>
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

  &:focus,
  &:hover {
    background-color: var(--fg-s);
    border-color: var(--m-h);
  }
}

.t-link {
  &:visited {
    color: var(--txt-m);
  }
}

.tip {
  justify-content: center;
  max-width: toRem(350);
  min-width: toRem(350);
}
</style>
