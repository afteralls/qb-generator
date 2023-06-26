<template>
  <div class="notifications _col _d">
    <TransitionGroup name="notf">
      <div v-for="item in notifications" :key="item" class="notification _row _s">
        <UiIcon><InfoIcon /></UiIcon>
        <UiText type="small" :text="$i18n(item)" />
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
const { notifications } = useNotificationStore()
</script>

<style scoped lang="scss">
.notifications {
  align-items: flex-end;
  margin: var(--space);
  position: fixed;
  top: toRem(70);
  right: 0;
  z-index: 10;

  @media (max-width: $sm) {
    top: toRem(57);
  }
}

.notification {
  border-radius: var(--br-rad);
  background-color: var(--fg-m);
  border: toRem(1) solid var(--br);
  padding: 0 var(--space);
  height: toRem(45);
  border-radius: var(--br-rad);
  // color: darkred;
  // svg {
  //   fill: darkred;
  // }
}

.notf {
  &-enter-active,
  &-leave-active {
    transition: all 0.5s ease;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateX(toRem(30));
  }
}
</style>
