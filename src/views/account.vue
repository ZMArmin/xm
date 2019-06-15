<template>
    <div class="xm-account">
        <div class="xm-account-head">
            <div class="goBack" @click="goBack">
                <i class="icon">&#xe63e;</i>
            </div>
            <p class="xm-account-head-title">确认信息</p>
        </div>
        <div class="xm-account-main">
            <div class="xm-account-main-address">
                <div class="xm-account-main-address-info">
                    没有地址信息，请点击添加地址
                    <i class="icon">&#xe63f;</i>
                </div>
                <div class="xm-account-main-address-border">
                    <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/addressline.png">
                </div>
            </div>
            <mt-radio
                align="right"
                :options="['支付宝', '微信', '小米钱包']">
            </mt-radio>
            <div class="xm-account-main-product">
                <h5>有品配送</h5>
                <div
                    class="xm-account-main-product-item"
                    v-for="item in cart"
                    :key="item.id"
                >
                    <div class="img"><img :src="item.image"></div>
                    <div class="info">
                        <h6>{{item.title}}</h6>
                        <p><span>{{item.price}}</span><i>X{{item.count}}</i></p>
                    </div>
                </div>
            </div>
            <div class="xm-account-main-message">
                <label>
                    买家留言
                    <input type="text" placeholder="填写内容需与买家协商并确认，45字以内">
                </label>
            </div>
            <ul class="xm-account-main-buymessage">
                <li>
                    优惠券/优惠码
                </li>
                <li>
                    配送方式
                    <span>快递配送</span>
                </li>
                <li>
                    发票类型
                    <span>不开发票</span>
                </li>
                <li>
                    商品总价
                    <span>￥{{totalCheckedPrice | toFix2}}</span>
                </li>
                <li>
                    运费
                    <i class="icon cart">&#xe724;</i>
                    <span>免运费</span>
                </li>
            </ul>
        </div>
        <div class="xm-account-footer">
            <p class="total">
                合计：
                <span>￥{{totalCheckedPrice | toFix2}}</span>
            </p>
            <span href="javascript:;" class="button">结算</span>
        </div>
    </div>
</template>

<script>
    import {
        mapState,
        mapGetters
    } from 'vuex'
    export default {
        computed: {
            ...mapState([
                'cart'
            ]),
            ...mapGetters([
                'totalCheckedPrice'
            ])
        },
        methods: {
            goBack () {
                this.$router.back()
            }
        }
    }
</script>

<style lang="scss">
    @font-face {
        font-family: 'iconfont';  /* project id 1237307 */
        src: url('//at.alicdn.com/t/font_1237307_xixmr887ds.eot');
        src: url('//at.alicdn.com/t/font_1237307_xixmr887ds.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_1237307_xixmr887ds.woff2') format('woff2'),
        url('//at.alicdn.com/t/font_1237307_xixmr887ds.woff') format('woff'),
        url('//at.alicdn.com/t/font_1237307_xixmr887ds.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_1237307_xixmr887ds.svg#iconfont') format('svg');
    }
    @font-face {
        font-family: 'iconfont';  /* project id 1242349 */
        src: url('//at.alicdn.com/t/font_1242349_e2gf8o1bps7.eot');
        src: url('//at.alicdn.com/t/font_1242349_e2gf8o1bps7.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_1242349_e2gf8o1bps7.woff2') format('woff2'),
        url('//at.alicdn.com/t/font_1242349_e2gf8o1bps7.woff') format('woff'),
        url('//at.alicdn.com/t/font_1242349_e2gf8o1bps7.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_1242349_e2gf8o1bps7.svg#iconfont') format('svg');
    }
    .xm-account {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        &-head {
            width: 100%;
            height: 8%;
            border-bottom: 2px solid #bfbfc0;
            position: relative;

            .goBack{
                position: absolute;
                width: 20px;
                height: 20px;
                top: 19px;
                left: 20px;
                font-size: 16px;
                z-index: 1;
                .icon {
                    font-family: 'iconfont';
                }
            }

            &-title {
                width: 100%;
                height: 100%;
                line-height: 51px;
                font-size: 16px;
                color: #333;
                text-align: center;
            }
        }

        &-main {
            width: 100%;
            flex: 1;
            display: flex;
            flex-direction: column;
            background: #f8f8f8;
            overflow-x: hidden;

            &-address {
                width: 100%;
                height: 10%;

                &-info {
                    padding: 10px 20px;
                    color:#e30d0d;
                    line-height: 16px;
                    font-size: 12px;
                    background: #fff;
                    box-sizing: border-box;

                    i {
                        float: right;
                        font-size: 16px;
                    }
                }

                &-border {
                    width: 100%;
                    padding: 0 1px;
                    background: #fff;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .mint-radiolist {
                margin-top: 5px;
                .mint-radio-label {
                    font-size: 13px;
                    color: #333;
                }
            }
            &-product {
                flex: 1;
                box-sizing: border-box;

                h5 {
                    width: 100%;
                    padding: 15px 20px;
                    font-size: 14px;
                    color: #000;
                    background: #fff;
                    margin-top: 10px;
                    border-bottom: 1px solid #e2e2e2;
                }

                &-item {
                    display: flex;
                    width: 100%;
                    box-sizing: border-box;
                    padding: 10px 20px;
                    background: #fff;
                    border-bottom: 1px solid #e2e2e2;
                    img {
                        width: 60px;
                        height: 60px;
                    }
                    .info {
                        margin-left: 20px;
                        padding: 5px 0;

                        h6 {
                            font-weight: normal;
                            color: #000;
                            line-height: 18px;
                            font-size: 13px;
                        }
                        p {
                            margin-top: 10px;
                            span {
                                color: #e30d0d;
                                font-size: 14px;
                            }
                            i {
                              font-size: 12px;
                              float: right;
                              margin-right: 20px;
                            }
                        }
                    }

                }
            }

            &-message {
                width: 100%;
                padding:20px 20px;
                background: #fff;
                border-top: 1px solid #e2e2e2;
                font-size: 14px;
                margin-bottom: 2px;

                input {
                    border: none;
                    padding-left: 10px;
                    width: 70%;
                }
            }

            &-buymessage {
                width: 100%;
                box-sizing: border-box;

                li {
                    padding: 10px 20px;
                    font-size: 12px;
                    color: #333;
                    background: #fff;
                    border-bottom: 1px solid #e2e2e2;

                    span {
                        float: right;
                        margin-right: 20px;
                        font-size: 12px;
                        transform: scale(0.9);
                        color: #ccc;
                    }
                    &:nth-child(4) {
                        margin-top: 5px;
                    }

                    &:nth-child(4),
                    &:nth-child(5) {
                        span {
                            color: #e30d0d;
                        }
                    }
                }
            }
        }

        &-footer {
            width: 100%;
            height: 8%;
            border-top: 2px solid #bfbfc0;
            display: flex;
            line-height: 52px;

            .total {
                font-size: 13px;
                color: #333;
                height: 100%;
                flex: 1;
                padding-left: 20px;
                box-sizing: border-box;

                span {
                    color:#e30d0d;
                    font-size: 16px;
                }
            }

            .button {
                height: 100%;
                width: 25%;
                line-height: 52px;
                background: #e30d0d;
                color: #fff;
                text-align: center;
            }
        }
    }
</style>
