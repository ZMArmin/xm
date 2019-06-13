<template>
    <div>
        <div class="header">
            <ul class="logoUl">
                <li  class="logoToback" @click="toback">
                    <i class="icon">&#xe63e;</i>
                </li>
                <li class="logoLi">
                    <p class="logoLiTitle">消息中心</p>
                </li>
                <router-link tag="li" to="/message" class="logoMessage">
                    <p class="liMessage"></p>
                </router-link>
            </ul>
        </div>
        <ul class="navMessage">
            <li class="messageLi">
                <img src="../../public/img/car.png" alt="" class="messageImg">
                <p class="messageTitle">交易物流</p>
                <p class="messageText">当前没有消息</p>
            </li>
            <li class="messageLi">
                <img src="../../public/img/gift.png" alt="" class="messageImg">
                <p class="messageTitle">售后通知</p>
                <p class="messageText">当前没有消息</p>
            </li>
            <li class="messageLi">
                <img src="../../public/img/flowr.png" alt="" class="messageImg">
                <p class="messageTitle">优惠促销</p>
                <p class="messageText">当前没有消息</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        methods: {
            toback () {
                this.$router.back()
            }
        }
    }
</script>

<style lang="scss" scoped>
@font-face {
    font-family: 'iconfont';  /* project id 1237307 */
    src: url('//at.alicdn.com/t/font_1237307_xixmr887ds.eot');
    src: url('//at.alicdn.com/t/font_1237307_xixmr887ds.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1237307_xixmr887ds.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1237307_xixmr887ds.woff') format('woff'),
    url('//at.alicdn.com/t/font_1237307_xixmr887ds.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1237307_xixmr887ds.svg#iconfont') format('svg');
}
.icon {
    font-family: 'iconfont';
}
.header {
    width: 100%;
    height: 8%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    .logoUl {
        width: 100%;
        height: 8%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logoToback {
            width: 28px;
            height: 8%;
            .icon {
                display: block;
                color: #9b9b9b;
                font-size: 15px;
                margin-top: 19px;
                padding-left: 10px;
            }
        }
        .logoLi {
            width: 258px;
            height: 8%;
            margin-top: 25px;
            text-align: center;
            .logoLiTitle {
                font-size: 16px;
                height: 28px;
                line-height: 28px;
            }
        }
        .logoMessage {
            width: 28px;
            height: 8%;
            margin-right: 10px;
            .liMessage {
                width: 28px;
                height: 28px;
                line-height: 28px;
                font-size: 14px;
            }
        }
    }
}
.navMessage {
    width: 100%;
    height: 180px;
    margin-top: 17%;
    .messageLi {
        width: 95%;
        height: 60px;
        margin: 0 auto;
        margin-top: 10px;
        margin-left: 10px;
        border-bottom: 1px solid #eee;
        position: relative;
        .messageImg {
            width: 50px;
            height: 50px;
        }
        .messageTitle {
            font-size: 16px;
            line-height: 22px;
            position: absolute;
            top: 5px;
            left: 70px;
        }
        .messageText {
            font-size: 14px;
            line-height: 18px;
            color: rgb(173, 166, 166);
            position: absolute;
            top: 30px;
            left: 70px;
        }
    }
}
</style>
