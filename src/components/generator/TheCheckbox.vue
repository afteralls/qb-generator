<template>
  <div @change="$emit('change:model', model)" class="checkbox _s-row">
    <input :checked="checked" :type="type" :name="name" />
    <div class="box _center _ui">
      <div class="_i"><CheckIcon /></div>
    </div>
    <small><slot /></small>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  type: 'checkbox' | 'radio'
  checked: boolean
  model?: boolean | string
  name?: string
}>()
defineEmits<{ (evt: 'change:model', val?: string): void }>()
</script>

<style scoped lang="scss">
.checkbox {
  position: relative;
}

.box {
  @include action-styles;
  transition: var(--tr);
  width: toRem(45);
  position: relative;
  padding: 0;

  svg {
    width: toRem(60);
    height: auto;
    position: absolute;
    left: toRem(1);
    opacity: 0;
    visibility: hidden;
  }
}

input {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;
  cursor: pointer;

  &:checked + .box {
    svg {
      opacity: 1;
      visibility: visible;
    }
  }

  &:hover + .box,
  &:focus + .box {
    border-color: var(--m-h);
  }
}
</style>
