<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <router-view v-slot="{ Component }">
    <Transition name="route" mode="out-in">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>

<style lang="scss">
.route {
  &-enter-from {
    opacity: 0;
  }
  &-enter-active {
    transition: all 0.2s ease-out;
  }
  &-leave-to {
    opacity: 0;
  }
  &-leave-active {
    transition: all 0.2s ease-in;
  }
}
</style>
