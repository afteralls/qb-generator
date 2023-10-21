<template>
<<<<<<< HEAD
  <div class="not-found">
    <img src="../assets/img/barcode.webp" alt="Штрих-код">
    <div class="not-found__info">
      <h1>Oops... It seems you're lost</h1>
      <p>The page you were trying to find wasn't found</p>
      <router-link class="_link" style="max-width: 250px;" to="/">
        <div class="_img-wrapper"><img src="../assets/img/arrow-left.webp" alt="To Home"></div>
        <h3>Go to Main Page</h3>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/scss/main';

.not-found {
  @include all-cent;
  @include glass-effect;
  padding: $gap;
  gap: $gap;
  max-width: 800px;
  margin: $margin;

  &__info {
    display: flex;
    justify-content: center;
    gap: $gap;
    flex-direction: column;

    @media (max-width: $extra-medium) {
      text-align: center;
      align-items: center;
    }
  }

  h1, h2, h3, p {
    margin: 0;
  }

  @media (max-width: $extra-medium) {
    flex-direction: column;
  }

  img {
    height: 250px;
    width: auto;
  }
=======
<div class="_wrapper">
  <div class="not-found _center">
    <h1>{{ $i18n('notfound.one') }}<br />{{ $i18n('notfound.two') }}</h1>
    <RouterLink to="/" :title="$i18n('notfound.linkTitle')" class="_btn">
      <small>{{ $i18n('notfound.btn') }}</small>
    </RouterLink>
  </div>
</div>
</template>

<script setup></script>
<style scoped lang="scss">
.not-found {
  text-align: center;
  flex-direction: column;
  gap: var(--space);
  height: 25rem;
  width: 100%;
>>>>>>> 5baed4873112c0132bf6864ad9d3b64d222d22b6
}
</style>
