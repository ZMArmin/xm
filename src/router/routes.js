import XmFooter from '@/components/XmFooter'
// 配置路由为异步路由
const Home = () => import('@/views/Home')
const Sort = () => import('@/views/Sort')
const Taste = () => import('@/views/Taste')
const Cart = () => import('@/views/Cart')
const Mine = () => import('@/views/Mine')
const SortList = () => import('@/views/SortList')
const Product = () => import('@/views/Product')
const ProductList = () => import('@/views/ProductList')
const Detail = () => import('@/views/Detail')
const Login = () => import('@/views/Login')
const XmSearch = () => import('@/components/XmSearch')
const XmMessage = () => import('@/components/XmMessage')
const Personal = () => import('@/views/Personal')
const XmAccount = () => import('@/views/account')

export default [
  {
    path: '/home',
    alias: '/',
    name: 'home',
    components: {
      default: Home,
      footer: XmFooter
    },
    meta: {
      isTabbar: true,
      title: '首页',
      icon: '&#xe619;',
      isAuthRequired: false
    }
  },
  {
    path: '/sort',
    name: 'sort',
    components: {
      default: Sort,
      footer: XmFooter
    },
    meta: {
      isTabbar: true,
      title: '分类',
      icon: '&#xe6b7;',
      isAuthRequired: false
    },
    children: [
      {
        path: '/news/newsList/:shopId',
        name: 'shoplist',
        component: SortList
      }
    ]
  },
  {
    path: '/taste',
    name: 'taste',
    components: {
      default: Taste,
      footer: XmFooter
    },
    meta: {
      isTabbar: true,
      title: '品味',
      icon: '&#xe666;',
      isAuthRequired: false
    }
  },
  {
    path: '/cart',
    name: 'cart',
    components: {
      default: Cart,
      footer: XmFooter
    },
    meta: {
      isTabbar: true,
      title: '购物车',
      icon: '&#xe61d;',
      isAuthRequired: false
    }
  },
  {
    path: '/mine',
    name: 'mine',
    components: {
      default: Mine,
      footer: XmFooter
    },
    meta: {
      isTabbar: true,
      title: '我的',
      icon: '&#xe680;',
      isAuthRequired: false
    }
  },
  {
    path: '/product',
    name: 'product',
    component: Product,
    meta: {
      isTabbar: false,
      isAuthRequired: false
    },
    children: [
        {
          path: ':productId',
          name: 'productList',
          component: ProductList
        }
    ]
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail,
    meta: {
        isTabbar: false,
        isAuthRequired: false
    }
  },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        isTabbar: false,
        isAuthRequired: false
      }
    },
    {
        path: '/search',
        name: 'search',
        component: XmSearch,
        meta: {
        }
    },
    {
        path: '/message',
        name: 'message',
        component: XmMessage,
        meta: {
        }
    },
    {
        path: '/personal',
        name: 'personal',
        component: Personal,
        meta: {
            isTabbar: false,
            isAuthRequired: false
        }
    },
    {
        path: '/account',
        name: '结算',
        component: XmAccount,
        meta: {
            isTabbar: false
        }
    }
]
