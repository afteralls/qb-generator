<template>
  <section ref="target" class="templates">
    <div class="_row">
      <AppTemplate :title="$i18n('home.create')" :is-create="true" path="/generator" />
      <AppTemplate
        v-for="(template, idx) in cpb.templates"
        :key="idx"
        :idx="idx"
        :title="''"
        :path="template.path"
        :href="template.href"
        :name="template.name"
        :desc="template.desc"
        :date="template.date"
        :mode="template.mode"
      />
      <div v-if="!cpb.templates.length" class="tip _column">
        <UiIcon size="md"><InfoIcon /></UiIcon>
        <UiText type="h4" :text="$i18n('home.tipTitle')" />
        <UiText :text="$i18n('home.tipDesc')" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cpb = useComposableStore()
const target = ref<HTMLDivElement | null>(null)
</script>

<style scoped lang="scss">
.templates {
  overflow-x: scroll;
  width: 100%;
}

.tip {
  justify-content: center;
  max-width: toRem(350);
  min-width: toRem(350);
}
</style>
