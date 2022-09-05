import { createApp } from '@vue/runtime-dom'
import HolaUIVuePlugin from '@hola-ui/vue'
import { domElements, hola } from '@hola-ui/system'
import App from './App.vue'
import router from './router'

const app = createApp(App).use(router).use(HolaUIVuePlugin, {})

domElements.forEach((tag) => {
  app.component(`hola.${tag}`, hola(tag))
})

app.mount('#app')
