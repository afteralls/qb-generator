<template>
  <div v-for="option in options" :key="option" class="checkbox _s-row">
    <input
      type="radio"
      :name="name"
      :checked="modelValue === option"
      @change="$emit('update:modelValue', option)"
    />
    <div class="box _center _ui">
      <div class="_i"><CheckIcon /></div>
    </div>
    <small>{{ option.toUpperCase() }}</small>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: boolean | string
  options: string[]
  name: string
}>()

defineEmits<{
  (evt: 'update:modelValue', value: string): void
}>()

useCssModule('cb')
</script>

<style scoped lang="scss" module="cb">
// .checkbox {
//   position: relative;
// }

// .box {
//   @include action-styles;
//   transition: var(--tr);
//   width: toRem(45);
//   position: relative;
//   padding: 0;

//   svg {
//     width: toRem(60);
//     height: auto;
//     position: absolute;
//     left: toRem(1);
//     opacity: 0;
//     visibility: hidden;
//   }
// }

// input {
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   opacity: 0;
//   z-index: 1;
//   cursor: pointer;

//   &:checked + .box {
//     svg {
//       opacity: 1;
//       visibility: visible;
//     }
//   }

//   &:hover + .box,
//   &:focus + .box {
//     border-color: var(--m-h);
//   }
// }
</style>
