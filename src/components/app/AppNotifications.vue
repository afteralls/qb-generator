<template>
  <UiBlock layout="col" class="notifications">
    <TransitionGroup name="notf">
      <UiBlock
        layout="row"
        mode="sm"
        v-for="item in notifications"
        :key="item"
        class="notification"
      >
        <UiIcon><InfoIcon /></UiIcon>
        <UiText :text="$i18n(item)" />
      </UiBlock>
    </TransitionGroup>
  </UiBlock>
</template>

<script setup lang="ts">
const { notifications } = useNotificationStore()
</script>

<style scoped lang="scss">
.notifications {
  align-items: flex-end;
  margin: var(--space);
  position: fixed;
  top: var(--header-height);
  right: 0;
  z-index: 10;
}

.notification {
  border-radius: var(--br-rad);
  background-color: var(--fg-m);
  border: toRem(1) solid var(--br);
  padding: 0 var(--space);
  height: toRem(45);
  border-radius: var(--br-rad);
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
