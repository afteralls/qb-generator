<script setup lang="ts">
defineProps<{ name: string; modelValue: boolean; label: string }>()
defineEmits<{ (e: 'update:modelValue', value: boolean): void }>()
</script>

<template>
  <div class="checkbox _s-row">
    <input
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
      type="checkbox"
      :id="name"
      :checked="modelValue"
    />
    <div class="box _center _ui">
      <UiIcon><CheckIcon /></UiIcon>
    </div>
    <UiText type="label" :for="name" :text="label" />
  </div>
</template>

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
