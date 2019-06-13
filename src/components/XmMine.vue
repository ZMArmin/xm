<template>
    <div class="xm-mine">
        <div class="xm-mine-header">
            <!-- <img src="../../public/img/cart_top_bg_image.png" alt="bg"> -->
            <div class="xm-mine-header-icon">
                <i class="icon">&#xe618;</i>
                <i class="icon">&#xe616;</i>
            </div>
            <!-- 已登录，跳转个人信息 -->
            <router-link class="xm-mine-header-person" tag="div" to="/" v-show="isLogin">
                <div class="xm-mine-header-person-head"><img :src="user.avatar" alt=""></div>
                <span v-show="isLogin" v-text="user.displayName"></span>
                <!-- <a href="javascript">去设置密码</a> -->
                <i class="icon person-icon">&#xe604;</i>
            </router-link>
            <!-- 未登录，跳转登录页 -->
            <router-link class="xm-mine-header-person" tag="div" to="/login" v-show="!isLogin">
                <div class="xm-mine-header-person-head"><img :src="user.avatar" alt=""></div>
                <span v-show="!isLogin">未登录</span>
                <i class="icon person-icon">&#xe604;</i>
            </router-link>
        </div>
        <div class="xm-mine-order">
            <div class="xm-mine-order-title">
                <span>我的订单</span>
                <a href="javascript">全部订单 <i class="icon title-icon">&#xe604;</i></a>
            </div>
            <ul class="xm-mine-order-item">
                <!-- 转换为路由写法 router-link -->
                <li>
                    <i class="icon item-icon">&#xe650;</i>
                    <span>待付款</span>
                </li>
                <li>
                    <i class="icon item-icon">&#xe623;</i>
                    <span>待收货</span>
                </li><li>
                    <i class="icon item-icon">&#xe615;</i>
                    <span>待评价</span>
                </li><li>
                    <i class="icon item-icon">&#xe6b2;</i>
                    <span>退款/售后</span>
                </li>
            </ul>
        </div>
        <div class="xm-mine-main">
            <div class="xm-mine-main-bg"></div>
            <div class="xm-mine-main-list">
                <ul>
                    <li>
                        <i class="icon list-icon">&#xe600;</i>
                        <span>拼团</span>
                    </li>
                    <li>
                        <i class="icon list-icon">&#xe6c9;</i>
                        <span>收藏</span>
                    </li>
                    <li>
                        <i class="icon list-icon">&#xe602;</i>
                        <span>优惠券</span>
                    </li>
                    <li>
                        <i class="icon list-icon">&#xe633;</i>
                        <span>新人邀请</span>
                    </li>
                    <li>
                        <i class="icon list-icon">&#xe63c;</i>
                        <span>我的资产</span>
                    </li>
                    <li>
                        <i class="icon list-icon">&#xe622;</i>
                        <span>地址管理</span>
                    </li>
                    <li>
                        <i class="icon list-icon">&#xe601;</i>
                        <span>帮助中心</span>
                    </li>
                    <li>
                        <i class="icon list-icon">&#xe6bb;</i>
                        <span>协议规则</span>
                    </li>
                    <li>
                        <i class="icon list-icon">&#xe637;</i>
                        <span>资质证照</span>
                    </li>
                    <li>
                        <i class="icon list-icon">&#xe74a;</i>
                        <span>小米贷款</span>
                    </li>
                    <li>
                        <i class="icon list-icon">&#xe64f;</i>
                        <span>小米钱包</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        computed: {
            ...mapGetters(['isLogin', 'user'])
        }
    }
</script>

<style lang="scss" scoped>
$backColor: #fff;
$headerColor: #ce973d;
$textColor:#333;
$mainColor: #845f3f;
@font-face {
  font-family: 'iconfont';  /* project id 1234334 */
  src: url('//at.alicdn.com/t/font_1234334_ad6l27di25j.eot');
  src: url('//at.alicdn.com/t/font_1234334_ad6l27di25j.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1234334_ad6l27di25j.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1234334_ad6l27di25j.woff') format('woff'),
  url('//at.alicdn.com/t/font_1234334_ad6l27di25j.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1234334_ad6l27di25j.svg#iconfont') format('svg');
}
    .icon {
        font-family: 'iconfont';
    }

    .xm-mine {
        height: 100%;
        width: 100%;
        background-color: $backColor;

        &-header {
            height: 24%;
            width: 100%;
            background: url('../../public/img/cart_top_bg_image.png') no-repeat;
            background-size: 100% 120%;

            img {
                height: 100%;
                width: 100%;
            }

            &-icon {
                padding-top: 5px;
                height: 30%;

                .icon {
                    font-size: 22px;
                    padding: 12px 12px;
                    float: right;
                    color: #ffffee;
                }
            }

            &-person {
                height: 70%;
                padding: 0 12px;
                display: flex;
                width: 94%;

                &-head {
                    height: 50px;
                    img {
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        background: url('../../public/img/icon_default_head_portrait.png') no-repeat center;
                        background-size: 520%;
                        background-color: rgba(255, 255, 255, 0.5);
                        border: none;
                    }
                }

                span {
                    flex: 1;
                    display: inline-block;
                    font-size: 16px;
                    color: #fff;
                    height: 25px;
                    padding: 16px 12px;
                }

                // a {
                //     text-decoration: none;
                // }
                .person-icon {
                    font-size: 14px;
                    padding: 18px 2px;
                    color: #ffffee;
                }
            }
        }

        &-order {
            height: 18%;
            width: 94%;
            border-radius: 10px;
            background-color: #fff;
            margin: -24px auto;
            box-shadow: 0 0px 10px -2px rgb(204, 204, 204);

            &-title {
                height: 34%;

                span {
                    font-size: 16px;
                    color: $textColor;
                    font-weight: 500;
                    line-height: 42px;
                    padding-left: 12px;
                }

                a {
                    text-decoration: none;
                    color: #ccc;
                    float: right;
                    padding: 15px 10px;
                }
            }

            &-item {
                height: 66%;
                width: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;

                li {
                    font-size: 12px;
                    color: $textColor;

                    .item-icon {
                        display: block;
                        text-align: center;
                        font-size: 24px;
                        color: #fd9f6b;
                        padding-bottom: 12px;
                    }
                }
            }
        }
        &-main {
            width: 100%;
            height: 60%;
            margin-top: 30px;

            &-bg {
                height: 24%;
                background: url('../../public/img/mine-01.jpg') no-repeat 0px -10px;
                background-size: 100%;
            }

            &-list {
                height: 77%;
                background-color: #f4f4f4;

                ul {
                    height: 98%;
                    background-color: $backColor;
                    display: flex;
                    flex-wrap: wrap;

                    li {
                        width: 25%;
                        text-align: center;
                        padding: 15px 0;
                        &:nth-child(1),
                        &:nth-child(2),
                        &:nth-child(3),
                        &:nth-child(4) {
                            border-bottom: 1px solid #eee;
                        }
                        .list-icon {
                            display: block;
                            text-align: center;
                            font-size: 24px;
                            color: $mainColor;
                            padding: 8px 0;
                        }

                        span {
                            color: $textColor;
                        }
                    }
                }
            }
        }
    }
</style>
