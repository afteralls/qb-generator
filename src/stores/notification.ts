export const useNotificationStore = defineStore('notification', () => {
  const notifications = ref<string[]>([])
  const timeout: number = 5000

  const addNotification = (notification: string) => {
    notifications.value.push(notification)
    setTimeout(() => {
      notifications.value.shift()
    }, timeout)
  }

  return { notifications, addNotification, timeout }
})
