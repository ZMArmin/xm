import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router/index'

import store from '@/store'

store.subscribe((mutation, state) => {
    // 订阅所有的mutation，相当于监听变化
    // console.log(123)
    // 存localStorage
    window.localStorage.setItem('xm-cart', JSON.stringify(state.cart))
})

Vue.use(Mint)

Vue.config.productionTip = false

// 全局导航守卫
router.beforeEach((to, from, next) => {
// 先判断是否需要，在验证登录状态
    if (to.meta.isAuthRequired === true) {
        if (store.getters.isLogin === false) {
            next({
                name: 'login',
                params: { 'from': to.path }
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
