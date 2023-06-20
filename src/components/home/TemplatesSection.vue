<template>
  <section ref="target" class="templates">
    <div class="_row">
      <AppTemplate :title="$i18n('home.create')" :create="true" path="/generator" />
      <AppTemplate
        v-for="(template, idx) in cpb.templates"
        :key="idx"
        :idx="idx"
        :title="''"
        :to="(template.path as string)"
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

// useEventListener(target, 'scroll', () => {
//   console.log(target.value!.scrollLeft);
//   console.log(target.value!.offsetWidth - target.value!.scrollLeft);
// })
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
