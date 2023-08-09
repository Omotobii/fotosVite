import './assets/global.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// export const bus = new Vue()

app.use(router)

app.mount('#app')
