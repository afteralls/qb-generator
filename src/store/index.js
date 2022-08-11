import { createStore } from 'vuex'
import notification from './modules/notification.module'

export default createStore({
  modules: { notification }
})
