<template>
    <div>
        <div class="header">
            <ul class="logoUl">
                <li  class="logoToback" @click="toback">
                    <i class="icon">&#xe63e;</i>
                </li>
                <li class="logoLi">
                    <img src="../../public/img/search.png" alt="">
                    <input type="text" placeholder="欢迎浏览有品网" @click="toSearch">
                </li>
                <router-link tag="li" to="/message" class="logoMessage">
                    <p class="liMessage">搜索</p>
                </router-link>
            </ul>
        </div>
        <div class="hotSearch">
            <p class="hotSearchTitle">热门搜索</p>
        </div>
        <ul class="randButton">
            <!-- <li class="buttonLi">空调</li>
            <li class="buttonLi">洗衣机</li>
            <li class="buttonLi">618</li>
            <li class="buttonLi">风扇</li>
            <li class="buttonLi">电动牙刷</li>
            <li class="buttonLi">锦鲤红包</li>
            <li class="buttonLi">洗衣机</li>
            <li class="buttonLi">加湿器</li>
            <li class="buttonLi">父亲节</li>
            <li class="buttonLi">618尖货盘点</li> -->
            <mt-badge type="primary">空调</mt-badge>
            <mt-badge type="error">洗衣机</mt-badge>
            <mt-badge type="success">618</mt-badge>
            <mt-badge type="warning">风扇</mt-badge>
            <mt-badge type="primary">电动牙刷</mt-badge>
            <mt-badge type="error">锦鲤红包</mt-badge>
            <mt-badge type="success">洗衣机</mt-badge>
            <mt-badge type="warning">加湿器</mt-badge>
            <mt-badge type="primary">父亲节</mt-badge>
            <mt-badge type="error">618尖货盘点</mt-badge>
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
.icon {
    font-family: 'iconfont';
}
.header {
    width: 100%;
    height: 30px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: #fff;
    .logoUl {
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logoToback {
            width: 28px;
            height: 28px;
            .icon {
                display: block;
                color: #9b9b9b;
                font-size: 15px;
                margin-top: 12px;
                padding-left: 10px;
            }
        }
        .logoLi {
            width: 258px;
            height: 28px;
            background-color: #eee;
            margin-top: 10px;
            position: relative;
            img {
                width: 16px;
                height: 16px;
                float: left;
                position: absolute;
                top: 6px;
                left: 0px;
            }
            input {
                width: 228px;
                height: 16px;
                position: absolute;
                top: 6px;
                left: 22px;
                border: none;
                background-color: #eee;
            }
        }
        .logoMessage {
            width: 28px;
            height: 28px;
            margin-right: 10px;
            margin-top: 10px;
            .liMessage {
                width: 28px;
                height: 28px;
                line-height: 28px;
                font-size: 14px;
                color: #9b9b9b;
            }
        }
    }
}
.hotSearch {
    width: 100%;
    height: 30px;
    margin-top: 40px;
    background-color: #eee;
    .hotSearchTitle {
        padding-top: 8px;
        padding-left: 8px;
        font-size: 12px;
        color: #cecece;
    }
}
.randButton {
    width: 100%;
    margin-top: 10px;
    .mint-badge {
        float: left;
        margin: 5px 10px;
        font-size: 14px;
        line-height: 18px;
        height: 22px;
        opacity: 0.7;
    }
}
</style>
