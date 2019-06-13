import * as ajax from '@/request'
export default {
    loginAction (ctx, userinfo) {
        ajax.login(userinfo).then(resp => {
            // console.log(resp)
            // 登录成功
            // 请求成功响应后，ctx.commit提交一个mutation
            // 登录成功,调用loginAction，在loginAction处，把用户信息存本地
            window.localStorage.setItem('xm-userinfo', JSON.stringify(resp.data.data.userinfo))
            ctx.commit('toggleIsLogin', resp.data.data.userinfo)
        })
    }
}
