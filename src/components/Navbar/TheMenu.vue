<template>
  <div class="menu-wrapper">
    <div class="menu">
      <div class="_row"><slot name="theme"></slot></div>
      <div class="_row">
        <slot name="lang"></slot>
        <div class="br"></div>
        <slot name="contacts"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['isMenuActive'])
</script>

<style scoped lang="scss">
.menu-wrapper {
  background-color: var(--bg-c);
  position: fixed;
  top: 72px;
  right: 15px;
  width: 200px;
  height: 100px;
  z-index: 40;
  padding: var(--space);
  border-radius: var(--br-rad);
  box-sizing: border-box;
}
.menu {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: var(--space);
  justify-content: center;
}

.br {
  background-color: rgba(128, 128, 128, 0.5);
  width: 1px;
  height: 100%;
}
</style>