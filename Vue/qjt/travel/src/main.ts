import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

const pinia = createPinia()
// Vue 全家桶
createApp(App).use(router).use(pinia).mount('#app')
