<template>
  <Transition name="ntf" mode="out-in">
    <div v-if="$store.getters.getMessage" class="notification">
      <div class="notification__text"><p>{{ $store.getters.getMessage }}</p></div>
    </div>
  </Transition>
</template>

<style lang="scss">
@import '../assets/scss/main';

.notification {
  display: flex;
  align-items: center;
  text-align: center;
  position: absolute;
  top: -70px;
  margin: $margin;
  z-index: 2;

  p { margin: 0 }

  &__text {
    @include glass-effect;
    padding: $gap;
  }

  img {
    max-width: 50px;
    padding: $gap;
  }
}

.ntf {
  &-enter-from {
    opacity: 0;
    transform: translateY(-100px);
  }
  &-enter-active {
    transition: all 0.2s ease-out;
  }
  &-leave-to {
    opacity: 0;
    transform: translateY(-100px);
  }
  &-leave-active {
    transition: all 0.2s ease-in;
  }
}
</style>
