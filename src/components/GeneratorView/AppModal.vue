<template>
  <Teleport to="body">
    <Transition name="route">
      <div v-if="isOpen" class="modal">
        <div class="modal__window">
          <p>Hello from the modal!</p>
          <div class="_btn" @click="$emit('closeModal')"><small>Close</small></div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps(['isOpen'])
defineEmits(['closeModal'])
</script>

<style scoped lang="scss">
.modal {
  background-color: var(--modal-bg-c);
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;

  &__window {
    display: flex;
    flex-direction: column;
    background-color: var(--wrapper-c);
    padding: var(--space);
    border-radius: var(--br-rad);
    gap: var(--space);
  }
}
</style>