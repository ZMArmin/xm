import { Toast } from 'mint-ui'
import {
    TOGGLE_IS_CHECK,
    COUNT_DECREMENT,
    COUNT_INCREMENT,
    TOGGLE_ALL_IS_CHECK,
    ON_ADD_CART
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
    [ON_ADD_CART] (state, shopInfo) {
        const isExist = state.cart.some(item => {
            return item.id === shopInfo.id
        })
        if (isExist) {
            state.cart = state.cart.map(item => {
                if (item.id === shopInfo.id) {
                    item.count++
                }
                return item
            })
        } else {
            state.cart.push({ ...shopInfo, count: 1, isCheck: true })
        }
    }
}
