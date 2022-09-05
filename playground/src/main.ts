import { createApp } from 'vue'
import HolaUIVuePlugin from '@hola-ui/vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).use(HolaUIVuePlugin, {}).mount('#app')
