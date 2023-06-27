<template>
  <div :class="[dir, mode]"><slot /></div>
</template>

<script setup lang="ts">
defineProps<{ dir: 'row' | 'col'; mode: 'sm' | 'def' | 'lg' }>()
</script>

<style scoped lang="scss">
.row {
  display: flex;
  align-items: center;
}

.col {
  display: flex;
  flex-direction: column;
}

.sm {
  gap: calc(var(--space) / 2);
}

.def {
  gap: var(--space);
}

.lg {
  gap: calc(var(--space) * 2);
}
</style>
