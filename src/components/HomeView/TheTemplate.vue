<template>
  <div class="template">
    <div class="_column">
      <div class="template__row">
        <BarcodeIcon />
        <div class="template__actions">
          <div @click.prevent="$emit('delTemp', idx)" class="template__action trash"><TrashIcon /></div>
          <div @click.prevent="shareLink" class="template__action share"><ShareIcon /></div>
        </div>
      </div>
      <small>{{ $i18n('home.tempSec.template.name') }}</small>
      <slot name="codename"></slot>
      <small>{{ $i18n('home.tempSec.template.desc') }}</small>
      <slot name="desc"></slot>
    </div>
    <div class="_row">
      <small>{{ $i18n('home.tempSec.template.date') }}</small>
      <slot name="date"></slot>
    </div>
  </div>
</template>

<script setup>
import TrashIcon from '@/assets/svg/TrashIcon.vue'
import ShareIcon from '@/assets/svg/ShareIcon.vue'
import BarcodeIcon from '@/assets/svg/BarcodeIcon.vue'
import { useShare } from '@vueuse/core'

const props = defineProps(['idx', 'link'])
const { share, isSupported } = useShare()
const shareLink = () => {
  if (isSupported.value) {
    share({
      title: 'Hey...',
      text: 'Look what barcode I managed to create!',
      url: props.link
    })
  } else { navigator.clipboard.writeText(props.link) }
}
</script>

<style scoped lang="scss">
.template {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: var(--space);
  background-color: var(--wrapper-c);
  border-radius: var(--br-rad);
  padding: var(--space);
  height: var(--template-size);
  min-width: var(--template-size);
  transition: var(--transition);
  cursor: pointer;

  @media (max-width: 750px) {
    height: calc(var(--template-size) / 1.1);
    min-width: calc(var(--template-size) / 1.1);
  }

  & ._column { width: 100%; }

  svg {
    width: 5rem;
    height: auto;
    pointer-events: none;
  }

  @media (max-width: 750px) {
    svg {
      width: 4rem;
    }
  }

  &:hover { background-color: var(--wrapper-c-h); }

  &__row {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  &__actions {
    display: flex;
    gap: var(--space);
    z-index: 30;
  }

  &__action {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    transition: var(--transition);
    border-radius: calc(var(--br-rad) / 1.2);
    background-color: var(--wrapper-c-h);

    svg {
      width: 20px;
      height: auto;
    }

    @media (max-width: 750px) {
      width: 35px;
      height: 35px;

      svg {
        width: 15px;
      }
    }
  }
}

.trash:hover { background-color: rgba(255, 0, 0, 0.2); }
.share:hover { background-color: rgba(0, 255, 0, 0.2); }
</style>
