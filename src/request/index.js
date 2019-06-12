import Vue from 'vue'
import axios from 'axios'

import { Indicator } from 'mint-ui'

const ajax = axios.create()

// Vue.prototype.$http = ajax

// 拦截器
ajax.interceptors.request.use(config => {
    Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
    })
    return config
})

ajax.interceptors.response.use(resp => {
    Indicator.close()
    if (resp.status === 200) {
        return resp.data
    } else {
        return {
            status: 400,
            msg: 'wangluocuowu'
        }
    }
})

export const getHome = () => {
    return ajax.get('http://www.xiongmaoyouxuan.com/api/tab/1?start=0')
}

export const getRecomend = () => {
    return ajax.get('http://quan.lukou.com/api/detail?id=13345016&normal=1&sa=')
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

export const getTasteList = () => {
    return ajax.get('http://quan.lukou.com/api/column/4203/items?start=0')
}
