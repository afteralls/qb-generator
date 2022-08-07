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

.v {
  &-enter-active {
    transition: all 0.5s ease;
  }
  &-leave-active {
    transition: transform 0.5s ease;
  }
  &-enter-from {
    opacity: 0;
    transform: translate(-$margin);

    @media (max-width: $extra-medium) {
      transform: translateY(-$margin);
    }
  }
  &-leave-to {
    opacity: 0;

    @media (max-width: $extra-medium) {
      transform: translateY(-$margin);
    }
  }
}

.route {
  &-enter-from {
    opacity: 0;
    transform: translateX(100px);
  }
  &-enter-active {
    transition: all 0.2s ease-out;
  }
  &-leave-to {
    opacity: 0;
    transform: translateX(-100px);
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
