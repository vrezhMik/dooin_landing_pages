import './styles/main.scss'
import './styles/globals.scss'
import './styles/fonts.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
