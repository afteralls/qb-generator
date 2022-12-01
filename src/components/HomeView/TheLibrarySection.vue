<script setup>
import QrIcon from '@/assets/svg/QrIcon.vue'
</script>

<template>
  <section class="library">
    <div class="library__info">
      <h1>Not sure which barcode format you need?</h1>
      <p>You can see the formats available for generation<br />and choose the one that suits your needs best</p>
      <router-link class="_btn" to="/library">
        <small>Learn more</small>
      </router-link>
    </div>
    <QrIcon />
  </section>
</template>

<style scoped lang="scss">
.library {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  background: linear-gradient(45deg, transparent 30%, var(--circle-c-tp));
  padding: calc(var(--space) * 2);
  border-radius: var(--br-rad);
  gap: var(--space);

  svg {
    width: 200px;
    height: auto;
  }

  &__info {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    text-align: right;
    gap: var(--space);
  }
}
</style>
