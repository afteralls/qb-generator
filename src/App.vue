<template>
  <TheNavbar />
  <div class="_container">
    <RouterView v-slot="{ Component }">
      <Transition name="main" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<script setup>
const router = useRouter()
const i18n = inject('func')
router.beforeEach(to => { document.title = i18n(to.name) })
</script>
