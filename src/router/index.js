import Vue from 'vue'
import Router from 'vue-router'
import {MENU_INDEX} from '@/dictionary/menu-symbol.js'
import index from '@/views/index/router.config'


Vue.use(Router)
export const viewRoutes = []



const statueRouters = [
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/status/404')
  }
]

const redirectRouters = [{
  path: '*',
  redirect: {
    name: '404'
  }
}, {
  path: '/',
  redirect: {
    name: MENU_INDEX
  }
}]

const router = new Router({
  mode: 'hash',
  routes: [
    ...statueRouters,
    ...redirectRouters,
    ...index
  ]
})


export default router