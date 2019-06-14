import * as ajax from '@/request'
import { Toast, MessageBox } from 'mint-ui'
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
    },
    deleItem (context) {
        const is = context.state.cart.some(item => {
            return item.isCheck
        })
        if (is === false) {
            Toast({
                message: '请选择需要删除的商品',
                duration: 2000
            })
        } else {
            MessageBox.confirm('确定删除选中的商品吗?').then(() => {
                context.commit('deleProduct')
                // console.log(state.cart)
            })
        }
    }
}
