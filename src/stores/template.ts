export interface Template {
  name: string
  desc: string
  standart?: string | number
  href?: string
  path?: string
  date: string
  mode: Mode
  isExample?: boolean
}

export const useTemplateStore = defineStore('template', () => {
  const templates = useStorage<Template[]>('templates', [])

  return { templates }
})
