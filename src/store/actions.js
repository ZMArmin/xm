import * as ajax from '@/request'
export default {
    loginAction (ctx, userinfo) {
        ajax.login(userinfo).then(resp => {
            console.log(resp)
            // 登录成功
            // 请求成功响应后，ctx.commit提交一个mutation
            ctx.commit('toggleIsLogin', true)
        })
    }
}
