import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useMainStore = defineStore('main', () => {
  const state = useStorage('templates', [])

  return { }
})
