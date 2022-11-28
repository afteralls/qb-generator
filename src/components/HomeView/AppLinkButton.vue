<script setup>
defineProps(['page'])
</script>

<template>
  <router-link :to="page">
    <div class="btn">
      <slot></slot>
    </div>
  </router-link>
</template>

<style lang="scss">
.btn {
  text-align: center;
  background-color: var(--accent-c);
  padding: var(--space);
  border-radius: calc(var(--br-rad) * 2);
  transition: var(--transition);
  cursor: pointer;
  color: var(--dark-txt-c);

  &:hover {
    background-color: var(--accent-c-h);
  }
}
</style>