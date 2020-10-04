import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/commonly',
        name: 'commonly',
        component: () => import('../views/commonly/commonly.vue'),
        meta: {
          title: '常用hooks',
          parentpath: "/reports/reports",
          icon: 'el-icon-position'
        }
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
