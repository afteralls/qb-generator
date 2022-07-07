<template>
  <div class="notification">
    <img src="../assets/img/notification.png" alt="Notification">
    <div class="notification__text">
      <small>{{ notificationHandler }}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: ['formatName', 'notification'],
  computed: {
    notificationHandler () {
      return this.formatName === 'code128'
        ? 'Доступен только ввод чисел и латинских символов'
        : 'Доступен только ввод чисел'
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/mixins';
@import '../assets/scss/variables';

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
