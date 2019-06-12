// 配置路由为异步路由
const Home = () => import('@/views/Home')
const Sort = () => import('@/views/Sort')
const Taste = () => import('@/views/Taste')
const Cart = () => import('@/views/Cart')
const Mine = () => import('@/views/Mine')
const XmSearch = () => import('@/components/XmSearch')
const XmMessage = () => import('@/components/XmMessage')

export default [
  {
    path: '/home',
    alias: '/',
    name: 'home',
    component: Home,
    meta: {
      isTabbar: true,
      title: '首页',
      icon: '&#xe619;'
    }
  },
  {
    path: '/sort',
    name: 'sort',
    component: Sort,
    meta: {
      isTabbar: true,
      title: '分类',
      icon: '&#xe6b7;'
    }
  },
  {
    path: '/taste',
    name: 'taste',
    component: Taste,
    meta: {
      isTabbar: true,
      title: '品味',
      icon: '&#xe666;'
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    meta: {
      isTabbar: true,
      title: '购物车',
      icon: '&#xe61d;'
    }
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine,
    meta: {
      isTabbar: true,
      title: '我的',
      icon: '&#xe680;'
    }
  },
  {
    path: '/search',
    name: 'search',
    component: XmSearch
  },
  {
    path: '/message',
    name: 'message',
    component: XmMessage
  }
]
