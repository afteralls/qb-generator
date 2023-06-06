<template>
  <button v-if="type === 'button'" :class="mode" :title="title" @click="$emit('trigger')">
    <slot />
  </button>
  <RouterLink v-else :class="mode" :to="(to as string)" :title="title">
    <slot />
  </RouterLink>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'button' | 'link'
    to?: string
    title: string
    mode?: 'btn' | 'icon'
  }>(),
  { mode: 'btn', type: 'button' }
)

defineEmits<{ (e: 'trigger'): void }>()
</script>

<style lang="scss">
.btn {
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  align-items: center;
  justify-content: center;
  @include action-styles;
  background-color: var(--btn-bg-m);
  color: var(--fg-m) !important;
  gap: var(--space-m);
  transition: var(--tr);
  border: toRem(1) solid var(--br);

  svg {
    fill: var(--fg-m) !important;
  }

  &:hover,
  &:focus {
    background-color: var(--btn-bg-s);
  }
}

button.icon {
  width: toRem(25);
  height: toRem(25);
  background: none;
  padding: 0;

  svg {
    width: 100%;
    height: 100%;
    fill: var(--txt-m);
    transition: var(--tr);
  }

  &:hover,
  &:focus {
    svg {
      fill: var(--m);
    }
  }
}
</style>
