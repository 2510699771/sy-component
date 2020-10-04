import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    component: Home,
    children: [
      {
        path: '/commonly',
        name: 'commonly',
        component: () => import('../views/commonly/commonly.vue'),
        meta: {
          title: '常用hooks',
          icon: 'DeploymentUnitOutlined'
        }
      },
      {
        path: '/picturePreview',
        name: 'picturePreview',
        component: () => import('../views/picturePreview/picturePreview.vue'),
        meta: {
          title: '图片预览',
          icon: 'PictureOutlined'
        }
      },
      {
        path: '/picturePreview',
        name: 'picturePreview',
        component: () => import('../views/trend/trend'),
        meta: {
          title: '图片预览',
          icon: 'PictureOutlined'
        }
      },
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router