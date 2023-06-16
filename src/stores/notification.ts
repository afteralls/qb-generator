export const useNotificationStore = defineStore('notification', () => {
  const notifications = ref<string[]>([])
  const timeout: number = 5000

  const addNotification = (notification: string) => {
    notifications.value.push(notification)
    setTimeout(() => {
      notifications.value.shift()
    }, timeout)
  }

  setTimeout(() => {
    addNotification('sdssdsdds')
  }, 4000)

  return { notifications, addNotification, timeout }
})
