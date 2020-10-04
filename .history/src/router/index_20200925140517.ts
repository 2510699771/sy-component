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
        path: '/trend',
        name: 'trend',
        component: () => import('../views/trend/trend.vue'),
        meta: {
          title: '趋势',
          icon: 'BarChartOutlined'
        }
      },
      {
        path: '/bottomNavigation',
        name: 'bottomNavigation',
        component: () => import('../views/bottomNavigation/bottomNavigation.vue'),
        meta: {
          title: '底部工具栏',
          icon: 'ToolOutlined'
        }
      },
      {
        path: '/notice',
        name: 'notice',
        component: () => import('../views/notice/notice.vue'),
        meta: {
          title: '通知图标',
          icon: 'BellOutlined'
        }
      },
      {
        path: '/notice',
        name: 'notice',
        component: () => import('../views/embeddedPage/embeddedPage'),
        meta: {
          title: '通知图标',
          icon: 'BellOutlined'
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
