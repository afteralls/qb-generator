<template>
  <section class="library _ui _row">
    <div class="info _column">
      <h2 class="md">{{ $i18n('home.libTitle') }}</h2>
      <p class="wp">{{ $i18n('home.libDesc') }}</p>
      <RouterLink class="_btn" to="/library" :title="$i18n('home.libLinkTitle')">
        <div class="_i"><InfoIcon /></div>
        <h4>{{ $i18n('home.gtLib') }}</h4>
      </RouterLink>
    </div>
    <QrIcon />
  </section>
</template>

<script setup lang='ts'>


</script>

<style scoped lang='scss'>
.library {
  width: 100%;
  justify-content: flex-end;
  text-align: right;
  padding: calc(var(--space) * 2);
  gap: calc(var(--space) * 2);

  svg {
    width: toRem(200);
    height: toRem(200);
  }

  @media (max-width: $sm) {
    flex-direction: column-reverse;
  }
}

.info {
  align-items: flex-end;

  p {
    max-width: toRem(550);
  }

  @media (max-width: $sm) {
    align-items: center;
    text-align: center;
  }
}
</style>