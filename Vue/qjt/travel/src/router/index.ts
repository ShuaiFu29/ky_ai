import {
  createWebHistory,
  createRouter,
  type RouteRecordRaw
} from 'vue-router';
// 路由配置数组？
const rootRoutes: RouteRecordRaw[] = [
  {
    path: '/home',
    //懒加载
    component: () => import('@/views/HomePage.vue'),
    name: "home"
  },
  {
    path: '/account',
    name: 'account',
    component: () => import("@/views/Account.vue")
  },
  {
    path: '/discount',
    name: 'discount',
    component: () => import("@/views/Discount.vue")
  },
  {
    path: '/collection',
    name: 'collection',
    component: () => import("@/views/Collection.vue")
  },
  {
    path: '/trip',
    name: 'trip',
    component: () => import("@/views/Trip.vue")
  }
]
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: "App",
    component: () => import('@/views/TheRoot.vue'),
    redirect: "/home",
    children: rootRoutes
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router