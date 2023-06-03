<script setup lang="ts">
const modelValue = defineModel<boolean>({ required: true })
defineProps<{ name: string }>()
</script>

<template>
  <div class="checkbox _s-row">
    <input
      type="checkbox"
      :id="name"
      v-model="modelValue"
    />
    <div class="box _center _ui">
      <div class="_i"><CheckIcon /></div>
    </div>
    <label :for="name"><slot /></label>
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
