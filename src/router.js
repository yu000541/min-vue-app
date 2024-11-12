import {createRouter, createWebHistory} from 'vue-router'
import Tmp from "./components/Tmp.vue";
import About from "./components/About.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
    // each routes
        {
            path: '/tmp',
            name: 'Tmp',
            component: Tmp
        },
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ]
})

export default router