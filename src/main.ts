import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createMemoryHistory, createWebHistory, createRouter } from "vue-router"
import Frank from "./components/Frank.vue";
import Doc from "./components/Doc.vue";
import Home from "./components/Home.vue";
const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: "/", component: Frank },
        { path: "/doc", component: Doc },
        { path: "/home", component: Home },
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
