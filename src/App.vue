<template>
  <TheHeader />
  <div class="_container">
    <RouterView v-slot="{ Component }">
      <Transition name="main" mode="out-in">
        <div class="_wrapper">
          <component :is="Component" />
        </div>
      </Transition>
    </RouterView>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const i18n = inject('func') as LangFunc
router.beforeEach((to, _, next) => { document.title = i18n(to.name as string); next() })
</script>
