<template>
    <div class="xm-cart-empty">
        <div class="xm-cart-empty-head">
            购物车
        </div>
        <div class="xm-cart-empty-info">
            <div class="xm-cart-empty-info-pic">
                <img src="https://m.xiaomiyoupin.com/youpin/static/m/res/images/cart_grey.png" alt="">
            </div>
            <div class="xm-cart-empty-info-main">
                <div class="xm-cart-empty-info-main-title">
                    购物车还没有商品哟……
                </div>
                <div class="xm-cart-empty-info-main-button" @click="goShopping">
                    去逛逛
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            goShopping () {
                this.$router.push('/home')
            }
        }
    }
</script>

<style lang="scss">
    .xm-cart-empty {
        width: 100%;

        &-head {
            width: 100%;
            height: 45px;
            line-height: 45px;
            color: #333;
            font-size: 14px;
            text-align: center;
            background: #fff;
            border-bottom: 1px solid #bfbfc0;
            position: fixed;
            top: 0;
        }

        &-info {
            width: 100%;
            height: 148px;
            margin-top: 46px;
            background: #fafafa;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            padding: 0 20px;
            justify-content: center;

            &-pic {
                width: 91px;
                height: 85px;

                img {
                    height: 100%;
                    width: 100%;
                }
            }

            &-main {
                display: flex;
                height: 85px;
                justify-content: space-around;
                flex-direction: column;
                margin-left: 25px;

                &-title {
                    font-size: 14px;
                    line-height: 24px;
                    color: #988378;
                }

                &-button {
                    width: 77px;
                    height: 26px;
                    color: #fff;
                    background: #e27368;
                    text-align: center;
                    line-height: 26px;
                    font-size: 13px;
                }
            }
        }
    }
</style>
