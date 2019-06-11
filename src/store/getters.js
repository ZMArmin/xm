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
            total += current.isCheck ? current.count*current.price : 0
            return total
        }, 0)
    }
}