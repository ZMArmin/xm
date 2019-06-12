import { Toast } from 'mint-ui'
import {
    TOGGLE_IS_CHECK,
    COUNT_DECREMENT,
    COUNT_INCREMENT,
    TOGGLE_ALL_IS_CHECK,
    TOGGLE_IS_LOGIN
} from './mutationtypes'
export default {
    [TOGGLE_IS_CHECK] (state, id) {
        state.cart = state.cart.map(item => {
           if (item.id === id) item.isCheck = !item.isCheck
           return item
        })
    },
    [COUNT_DECREMENT] (state, id) {
        state.cart = state.cart.map(item => {
            if (item.id === id) {
                item.count--
                if (item.count < 1) {
                    Toast({
                        message: '不能再少了哟，商品数量已经最小了',
                        position: 'top',
                        duration: 1000
                      })
                    item.count = 1
                }
            }
            return item
         })
    },
    [COUNT_INCREMENT] (state, id) {
        state.cart = state.cart.map(item => {
            if (item.id === id) item.count++
            return item
         })
    },
    [TOGGLE_ALL_IS_CHECK] (state) {
    },
    [TOGGLE_IS_LOGIN] (state, isLogin) {
        state.isLogin = isLogin
    }

}
