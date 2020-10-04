import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import layout from '../views/layout/layout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    component: layout,
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
        path: '/',
        name: 'commonly',
        component: () => import('../views/Home.vue'),
        meta: {
          title: '首页',
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
        path: '/embeddedPage',
        name: 'embeddedPage',
        component: () => import('../views/embeddedPage/embeddedPage.vue'),
        meta: {
          title: '内嵌网页',
          icon: 'BorderOutlined'
        }
      },
      {
        path: '/codeBottom',
        name: 'codeBottom',
        component: () => import('../views/codeBottom/codeBottom.vue'),
        meta: {
          title: '验证码按钮',
          icon: 'MobileOutlined'
        }
      },
      {
        path: '/progressBar',
        name: 'progressBar',
        component: () => import('../views/progressBar/progressBar.vue'),
        meta: {
          title: '进度条拓展',
          icon: 'PushpinOutlined'
        }
      },
      {
        path: '/qrCode',
        name: 'qrCode',
        component: () => import('../views/qrCode/qrCode.vue'),
        meta: {
          title: '二维码',
          icon: 'QrcodeOutlined'
        }
      },
      {
        path: '/copeText',
        name: 'copeText',
        component: () => import('../views/copeText/copeText.vue'),
        meta: {
          title: '复制文本',
          icon: 'FileTextOutlined'
        }
      },
      {
        path: '/waterMark',
        name: 'waterMark',
        component: () => import('../views/waterMark/waterMark.vue'),
        meta: {
          title: '生成水印',
          icon: 'BlockOutlined'
        }
      },
      {
        path: '/editor',
        name: 'editor',
        component: () => import('../views/editor/editor.vue'),
        meta: {
          title: '可编辑文字',
          icon: 'AuditOutlined'
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
