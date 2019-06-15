<template>
    <div class="xm-detail">
        <div class="xm-detail-header">
            <b  @click="onToBack">&lt;</b>
            <ul class="xm-detail-header-nav">
                <li>商品</li>
                <li>评价</li>
                <li>详情</li>
                <li>推荐</li>
            </ul>
            <div class="xm-detail-header-icon">
                <i class="icon" v-html="'&#xe6fb;'" @click="onIsShare"></i>
                <ul class="xm-detail-header-icon-share" @click="onOutShare">
                    <li>
                        <i class="icon icon-wx" v-html="'&#xe73d;'"></i>
                        <span>微信</span>
                    </li>
                    <li>
                        <i class="icon icon-qq" v-html="'&#xe73f;'"></i>
                        <span>QQ</span>
                    </li>
                    <li>
                        <i class="icon icon-wb" v-html="'&#xe73e;'"></i>
                        <span>微博</span>
                    </li>
                    <li>
                        <i class="icon icon-byq" v-html="'&#xe73b;'"></i>
                        <span>朋友圈</span>
                    </li>
                    <li>
                        <i class="icon icon-kj" v-html="'&#xe73c;'"></i>
                        <span>空间</span>
                    </li>
                </ul>
                <i class="icon" v-html="'&#xe879;'" @click="onIsShow"></i>
                <ul v-if="isShow" class="xm-detail-header-icon-show">
                    <router-link tag="li" to="/home" class="xm-detail-header-show-home">
                        <i class="icon" v-html="'&#xe619;'"></i>
                        <span>首页</span>
                    </router-link>
                    <router-link tag="li" to="/product?2" class="xm-detail-header-show-collect">
                        <i class="icon" v-html="'&#xe712;'"></i>
                        <span>我的收藏</span>
                    </router-link>
                </ul>
            </div>
        </div>
        <div class="xm-detail-main" :key="detail.id">
            <div class="xm-detail-main-banners">
                <mt-swipe :auto="3000" class="xm-detail-main-banners-swipe">
                    <mt-swipe-item
                        v-for="photo in detail.photos"
                        :key = "photo.id"
                    ><img :src="photo.url" :alt="photo.cid"></mt-swipe-item>
                </mt-swipe>
            </div>
            <div class="xm-detail-main-price">
                <p class="xm-detail-main-price-minprice">￥<span>{{detail.price}}</span></p>
                <p class="xm-detail-main-price-maxprice">￥<span>{{detail.tbOriginPrice}}</span></p>
                <b>{{detail.couponValue}}</b>
                <div class="xm-detail-main-price-share" @click="onIsShare">
                    <i class="icon" v-html="'&#xe6fb;'"></i><br/>
                    <span>分享</span>
                </div>
            </div>
            <p class="xm-detail-main-title">
                <img src="../../public/img/xm-login.png" alt="">
                <b>{{detail.title}}</b>
            </p>
            <p class="xm-detail-main-explain">{{detail.qunTitle}}</p>
            <p class="xm-detail-main-promise">
                <img src="../../public/img/logo.png" alt="">
                <b>小米有品</b>
                <span>有品质，放心买！</span>
            </p>
            <p class="xm-detail-main-gift">
                <i class="icon" v-html="'&#xe602;'"></i>
                <span>新人领180元礼包</span>
                <b>&gt;</b>
            </p>
            <div class="xm-detail-main-selected">
                <i>已选</i>
                <span v-if="!isChoose">请选择&nbsp;颜色&nbsp;&nbsp;尺码</span>
                <span v-else>已选择&nbsp;{{color}}&nbsp;&nbsp;{{size}}</span>
                <b @click="onSelected">&gt;</b>
                <div class="xm-detail-main-selected-choose">
                    <div class="xm-detail-main-selected-choose-header">
                        <img :src="image" alt="">
                        <div class="middle">
                            <p class="middle-price">￥<span>{{detail.price}}</span></p>
                            <b>{{detail.couponValue}}</b>
                            <p class="middle-word">请选择颜色&nbsp;&nbsp;尺码</p>
                            <span class="middle-close" @click="onCloseSelected">x</span>
                        </div>
                    </div>
                    <div class="xm-detail-main-selected-choose-main">
                        <div class="shopColor" @click="onChangeColor">
                            <p class="shopColor-title" >颜色</p>
                            <span id="span">星夜黑</span>
                            <span id="span">玫瑰红</span>
                            <span id="span">柔瑰粉</span>
                            <span id="span">天空蓝</span>
                        </div>
                        <div class="shopColor" @click="onChangeSize">
                            <p class="shopColor-title">尺码</p>
                            <span id="span">S</span>
                            <span id="span">M</span>
                            <span id="span">L</span>
                            <span id="span">XL</span>
                        </div>
                        <div class="shopColor">
                            <p class="shopColor-title">数量</p>
                            <b @click="onCountDecrement()">-</b>
                            <i class="shopColor-num">{{count}}</i>
                            <b @click="onCountIncrement()">+</b>
                        </div>
                        <div class="addCart">
                            <p class="addCart-cart" @click="onAddToCart({...detail})">加入购物车</p>
                            <p class="addCart-buy">立即购买</p>
                        </div>
                    </div>
                </div>
            </div>
            <p class="xm-detail-main-send">
                <i>送至</i>
                <span>{{value1}}&nbsp;&nbsp;&nbsp;{{value2}}&nbsp;&nbsp;&nbsp;{{value3}}</span>
                <b @click="onChange">&gt;</b>
                <mt-picker :slots="slots" @change="onValuesChange" class="change" v-if="isChange"></mt-picker>
                <router-view></router-view>
            </p>
            <div class="xm-detail-main-service">
                <i class="xm-detail-main-service-first">服务</i>
                <i class="icon" v-html="'&#xe62a;'"></i>
                <span>满99包邮</span>
                <i class="icon" v-html="'&#xe62a;'"></i>
                <span>有品三方</span>
                <i class="icon" v-html="'&#xe62a;'"></i>
                <span>7天无理由</span>
                <b @click="onExplain">&gt;</b>
                <div class="xm-detail-main-service-explain">
                    <div class="xm-detail-main-service-explain-header">
                        <h4>说明</h4>
                        <span @click="onCloseExplain">x</span>
                    </div>
                    <div class="xm-detail-main-service-explain-main">
                        <div>
                            <i class="icon" v-html="'&#xe62a;'"></i>
                            <span>满99包邮</span>
                            <p>本商品满99元可包邮，不足99元收取运费10元</p>
                        </div>
                        <div>
                            <i class="icon" v-html="'&#xe62a;'"></i>
                            <span>有品三方</span>
                            <p>本商品为有品精选精品，第三方品牌方为实际销售方，小米有品精心挑选，严格把关，为您精选品质上乘的精品商品。</p>
                        </div>
                        <div>
                            <i class="icon" v-html="'&#xe62a;'"></i>
                            <span>7天无理由</span>
                            <p>本商品支持7天无理由退货</p>
                        </div>
                        <div>
                            <i class="icon" v-html="'&#xe62a;'"></i>
                            <span>平台运费说明</span>
                            <p>
                                由小米平台发货的小米自营商品,单笔满150元免运费,不满150元收取10元运费;<br/>
                                有品平台三方商品,单笔订单满99元免运费,不满99元收取10元运费;<br/>
                                特殊商品需要单独收取运费,具体以实际结算金额为准;<br/>
                                优惠券不能抵扣运费。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="xm-detail-main-recommend">
                <p>--为您推荐--</p>
                <ul class="xm-detail-main-recommend-shop">
                    <!-- <li @click="taggleDetail"> -->
                    <XmCartMore
                        v-for="item in list"
                        :key="item.id"
                        :id="item.id"
                        :image="item.image"
                        :title="item.title"
                        :price="item.price"
                        :qunTitle="item.qunTitle"
                    ></XmCartMore>
                    <!-- </li> -->
                </ul>
            </div>
        </div>
        <div class="xm-detail-footer">
            <ul class="xm-detail-footer-left">
                <li>
                    <i class="icon" v-html="'&#xe629;'"></i>
                    <span @click="onService">客服</span>
                </li>
                <li @click="onShowTotal">
                    <label>
                        <input type="checkbox" class="ischeck">
                        <i class="icon check">&#xe712;</i>
                        <span>收藏</span>
                    </label>
                </li>
                <router-link to="/cart" tag="li">
                    <i class="icon" v-html="'&#xe64c;'"></i>
                    <span>购物车</span>
                    <b class="countTabbar">{{totalCount | countShow}}</b>
                </router-link>
            </ul>
            <div class="xm-detail-footer-right">
                <p class="xm-detail-footer-right-cart" @click="onAddCart({...detail})">加入购物车</p>
                <router-link tag="p" to="/account" class="xm-detail-footer-right-buy">立即购买</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui'
    import state from '@/store/state'
    import XmCartMore from '@/components/XmCartMore'
    import * as ajax from '@/request'
    import {
        mapMutations,
        mapGetters,
        mapState
    } from 'vuex'
    export default {
        data () {
            return {
                num: 0,
                isChoose: false,
                color: '颜色',
                size: '尺码',
                count: '1',
                isShow: false,
                isChange: false,
                value1: '北京',
                value2: '朝阳区',
                value3: '周家口',
                id: '',
                detail: [],
                image: '',
                list: [],
                slots: [
                    {
                        // flex: 1,
                        values: ['北京', '上海', '成都', '广州', '重庆'],
                        className: 'slot1',
                        textAlign: 'left'
                    }, {
                        pider: true,
                        content: '-',
                        className: 'slot2'
                    }, {
                        // flex: 1,
                        values: ['朝阳区', '南充', '广安', '德阳', '遂宁', '雅安'],
                        className: 'slot3',
                        textAlign: 'right'
                    }, {
                        pider: true,
                        content: '-',
                        className: 'slot4'
                    }, {
                        // flex: 1,
                        values: ['周家口', '南部', '蓬安', '仪陇', '西充', '顺庆'],
                        className: 'slot5',
                        textAlign: 'right'
                    }
                ]
            }
        },
        created () {
            this.id = this.$route.query.id
            ajax.getDetail(this.id).then(resp => {
                this.detail = resp.data.detail
                this.image = resp.data.detail.photos[1].url
            })
            ajax.gitCartMore().then(resp => {
                // console.log(resp)
                this.list = resp.data.list
            })
        },
        methods: {
            onChangeColor (e) {
                if (e.target.id === 'span') {
                    this.num++
                    if (this.num % 2) {
                        e.target.style.background = '#e00'
                        e.target.style.color = '#fff'
                        this.color = e.target.innerHTML
                    } else {
                        e.target.style.background = 'rgb(238, 236, 236)'
                        e.target.style.color = 'rgb(36, 34, 34)'
                        this.color = '颜色'
                    }
                }
            },
            onChangeSize (e) {
                this.num++
                console.log(this.num)
                if (e.target.id === 'span') {
                    if (this.num % 2) {
                        e.target.style.background = '#e00'
                        e.target.style.color = '#fff'
                        this.size = e.target.innerHTML
                    } else {
                        e.target.style.background = 'rgb(238, 236, 236)'
                        e.target.style.color = 'rgb(36, 34, 34)'
                        this.size = '尺码'
                    }
                }
            },
            onCountDecrement () {
                this.count--
                if (this.count < 1) {
                    this.count = 1
                }
            },
            onCountIncrement () {
                this.count++
            },
            onAddToCart (shopInfo) {
                this.isChoose = true
                let num = Number(this.count)
                const isExist = state.cart.some(item => {
                    return item.id === shopInfo.id
                })
                if (isExist) {
                    state.cart = state.cart.map(item => {
                        if (item.id === shopInfo.id) {
                            item.count += num
                        }
                        return item
                    })
                } else {
                    state.cart.push({ ...shopInfo, count: num, isCheck: true })
                }
                window.localStorage.setItem('xm-cart', JSON.stringify(state.cart))
                this.onCloseSelected()
            },
            onToBack () {
                this.$router.back()
            },
            onShowTotal () {
                let check = document.querySelector('.ischeck')
                if (!check.checked) {
                    Toast({
                        // iconClass: 'icon check',
                        message: '移除收藏成功',
                        position: 'middle'
                    })
                } else {
                    Toast({
                        // iconClass: 'icon check',
                        message: '加入收藏成功',
                        position: 'middle'
                    })
                }
            },
            onValuesChange (picker, values) {
                this.value1 = values[0]
                this.value2 = values[2]
                this.value3 = values[4]
            },
            onChange () {
                this.isChange = !this.isChange
            },
            onIsShow () {
                this.isShow = !this.isShow
            },
            onIsShare () {
                // this.isShare = !this.isShare
                let share = document.querySelector('.xm-detail-header-icon-share')
                share.style.bottom = '50px'
                setTimeout(() => {
                    share.style.bottom = '-100px'
                }, 3000)
                // console.log(document.querySelector('.xm-detail-header-icon-share'))
            },
            onOutShare () {
                document.querySelector('.xm-detail-header-icon-share').style.bottom = '-100px'
            },
            onService () {
                Toast({
                    // iconClass: 'icon check',
                    message: '请拨打客服电话：028-88773031',
                    position: 'bottom'
                })
            },
            onExplain () {
                let explan = document.querySelector('.xm-detail-main-service-explain')
                explan.style.bottom = '0'
            },
            onCloseExplain () {
                let explan = document.querySelector('.xm-detail-main-service-explain')
                explan.style.bottom = '-400px'
            },
            onSelected () {
                let selected = document.querySelector('.xm-detail-main-selected-choose')
                selected.style.bottom = '0'
            },
            onCloseSelected () {
                let selected = document.querySelector('.xm-detail-main-selected-choose')
                selected.style.bottom = '-476px'
            },
            ...mapMutations(['onAddCart'])
            // taggleDetail () {
            //     this.id = this.$route.query.id
            //     ajax.getDetail(this.id).then(resp => {
            //         this.detail = resp.data.detail
            //         // console.log(this.detail)
            //     })
            // },
        },
        computed: {
            ...mapGetters(['totalCount']),
            ...mapState(['cart'])
        },
        components: {
            XmCartMore
        }
    }
