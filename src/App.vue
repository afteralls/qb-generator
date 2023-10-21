<template>
<<<<<<< HEAD
<<<<<<< HEAD
  <div class="bg"></div>
  <router-view v-slot="{ Component }">
    <Transition name="route" mode="out-in">
      <component :is="Component"></component>
    </Transition>
  </router-view>
</template>

<style lang="scss">
@import './assets/scss/variables';

.route {
  &-enter-from {
    opacity: 0;
    transform: translateX(100px);

    @media (max-width: $extra-medium) {
      transform: none;
    }
  }
  &-enter-active {
    transition: all 0.2s ease-out;
  }
  &-leave-to {
    opacity: 0;
    transform: translateX(-100px);

    @media (max-width: $extra-medium) {
      transform: none;
    }
  }
  &-leave-active {
    transition: all 0.2s ease-in;
  }
}

.bg {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: url('./assets/img/bg.webp') center no-repeat;
  background-size: cover;
  filter: brightness(0.8);
  z-index: -1;

  @media (max-width: $extra-medium) {
    background: url('./assets/img/bg-mob.webp') center no-repeat;
    background-size: cover;
  }
}
=======
  <TheNavbar />
  <AppHotifications />
  <AppBackground class="app-background _full-fixed" />
  <div class="app-wrapper _full-fixed"></div>
  <div class="_container">
    <RouterView v-slot="{ Component }">
      <Transition name="main" mode="out-in">
        <div class="_wrapper">
          <component :is="Component" />
        </div>
      </Transition>
    </RouterView>
  </div>
=======
  <TheHeader />
  <AppNotifications />
  <UiBlock layout="container">
    <RouterView v-slot="{ Component }">
      <Transition name="main" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </UiBlock>
>>>>>>> f45ee6fb03fd50201fb8cb44fd165afbfd5dd1f2
</template>

<script setup lang="ts">
const router = useRouter()
const i18n = inject('func') as LangFunc
<<<<<<< HEAD
router.beforeEach((to, _, next) => { document.title = i18n(to.name as string); next() })
</script>

<style scoped lang="scss">
.app-wrapper {
  backdrop-filter: blur(40px);
  background-color: var(--tp-c);
  z-index: -1;
}

.app-background { z-index: -2; }
>>>>>>> 5baed4873112c0132bf6864ad9d3b64d222d22b6
</style>
=======

router.beforeEach((to, _, next) => {
  document.title = i18n(to.name as string)
  next()
})
</script>
>>>>>>> f45ee6fb03fd50201fb8cb44fd165afbfd5dd1f2
