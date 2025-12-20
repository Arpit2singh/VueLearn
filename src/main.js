import './assets/main.css'
import Routers from './components/Routers'
import { createApp } from 'vue'
import App from './App.vue'
import { ref } from 'vue'
const app = createApp(App)
app.use(Routers)
app.mount('#app')
