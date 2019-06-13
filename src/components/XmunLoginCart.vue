<template>
    <div class="unLoginCart">
        <div class="unLoginCart-head">
            <div class="header-title">
                购物车
            </div>
        </div>
        <div class="unLoginCart-main">
            <div class="unLoginCart-main-info">
                <div class="unLoginCart-main-info-pic">
                    <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/cart_empty.png" alt="">
                </div>
                <div class="unLoginCart-main-info-foruser">要登录后才能看到商品哟</div>
                <div class="unLoginCart-main-info-goLogin" @click="goLogin">
                    立即登录
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            goLogin () {
                this.$router.push('/login')
            }
        }
    }
</script>

<style lang="scss">
    .unLoginCart {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;

        &-head{
            width: 100%;
            height: 45px;
            border-bottom: 1px solid #bfbfc0;
            box-sizing: border-box;
            position: relative;
            .header-title{
                height: 45px;
                width: 100%;
                font-size: 16px;
                color:#333;
                text-align: center;
                line-height: 45px;
            }
        }

        &-main {
            width: 100%;
            flex: 1;

            &-info {
                background: #fafafc;
                width: 100%;
                height: 100%;
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                &-pic {
                    width: 102px;
                    height: 88px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }

                &-foruser {
                    margin-top: 32px;
                    font-size: 12px;
                    color: #999;
                }

                &-goLogin {
                    margin-top: 12px;
                    padding:0 20px 0 20px;
                    border:1px solid #aaa;
                    color:#777;
                    font-size: 13px;
                    text-align: center;
                    line-height: 26px;
                }
            }
        }
    }
</style>
