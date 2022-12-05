<template>
  <section class="home">
    <div class="_column headers">
      <h1>{{ $i18n('home.homeSec.title') }}</h1>
      <h2>{{ $i18n('home.homeSec.subTitle') }}</h2>
      <p>{{ $i18n('home.homeSec.desc.one') }}<br>{{ $i18n('home.homeSec.desc.two') }}<br>{{ $i18n('home.homeSec.desc.three') }}</p>
      <RouterLink class="_btn" to="/generator">
        <small>{{ $i18n('home.homeSec.btn') }}</small>
      </RouterLink>
    </div>
    <div class="logo-wrapper">
      <LogoIcon />
    </div>
  </section>
</template>

<script setup>
import LogoIcon from '@/assets/svg/LogoIcon.vue'
</script>

<style scoped lang="scss">
.home {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: var(--space);

  @media (max-width: 900px) {
    flex-direction: column;
  }
}

.logo-wrapper {
  filter: drop-shadow(0 0 10rem var(--circle-c));

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 750px) {
    svg {
      max-width: 250px;
      height: 100%;
    }
  }
}

.headers {
  h1 { font-size: 4rem; }
  h2 { font-size: 2rem; }
  p { font-size: 1.2rem; }

  @media (max-width: 1200px) {
    h1 { font-size: 3rem; }
    h2 { font-size: 1.5rem; }
    p { font-size: 1rem; }
  }

  @media (max-width: 900px) {
    order: 2;
    align-items: center;
    text-align: center;

    h1 { font-size: 2.5rem; }
    h2 { font-size: 1.5rem; }
    p { font-size: 1rem; }
  }
}
</style>
