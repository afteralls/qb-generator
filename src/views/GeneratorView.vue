<template>
<div class="_wrapper">
  <div class="generator-wrapper">
    <TheSettingSection />
    <ThePreviewSection />
  </div>
</div>
</template>

<style scoped lang="scss">
.generator-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-around;
  gap: calc(var(--space) * 2);

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
