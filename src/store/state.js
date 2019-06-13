export default {
    cart: JSON.parse(window.localStorage.getItem('xm-cart')) || [],
    isEdit: false,
    allCheck: Boolean,
    userinfo: JSON.parse(window.localStorage.getItem('xm-userinfo')) || {
        id: '',
        displayName: '',
        avater: '',
        token: ''
    }
}
