// import Meta from '@/router/meta'
import {
  MENU_BUSINESS
} from '@/dictionary/menu-symbol'


export default [{
  name: MENU_BUSINESS,
  path: '/business',
  component: () => import('./index.vue')
}]