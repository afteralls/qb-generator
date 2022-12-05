<template>
  <div class="template">
    <div class="_column">
      <div class="template__row">
        <BarcodeIcon />
        <div class="template__actions">
          <div @click.prevent="$emit('delTemp', idx)" class="template__action trash"><TrashIcon /></div>
          <div @click.prevent="copyLink" class="template__action share"><ShareIcon /></div>
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
const props = defineProps(['idx', 'link'])

const copyLink = () => { navigator.clipboard.writeText(props.link) };
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
  max-width: var(--template-size);
  transition: var(--transition);
  cursor: pointer;
  color: var(--txt-c);

  @media (max-width: 750px) {
    height: calc(var(--template-size) / 1.2);
    min-width: calc(var(--template-size) / 1.2);
  }

  & ._column {
    width: 100%;
  }

  svg {
    width: 5rem !important;
    height: auto;
    pointer-events: none;
  }

  &:hover {
    background-color: var(--wrapper-c-h);
  }

  &__row {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  &__actions {
    display: flex;
    gap: var(--space);
    z-index: 10;
  }

  &__action {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: calc(var(--br-rad) / 1.2);
    background-color: var(--wrapper-c-h);

    svg {
      width: 20px !important;
      height: auto;
    }
  }
}

.trash {
  transition: var(--transition);
  &:hover {
    background-color: rgba(255, 0, 0, 0.2);
  }
}

.share {
  transition: var(--transition);
  &:hover {
    background-color: rgba(0, 255, 0, 0.2);
  }
}
</style>
