import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { initGtag } from './lib/gtag'

initGtag()

createApp(App).mount('#app')