</script>

<style lang="scss" scoped>
$grey: #eee;
$deepGrey: #383838;
$mainColor: #845f3f;
@font-face {
    font-family: 'iconfont';  /* project id 1231674 */
    src: url('//at.alicdn.com/t/font_1231674_pzs8d29iqd.eot');
    src: url('//at.alicdn.com/t/font_1231674_pzs8d29iqd.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1231674_pzs8d29iqd.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1231674_pzs8d29iqd.woff') format('woff'),
    url('//at.alicdn.com/t/font_1231674_pzs8d29iqd.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1231674_pzs8d29iqd.svg#iconfont') format('svg');
}
.icon {
    font-family: 'iconfont';
}
.xm-detail {
    height: 100%;
    display: flex;
    flex-direction: column;
    &-header {
        width: 100%;
        height: 50px;
        border-bottom: 1px solid $mainColor;
        display: flex;
        align-items: center;
        position: relative;
        b {
            display: block;
            // float: left;
            font-size: 20px;
            color: #919191;
            margin-left: 10px;
        }
        &-nav {
            width: 60%;
            margin: 0 auto;
            display: flex;
            justify-content: space-around;
            color: $deepGrey;
            li {
                width: 20%;
                height: 50px;
                line-height: 50px;
                text-align: center;
            }
        }
        &-icon {
            font-size: 16px;
            color: #919191;
            i {
                margin-right: 10px;
            }
            &-show {
                // display: none;
                position: absolute;
                top: 50px;
                right: 0;
                z-index: 10;
                background-color: #fff;
                li {
                    height: 30px;
                    line-height: 30px;
                    i {
                        font-size: 12px;
                        margin-left: 5px;
                    }
                    span {
                        color: $deepGrey;
                        font-size: 12px;
                        margin-right: 5px;
                    }
                }
            }
            &-share {
                // display: none;
                position: fixed;
                bottom: -100px;
                left: 0;
                z-index: 10;
                display: flex;
                justify-content: space-around;
                align-items: center;
                width: 96%;
                height: 100px;
                background-color: #eee;
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
                margin-left: 2%;
                text-align: center;
                // opacity: 0;
                transition: 1s;
                li {
                    width: 20%;
                    text-align: center;
                    i {
                        display: block;
                        font-size: 30px;
                        margin-bottom: 8px;
                        margin-left: 5px;
                    }
                    span {
                        font-size: 14px;
                        letter-spacing: 2px;
                        color: $deepGrey;
                    }
                    .icon-wx {
                        color: rgb(31, 241, 3);
                    }
                    .icon-qq {
                        color: rgb(23, 156, 218);
                    }
                    .icon-wb {
                        color: rgb(197, 10, 10);
                    }
                    .icon-pyq {
                        color: rgb(31, 241, 3);
                    }
                    .icon-kj {
                        color: rgb(243, 239, 10);
                    }
                }
            }
        }
    }
    &-main {
        flex: 1;
        width: 100%;
        background-color: #faf9f5;
        overflow-x: hidden;
        &-banners {
            width: 100%;
            height: 0;
            padding-top: 100%;
            position: relative;
            &-swipe {
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                img {
                    width: 100%;
                }
            }
        }
        &-price {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            position: relative;
            background-color: #fff;
            &-minprice {
                color: #9a1c1d;
                font-size: 14px;
                margin-left: 10px;
                span {
                    font-size: 20px;
                }
            }
            &-maxprice {
                margin-left: 3px;
                font-size: 12px;
                height: 50px;
                line-height: 56px;
                color: #979797;
                text-decoration: line-through;
            }
            b {
                margin-left: 8px;
                color: #e00;
            }
            &-share {
                height: 50px;
                width: 30px;
                line-height: 20px;
                float: right;
                text-align: center;
                color: #646464;
                position: absolute;
                right: 20px;
                i {
                    display: inline-block;
                    font-size: 20px;
                    margin-top: 5px;
                }
                span {
                    // color: red;
                    font-size: 12px;
                }
            }
        }
        &-title {
            font-size: 14px;
            color: #000;
            line-height: 20px;
            background-color: #fff;
            img {
                width: 20px;
                height: 20px;
                vertical-align: middle;
                margin-right: 5px;
                margin-left: 10px;
            }
        }
        &-explain {
            background-color: #fff;
            line-height: 30px;
            color: $deepGrey;
            font-size: 12px;
            margin-left: 10px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        &-promise {
            height: 34px;
            border-bottom: 1px solid #e8e7e2;
            color: $mainColor;
            img {
                width: 16px;
                height: 16px;
                margin-left: 10px;
                margin-right: 5px;
                float: left;
                margin-top: 9px;
            }
            b {
                display: block;
                float: left;
                width: 60px;
                height: 16px;
                border-right: 1px solid #d2cdc7;
                margin-top: 9px;
                font-weight: bold;
            }
            span {
                display: block;
                float: left;
                margin-top: 9px;
                width: 100px;
                height: 16px;
                margin-left: 12px;
            }
        }
        &-gift {
            height: 40px;
            line-height: 40px;
            width: 100%;
            background-color: #fff;
            margin: 10px auto;
            color: #a61212;
            font-size: 14px;
            i {
                margin-left: 10px;
                margin-right: 15px;
                font-size: 20px;
            }
            b {
                float: right;
                font-size: 20px;
                margin-right: 10px;
                color: #b0b0b0;
            }
        }
        &-selected {
            height: 50px;
            line-height: 50px;
            background-color: #fff;
            position: relative;
            i {
                color: #b0b0b0;
                font-size: 12px;
                margin-left: 10px;
            }
            span {
                font-size: 14px;
                color: $deepGrey;
                margin-left: 15px;
                font-weight: 600;
            }
            b {
                float: right;
                font-size: 20px;
                margin-right: 10px;
                color: #b0b0b0;
            }
            &-choose {
                width: 100%;
                position: fixed;
                bottom: -476px;
                left: 0;
                z-index: 10;
                background-color: #ffffff;
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
                display: flex;
                flex-direction: column;
                transition: 1s;
                &-header {
                    width: 100%;
                    height: 100px;
                    border-bottom: 1px solid $mainColor;
                    img {
                        width: 70px;
                        height: 70px;
                        margin: 15px 10px;
                        float: left;
                    }
                    .middle {
                        float: left;
                        display: flex;
                        position: relative;
                        width: 72%;
                        &-price {
                            color: #e00;
                            font-size: 14px;
                            // line-height: 20px;
                            padding-top: 10px;
                            span {
                                margin-left: 0;
                                color: #e00;
                                font-size: 18px;
                            }
                        }
                        b {
                            font-size: 12px;
                            color: #e00;
                            margin-left: 3px;
                            width: 40px;
                            height: 16px;
                            line-height: 16px;
                            text-align: center;
                            margin-top: 20px;
                            border-radius: 8px;
                        }
                        &-word {
                            position: absolute;
                            left: 0;
                            top: 40px;
                            color: rgb(19, 18, 18);
                        }
                        &-close {
                            position: absolute;
                            top: 0;
                            right: 0;
                            color: rgb(165, 158, 158);
                            font-size: 20px;
                        }
                    }
                }
                &-main {
                    width: 100%;
                    .shopColor {
                        height: 60px;
                        &-title {
                            margin-top: 15px;
                            line-height: 20px;
                            color:#646464;
                            margin-left: 10px;
                            font-size: 18px;
                        }
                        span {
                            display: block;
                            float: left;
                            width: 50px;
                            height: 30px;
                            line-height: 30px;
                            text-align: center;
                            background-color: rgb(238, 236, 236);
                            color: rgb(36, 34, 34);
                            margin-top: 8px;
                            border-radius: 5px;
                            margin-left: 20px;
                        }
                        &-num {
                            width: 40px;
                            height: 20px;
                            line-height: 20px;
                            text-align: center;
                            border-radius: 5px;
                            background-color: rgb(238, 236, 236);
                            float: left;
                            margin-top: 15px;
                            margin-left: 0;
                            color: #000;
                            font-size: 16px;
                        }
                        b {
                            float: left;
                            margin-left: 10px;
                            font-size: 25px;
                        }
                    }
                    .addCart {
                        width: 100%;
                        height: 40px;
                        line-height: 40px;
                        font-size: 14px;
                        letter-spacing:1px;
                        color: #ffffff;
                        display: flex;
                        margin-top: 100px;
                        margin-left: 5%;
                        margin-bottom: 10px;
                        &-cart {
                            width: 45%;
                            height: 100%;
                            text-align: center;
                            background-color: $mainColor;
                            border-top-left-radius: 20px;
                            border-bottom-left-radius: 20px;
                        }
                        &-buy {
                            width: 45%;
                            height: 100%;
                            text-align: center;
                            background-color: #e00;
                            border-top-right-radius: 20px;
                            border-bottom-right-radius: 20px;
                        }
                    }
                }
            }
        }
        &-send {
            height: 50px;
            line-height: 50px;
            background-color: #fff;
            margin-top: 3px;
            position: relative;
            .change {
                width: 100%;
                height: 250px;
                background-color: rgba(248, 248, 248, 0.979);
                position: absolute;
                top: 52px;
                left: 0;
                z-index: 10000;
            }
            i {
                color: #b0b0b0;
                font-size: 12px;
                margin-left: 10px;
            }
            span {
                font-size: 14px;
                color: $deepGrey;
                margin-left: 15px;
            }
            b {
                float: right;
                font-size: 20px;
                margin-right: 10px;
                color: #b0b0b0;
            }
            .picker-item,.picker-selected {
                color: #e00;
            }
        }
        &-service {
            height: 50px;
            line-height: 50px;
            background-color: #fff;
            margin-top: 3px;
            &-first {
                color: #b0b0b0;
                font-size: 12px;
                margin-left: 10px;
                margin-right: 5px;
            }
            .icon {
                font-size: 16px;
                color: #e00;
                margin-left: 10px;
                margin-right: 3px;
            }
            span {
                font-size: 14px;
                color: $deepGrey;
            }
            b {
                float: right;
                font-size: 20px;
                margin-right: 10px;
                color: #b0b0b0;
            }
            &-explain {
                width: 100%;
                height: 400px;
                position: fixed;
                bottom: -400px;
                left: 0;
                transition: 1s;
                z-index: 10;
                background-color: #efefef;
                overflow-x: hidden;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                display: flex;
                flex-direction: column;
                &-header {
                    width: 100%;
                    height: 40px;
                    line-height: 40px;
                    border-bottom: 1px solid $mainColor;
                    background-color: #eee;
                    position: fixed;
                    h4 {
                        width: 90%;
                        font-size: 16px;
                        float: left;
                        letter-spacing: 3px;
                        padding-left: 45%;
                        box-sizing: border-box;
                    }
                    span {
                        width: 10%;
                        text-align: center;
                        font-size: 20px;
                        float: right;
                    }
                }
                &-main {
                    margin-top: 40px;
                    div {
                        margin-top: 5px;
                        width: 100%;
                        span {
                            color: #000;
                        }
                       p {
                           line-height: 20px;
                           padding-left: 20px;
                           padding-right: 5px;
                           color: #8b8888;
                        }
                    }
                }
            }
        }
        &-recommend {
            width: 100%;
            margin-top: 10px;
            background-color: #fff;
            p {
                height: 50px;
                line-height: 50px;
                width: 100%;
                text-align: center;
                font-size: 16px;
                color:$deepGrey;
                letter-spacing: 2px;
            }
            &-shop {
                width: 100%;
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
            }
        }
    }
    &-footer {
        width: 100%;
        height: 50px;
        border-top: 1px solid #dadada;
        display: flex;
        &-left {
            width: 40%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            text-align: center;
            li {
                position: relative;
                .check {
                    color: #c3bebe;
                }
                input {
                    display: none;
                    &:checked {
                        + .check {
                            color: #e00;
                        }
                    }
                }
                i {
                    font-size: 20px;
                    color: $deepGrey;
                    display: block;
                    margin-bottom: 5px;
                }
                span {
                    font-size: 5px;
                    color: #949494;
                }
                .countTabbar {
                    display: inline-block;
                    position: absolute;
                    top: -5px;
                    right: -12px;
                    background: #e30d0d;
                    color: #FFF;
                    font-size: 12px;
                    text-align: center;
                    border-radius: 50%;
                    padding:3px 5px;
                }
            }
        }
        &-right {
            width: 54%;
            height: 40px;
            line-height: 40px;
            font-size: 14px;
            letter-spacing:1px;
            color: #ffffff;
            display: flex;
            margin: 5px auto;
            &-cart {
                width: 50%;
                height: 100%;
                text-align: center;
                background-color: $mainColor;
                // border-radius: 20px;
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
            }
            &-buy {
                width: 50%;
                height: 100%;
                text-align: center;
                background-color: #e00;
                border-top-right-radius: 20px;
                border-bottom-right-radius: 20px;
            }
        }
    }
}
</style>
