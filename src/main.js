import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router/index'

import store from '@/store'
Vue.use(Mint)

Vue.config.productionTip = false

Vue.mixin({
    filters: {
        countShow (val) {
            if (val > 99) {
                return '99+'
            } else {
                return val
            }
        },
        toFix2 (val) {
            return val.toFixed(2)
        }
    }
})

// 全局导航守卫
router.beforeEach((to, from, next) => {
// 先判断是否需要，在验证登录状态
    if (to.meta.isAuthRequired === true) {
        if (store.state.isLogin === false) {
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
