<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from '@/components/Navbar/TheNavbar.vue'
</script>

<template>
  <TheNavbar />
  <div class="_container">
    <router-view v-slot="{ Component }">
      <Transition name="main" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
  </div>
</template>

<style lang="scss">
.main {
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
