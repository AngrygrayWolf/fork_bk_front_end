import { MENU_INDEX } from '@/dictionary/menu-symbol'

export default [{
  name: MENU_INDEX,
  path: '/index',
  component: () => import('./index.vue'),
}]