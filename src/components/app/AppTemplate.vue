<template>
  <div class="template-wp">
    <RouterLink
      :to="path"
      :title="title"
      :tabindex="isExample ? -1 : ''"
      :class="['template', isExample ? 'ex' : '']"
    >
      <UiBlock v-if="!isCreate" layout="col" :center="true" class="info">
        <UiIcon size="md" v-if="mode === 'qr'"><QrIcon /></UiIcon>
        <UiIcon size="md" v-else><BarcodeIcon /></UiIcon>
        <UiBlock layout="col" mode="sm">
          <UiText :text="$i18n('template.name')" />
          <UiText type="h3" :text="name || $i18n('template.exName')" />
        </UiBlock>
        <UiBlock layout="col" mode="sm">
          <UiText :text="$i18n('template.desc')" />
          <UiText type="p" :text="desc || $i18n('template.exDesc')" />
        </UiBlock>
        <UiText :text="(date as string)" />
      </UiBlock>
      <UiBlock v-else layout="col" :center="true" class="create">
        <UiIcon size="lg"><CreateIcon /></UiIcon>
        <UiText type="h3" :text="$i18n('template.create')" />
      </UiBlock>
    </RouterLink>
    <UiBlock layout="row" v-if="!isExample && !isCreate" class="actions">
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
    </UiBlock>
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

  @media (max-width: $sm) {
    width: 100%;
  }
}

.template {
  height: toRem(250);
  width: toRem(250);
  min-width: toRem(250);
  color: var(--txt);
  transition: var(--tr-fg);
  padding: var(--space);
  border-radius: var(--br-rad);
  background-color: var(--fg-m);
  border: toRem(1) solid var(--br);
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: var(--fg-s);
  }

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

  @media (max-width: $sm) {
    width: 100%;
    min-width: 100%;
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
