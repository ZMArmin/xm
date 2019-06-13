export default {
    cart: [],
    // isLogin: false,
    isEdit: false,
    allCheck: Boolean,
    userinfo: JSON.parse(window.localStorage.getItem('xm-userinfo')) || {
        id: '',
        displayName: '',
        avater: '',
        token: ''
    }

}
