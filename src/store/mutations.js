import { Toast, MessageBox } from 'mint-ui'
import {
    TOGGLE_IS_CHECK,
    COUNT_DECREMENT,
    COUNT_INCREMENT,
    TOGGLE_ALL_IS_CHECK,
<<<<<<< HEAD
<<<<<<< HEAD
    TOGGLE_IS_EDIT,
    DELE_ITEM,
    ON_ADD_CART
=======
    TOGGLE_IS_LOGIN
>>>>>>> feat:1.完成taste页面；2.登录页完成全局状态管理和登录跳转
=======
    TOGGLE_IS_LOGIN
>>>>>>> e31eb28a5b5a7a46c50e2c673002ab7a08d33672
} from './mutationtypes'
export default {
    [TOGGLE_IS_CHECK] (state, id) {
        state.cart = state.cart.map(item => {
           if (item.id === id) item.isCheck = !item.isCheck
           return item
        })
        // state.allCheck = state.cart.every(item => {
        //     return item.isCheck === true
        // })
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
<<<<<<< HEAD
<<<<<<< HEAD
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
    [DELE_ITEM] (state, id) {
        const is = state.cart.some(item => {
            return item.isCheck
        })
        if (is === false) {
            Toast({
                message: '请选择需要删除的商品',
                duration: 1500
            })
        } else {
            MessageBox({
                title: '提示',
                message: '确定删除选中的商品吗?',
                showCancelButton: true
            })
            MessageBox.confirm('确定删除选中的商品吗?').then(() => {
                state.cart = state.cart.filter(item => {
                    return item.isCheck !== true
                })
                console.log(state.cart)
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
=======
    },
    [TOGGLE_IS_LOGIN] (state, isLogin) {
        state.isLogin = isLogin
>>>>>>> feat:1.完成taste页面；2.登录页完成全局状态管理和登录跳转
=======
    },
    [TOGGLE_IS_LOGIN] (state, isLogin) {
        state.isLogin = isLogin
>>>>>>> e31eb28a5b5a7a46c50e2c673002ab7a08d33672
    }

}
