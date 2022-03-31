import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/dashboard/index.vue'
import Logtime from '../pages/logtime/index.vue'

const routes = [
    { path: '/dashboard', component: Dashboard },
    {
        path: '/logtime',
        component: Logtime,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

  export default router;