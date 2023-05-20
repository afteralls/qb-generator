export const useMainStore = defineStore('main', () => {
  const isDark = ref<boolean | null>()

  return { isDark }
})
