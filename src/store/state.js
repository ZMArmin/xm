export default {
    cart: JSON.parse(window.localStorage.getItem('xm-cart')) || [],
    isLogin: false,
    isEdit: false,
    allCheck: Boolean
}
