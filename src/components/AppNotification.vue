<template>
  <div class="notification">
    <img src="../assets/img/ntf.png" alt="Notification">
    <div class="notification__text">
      <small>{{ notificationHandler }}</small>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  props: ['formatName'],
  setup (props) {
    const notificationHandler = computed(() => {
      return props.formatName === 'code128'
        ? 'Доступен только ввод чисел и латинских символов'
        : 'Доступен только ввод чисел'
    })

    return { notificationHandler }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/variables';
@import '../assets/scss/mixins';
@import '../assets/scss/_globalStyles';

.notification {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  position: absolute;
  top: -65px;
  left: 50%;
  transform: translateX(-50%);
  margin: $margin;
  height: 50px;
  width: auto;
  z-index: 5;
  gap: $gap;

  &__text {
    @include glass-effect;
    padding: 15px;
  }

  img {
    height: 50px;
    width: auto;
  }
}
</style>
