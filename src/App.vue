<template>
  <TheHeader />
  <AppNotifications />
  <UiModal :is-open="hotkeyModal" />
  <div class="_container">
    <RouterView v-slot="{ Component }">
      <Transition name="main" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const hotkeyModal = ref<boolean>(false)
const i18n = inject('func') as LangFunc

router.beforeEach((to, _, next) => {
  document.title = i18n(to.name as string)
  next()
})
</script>
