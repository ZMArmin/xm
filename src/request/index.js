import axios from 'axios'
import { Indicator } from 'mint-ui'

const ajax = axios.create()

// 设置拦截器
ajax.interceptors.request.use(config => {
    // 显示加载中
    Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
    })
    return config
})

ajax.interceptors.response.use(resp => {
    // 数据响应后关闭加载
    Indicator.close()
    // 进行全局错误处理
    if (resp.status === 200) {
        return resp.data
    } else {
        return {
            status: 400,
            msg: '网络错误'
        }
    }
})

export const getNav = () => ajax.get('api/tabs')

export const getShopList = (id, start = 0) => ajax.get(`/api/tab/${id}?start=${start}`)

export const login = (userinfo) => {
    return ajax.post('http://rap2api.taobao.org/app/mock/206566/login', userinfo)
}

export const taste = () => {
    return ajax.get('http://rap2api.taobao.org/app/mock/206566/taste/column')
}

export const getTasteList = () => ajax.get(`/api/column/4203/items?start=0`)
