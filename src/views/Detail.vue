<template>
    <div class="xm-detail">
        <div class="xm-detail-header">
            <span  @click="onToBack">&lt;</span>
            <ul class="xm-detail-header-nav">
                <li>商品</li>
                <li>评价</li>
                <li>详情</li>
                <li>推荐</li>
            </ul>
            <div class="xm-detail-header-icon">
                <i class="icon" v-html="'&#xe6fb;'"></i>
                <i class="icon" v-html="'&#xe879;'"></i>
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
                <div class="xm-detail-main-price-share">
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
                <i class="icon" v-html="'&#xe619;'"></i>
                <span>新人领180元礼包</span>
                <b>&gt;</b>
            </p>
            <p class="xm-detail-main-selected">
                <i>已选</i>
                <span>请选择颜色 款式 尺码 </span>
                <b>&gt;</b>
            </p>
            <p class="xm-detail-main-send">
                <i>送至</i>
                <span>北京市 海淀区 </span>
                <b>&gt;</b>
            </p>
            <p class="xm-detail-main-service">
                <i class="xm-detail-main-service-first">服务</i>
                <i class="icon" v-html="'&#xe604;'"></i>
                <span>满99包邮</span>
                <i class="icon" v-html="'&#xe604;'"></i>
                <span>有品三方</span>
                <i class="icon" v-html="'&#xe604;'"></i>
                <span>7天无理由</span>
                <b>&gt;</b>
            </p>
        </div>
        <div class="xm-detail-footer">
            <ul class="xm-detail-footer-left">
                <li>
                    <i class="icon" v-html="'&#xe629;'"></i>
                    <span>客服</span>
                </li>
                <li>
                    <i class="icon" v-html="'&#xe61f;'"></i>
                    <span>收藏</span>
                </li>
                <router-link to="/cart" tag="li">
                    <i class="icon" v-html="'&#xe64c;'"></i>
                    <span>购物车</span>
                    <b class="countTabbar">{{totalCount}}</b>
                </router-link>
            </ul>
            <div class="xm-detail-footer-right">
                <p class="xm-detail-footer-right-cart" @click="onAddCart({...detail})">加入购物车</p>
                <p class="xm-detail-footer-right-buy">立即购买</p>
            </div>
        </div>
    </div>
</template>

<script>
    import * as ajax from '@/request'
    import {
        mapMutations,
        mapGetters
    } from 'vuex'
    export default {
        data () {
            return {
                id: '',
                detail: []
            }
        },
        created () {
            this.id = this.$route.query.id
            ajax.getDetail(this.id).then(resp => {
                this.detail = resp.data.detail
                console.log(this.detail)
            })
        },
        methods: {
            onToBack () {
                this.$router.back()
            },
            ...mapMutations(['onAddCart'])
        },
        computed: {
            ...mapGetters(['totalCount'])
        }
    }
</script>

<style lang="scss">
$grey: #eee;
$deepGrey: #383838;
$mainColor: #845f3f;
@font-face {
    font-family: 'iconfont';  /* project id 1231674 */
    src: url('//at.alicdn.com/t/font_1231674_ftrcnereula.eot');
    src: url('//at.alicdn.com/t/font_1231674_ftrcnereula.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1231674_ftrcnereula.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1231674_ftrcnereula.woff') format('woff'),
    url('//at.alicdn.com/t/font_1231674_ftrcnereula.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1231674_ftrcnereula.svg#iconfont') format('svg');
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
        span {
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
        }
        &-send {
            height: 50px;
            line-height: 50px;
            background-color: #fff;
            margin-top: 3px;
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
                    right: -8px;
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
