<template>
  <div class="bg"></div>
  <router-view v-slot="{ Component }">
    <Transition name="route" mode="out-in">
      <component :is="Component"></component>
    </Transition>
  </router-view>
</template>

<style lang="scss">
@import './assets/scss/variables';

.route {
  &-enter-from {
    opacity: 0;
    transform: translateX(100px);

    @media (max-width: $extra-medium) {
      transform: none;
    }
  }
  &-enter-active {
    transition: all 0.2s ease-out;
  }
  &-leave-to {
    opacity: 0;
    transform: translateX(-100px);

    @media (max-width: $extra-medium) {
      transform: none;
    }
  }
  &-leave-active {
    transition: all 0.2s ease-in;
  }
}

.bg {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: url('./assets/img/bg.webp') center no-repeat;
  background-size: cover;
  filter: brightness(0.8);
  z-index: -1;

  @media (max-width: $extra-medium) {
    background: url('./assets/img/bg-mob.webp') center no-repeat;
    background-size: cover;
  }
}
</style>
