<template>
  <div class="template-wp">
    <RouterLink
      :to="(path as string)"
      :title="title"
      :class="['template', '_center', '_col _d', '_ui', isExample ? 'ex' : '']"
    >
      <div v-if="!isCreate" class="info _col _d _center">
        <UiIcon size="md" v-if="mode === 'qr'"><QrIcon /></UiIcon>
        <UiIcon size="md" v-else><BarcodeIcon /></UiIcon>
        <div class="_col _s">
          <UiText type="small" :text="$i18n('template.name')" />
          <UiText type="h3" :text="name || $i18n('template.exName')" />
        </div>
        <div class="_col _s">
          <UiText type="small" :text="$i18n('template.desc')" />
          <UiText :text="desc || $i18n('template.exDesc')" />
        </div>
        <UiText type="small" :text="(date as string)" />
      </div>
      <div v-else class="create _center _col _d">
        <UiIcon size="lg"><CreateIcon /></UiIcon>
        <UiText type="h3" :text="$i18n('template.create')" />
      </div>
    </RouterLink>
    <div v-if="!isExample && !isCreate" class="actions _row _d">
      <UiButton @trigger="shareLink" mode="icon" :title="$i18n('template.share')" class="share">
        <ShareIcon />
      </UiButton>
      <UiButton
        @trigger="deleteTemplate"
        mode="icon"
        :title="$i18n('template.delete')"
        class="delete"
      >
        <TrashIcon />
      </UiButton>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface Template {
  idx?: number
  title?: string
  name?: string
  desc?: string
  href?: string
  path?: string
  date?: string
  mode?: Mode
  isExample?: boolean
  isCreate?: boolean
}

const props = withDefaults(defineProps<Template>(), {
  isExample: false,
  isCreate: false,
  path: '/'
})

const i18n = inject('func') as LangFunc
const { share, isSupported } = useShare()
const ntf = useNotificationStore()
const cpb = useComposableStore()

const shareLink = () => {
  if (isSupported) {
    share({
      title: i18n('home.shareTitle'),
      text: i18n('home.shareDesc'),
      url: props.href
    })
  } else {
    navigator.clipboard.writeText(props.href as string)
  }
}

const deleteTemplate = () => {
  cpb.templates.splice(props.idx as number, 1)
  ntf.addNotification('sg')
}
</script>

<style scoped lang="scss">
.template-wp {
  position: relative;
}

.template {
  height: toRem(250);
  width: toRem(250);
  min-width: toRem(250);
  color: var(--txt);

  &:visited {
    color: var(--txt-m);
  }

  &:focus,
  &:hover {
    background-color: var(--fg-s);
    border-color: var(--m-h);
  }
}

.ex {
  pointer-events: none;
}

.info {
  width: 100%;
  height: 100%;
  text-align: left !important;
  align-items: flex-start;
}

.create {
  text-align: center;
}

.actions {
  position: absolute;
  right: 0;
  top: 0;
  padding: var(--space);
}

.share {
  &:focus,
  &:hover {
    svg {
      fill: orange;
    }
  }
}

.delete {
  &:focus,
  &:hover {
    svg {
      fill: red;
    }
  }
}
</style>
