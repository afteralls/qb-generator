<template>
  <div class="_wrapper">
    <div class="not-found">
      <h1>Seems like you weren't<br />supposed to be here</h1>
      <AppButton :page="'/'">
        <h3>Go to Home</h3>
      </AppButton>
    </div>
  </div>
</template>

<script setup>
import AppButton from '@/components/AppButton.vue'
</script>

<style scoped lang="scss">
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: var(--space);
  height: 25rem;
  width: 100%;
}
</style>
