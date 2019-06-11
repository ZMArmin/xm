// 配置路由为异步路由
const Home = () => import('@/views/Home')
const Sort = () => import('@/views/Sort')
const Taste = () => import('@/views/Taste')
const Cart = () => import('@/views/Cart')
const Mine = () => import('@/views/Mine')
const ShopList = () => import('@/views/ShopList')
const Product = () => import('@/views/Product')
const ProductList = () => import('@/views/ProductList')
const Detail = () => import('@/views/Detail')

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
    },
    children: [
      {
        path: ':shopId',
        name: 'shoplist',
        component: ShopList
      }
    ]
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
    path: '/product',
    name: 'product',
    component: Product,
    meta: {
      isTabbar: false
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
        isTabbar: false
    }
  }
]
