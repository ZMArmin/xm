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

export const gitCartMore = () => ajax.get('/api/sub_column/13/toplist?perpage=50')
export const getDetail = (id) => ajax.get(`api/detail?id=${id}`)

export const login = (userinfo) => {
    return ajax.post('http://rap2api.taobao.org/app/mock/206566/login', userinfo)
}

export const taste = () => {
    return ajax.get('http://rap2api.taobao.org/app/mock/206566/taste/column')
}

export const getTasteList = () => ajax.get(`/api/column/4203/items?start=0`)

export const getHome = () => {
    return ajax.get('http://www.xiongmaoyouxuan.com/api/tab/1?start=0')
}

export const getRecomend = () => {
    return ajax.get('http://quan.lukou.com/api/detail?id=13345016&normal=1&sa=')
}

export const getNewBot = () => {
    return ajax.get('http://quan.lukou.com/api/tab/4?start=0')
}

export const getRecomendThen = () => {
    return ajax.get('http://quan.lukou.com/api/detail?id=13259734&normal=1&sa=')
}

export const getMarket = () => {
    return ajax.get('http://quan.lukou.com/api/detail?id=11559626&normal=1&sa=')
}

export const getList = () => {
    return ajax.get('http://quan.lukou.com/api/tab/2?start=0')
}
