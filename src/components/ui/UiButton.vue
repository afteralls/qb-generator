<template>
  <button
    :disabled="disabled"
    :class="[mode, disabled ? 'disabled' : '', active ? 'active' : '']"
    :title="title"
    @click="to ? $router.push(to) : $emit('trigger')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    to?: string
    title: string
    mode?: 'btn' | 'icon'
    disabled?: boolean
    active?: boolean
  }>(),
  { mode: 'btn' }
)

defineEmits<{
  (e: 'trigger'): void
}>()
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
  transition: background-color 0.5s ease, border 0.5s ease, filter 0.5s ease;
  border: toRem(3) solid var(--btn-bg-m);

  svg {
    fill: var(--fg-m) !important;
  }

  h4 {
    @media (max-width: $zf) {
      font-size: 0.8rem;
    }
  }

  &:hover,
  &:focus {
    background-color: var(--btn-bg-s);
  }
}

.icon {
  width: toRem(25);
  height: toRem(25);
  background: none;
  padding: 0;
  cursor: pointer;

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

.disabled {
  cursor: not-allowed;
  filter: brightness(0.5);

  &:hover {
    border: toRem(3) solid var(--btn-bg-m);
  }
}

.active {
  background-color: var(--m);
  border: toRem(3) solid var(--m);

  &:hover,
  &:focus {
    background-color: var(--m-h);
  }
}
</style>
