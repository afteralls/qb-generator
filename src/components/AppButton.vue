<script setup>
import { defineProps } from 'vue'

const props = defineProps(['page'])
</script>

<template>
  <router-link :to="props.page">
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

  &:hover {
    background-color: var(--accent-c-h);
  }
}

a, a:visited {
  text-decoration: none;
  color: var(--dark-txt-c);
}
</style>