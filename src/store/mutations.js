import { Toast } from 'mint-ui'
import {
    TOGGLE_IS_CHECK,
    COUNT_DECREMENT,
    COUNT_INCREMENT,
    TOGGLE_ALL_IS_CHECK,
    TOGGLE_IS_EDIT,
    DELE_PRODUCT,
    ON_ADD_CART,
    TOGGLE_IS_LOGIN,
    LOGIN_OUT
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
        state.allCheck = !state.allCheck
        state.cart = state.cart.map(item => {
            if (state.allCheck === true) {
                item.isCheck = true
                return item
            } else {
                item.isCheck = false
                return item
            }
        })
    },
    [TOGGLE_IS_EDIT] (state) {
        state.isEdit = !state.isEdit
        if (state.isEdit === false) {
            state.allCheck = true
            state.cart = state.cart.map(item => {
                item.isCheck = true
                return item
            })
        } else {
            state.allCheck = false
            state.cart = state.cart.map(item => {
                item.isCheck = false
                return item
            })
        }
    },
    [DELE_PRODUCT] (state) {
        state.cart = state.cart.filter(item => {
            return item.isCheck !== true
        })
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
    },
    [TOGGLE_IS_LOGIN] (state, userinfo) {
        state.userinfo = userinfo
    },
    [LOGIN_OUT] (state) {
        window.localStorage.clear()
        state.userinfo = {
            id: '',
            displayName: '',
            avater: '',
            token: ''
        }
    }
}
