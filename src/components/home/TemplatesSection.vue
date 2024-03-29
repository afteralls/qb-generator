<template>
  <UiBlock type="section" layout="col" class="template-wrapper">
    <UiBlock v-if="cpb.templates.length > 3" layout="row" mode="sm" class="lg-tip">
      <UiIcon size="min"><InfoIcon /></UiIcon>
      <UiText :text="$i18n('home.tempTip')" />
    </UiBlock>
    <div
      ref="target"
      :class="{
        templates: true,
        'sc-l': arrivedState.left,
        'sc-m': !arrivedState.left && !arrivedState.right,
        'sc-r': arrivedState.right
      }"
    >
      <UiBlock layout="row">
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
        <UiBlock layout="col" v-if="!cpb.templates.length" class="tip">
          <UiIcon size="md"><InfoIcon /></UiIcon>
          <UiText type="h4" :text="$i18n('home.tipTitle')" />
          <UiText type="p" :text="$i18n('home.tipDesc')" />
        </UiBlock>
      </UiBlock>
    </div>
  </UiBlock>
</template>

<script setup lang="ts">
const cpb = useComposableStore()
const target = ref<HTMLDivElement | null>(null)
const { arrivedState, x } = useScroll(target)

const maskHandler = () => {
  target.value!.offsetWidth >= target.value!.scrollWidth
    ? target.value!.classList.remove('sc-l', 'sc-m', 'sc-r')
    : target.value!.classList.add('sc-l')
}

watch(
  () => cpb.templates.length,
  () => {
    setTimeout(() => {
      maskHandler()
      x.value += 1
      x.value -= 1
    }, 0)
  }
)

useEventListener(window, 'resize', () => maskHandler())
onMounted(() => maskHandler())
</script>

<style scoped lang="scss">
.template-wrapper {
  width: 100%;
}
.templates {
  overflow-x: scroll;
  position: relative;
  width: 100%;
}

.tip {
  justify-content: center;
  max-width: toRem(350);
  min-width: toRem(350);
}

.lg-tip {
  @media (max-width: $md) {
    display: none;
  }
}

.sc-l {
  -webkit-mask: linear-gradient(
    to right,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0) 100%
  );
}

.sc-m {
  -webkit-mask: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0) 100%
  );
}

.sc-r {
  -webkit-mask: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 100%
  );
}
</style>
