<script setup>
import QrIcon from '@/assets/svg/QrIcon.vue'
</script>

<template>
  <section class="library">
    <div class="library__info">
      <h1>{{ $i18n('home.libSec.title') }}</h1>
      <p>{{ $i18n('home.libSec.desc.one') }}<br />{{ $i18n('home.libSec.desc.two') }}</p>
      <RouterLink class="_btn" to="/library">
        <small>{{ $i18n('home.libSec.btn') }}</small>
      </RouterLink>
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

  @media (max-width: 750px) {
    flex-direction: column;
    background: linear-gradient(0deg, transparent 30%, var(--circle-c-tp));

    svg {
      width: 150px;
      height: auto;
    }
  }

  &__info {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    text-align: right;
    gap: var(--space);

    @media (max-width: 750px) {
      order: 2;
      text-align: center;
      align-items: center;
    }
  }
}
</style>
