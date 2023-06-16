<template>
  <div class="template-wp">
    <RouterLink :to="(path as string)" :title="title" class="template _center _column _ui">
      <div v-if="!create" class="info _column _center">
        <UiIcon size="md" v-if="mode === 'qr'"><QrIcon /></UiIcon>
        <UiIcon size="md" v-else><BarcodeIcon /></UiIcon>
        <div class="_s-column">
          <UiText type="small" :text="$i18n('generator.modal.name')" />
          <UiText type="h3" :text="name || $i18n('generator.modal.exName')" />
        </div>
        <div class="_s-column">
          <UiText type="small" :text="$i18n('generator.modal.desc')" />
          <UiText :text="desc || $i18n('generator.modal.exDesc')" />
        </div>
        <UiText type="small" :text="(date as string)" />
      </div>
      <div v-else class="create _center _column">
        <UiIcon size="lg"><CreateIcon /></UiIcon>
        <UiText type="h3" :text="$i18n('home.create')" />
      </div>
    </RouterLink>
    <div v-if="!example && !create" class="actions _row">
      <UiButton @trigger="shareLink" mode="icon" :title="''" class="share">
        <ShareIcon />
      </UiButton>
      <UiButton @trigger="deleteTemplate" mode="icon" :title="''" class="delete">
        <TrashIcon />
      </UiButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Template } from '@/stores/composable'

const props = withDefaults(defineProps<Template>(), {
  example: false,
  create: false,
  path: '/generator'
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
    navigator.clipboard.writeText(props.path)
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
