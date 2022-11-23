<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="nav">
    <nav></nav>
  </div>
  <div class="container">
    <router-view v-slot="{ Component }">
      <Transition name="route" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
  </div>
</template>

<style lang="scss">
.container {
  max-width: 1280px;
  margin: 0 auto;
  // padding: $space;
  font-weight: normal;
}

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
