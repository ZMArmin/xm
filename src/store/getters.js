export default {
    totalCount (state) {
        return state.cart.reduce((total, current) => {
            total += current.count
            return total
        }, 0)
    },
    totalCheckedCount (state) {
        return state.cart.reduce((total, current) => {
            total += current.isCheck ? current.count : 0
            return total
        }, 0)
    },
    totalCheckedPrice (state) {
        return state.cart.reduce((total, current) => {
            total += current.isCheck ? current.count * current.price : 0
            return total
        }, 0)
    },
    isAllCheck (state) {
        // eslint-disable-next-line no-return-assign
        return state.allCheck = state.cart.every(item => {
            return item.isCheck === true
        })
    },
<<<<<<< HEAD
    isLogin (state) {
        // 从state的userinfo 中取token，token存在，说明登陆过，可以取到用户名
        return Boolean(state.userinfo.token)
    },
    user (state) {
        // 用户名
        return { displayName: state.userinfo.displayName, avatar: state.userinfo.avatar }
    },
=======
>>>>>>> b93d073460f00733f2db402d6ff9ed9da0da5360
    isCartEmpty (state) {
        return state.cart.length === 0
    }
}
