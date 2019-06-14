<template>
    <div class="xm-person">
        <div class="xm-person-header">
            <div class="xm-person-header-title">
                个人资料
            </div>
            <div class="xm-person-header-back" @click="toback">
                <i class="icon">&#xe63e;</i>
            </div>
        </div>
        <div class="xm-person-main">
            <ul>
                <li>基础资料</li>
                <li>
                    <p>头像</p>
                    <img src="" alt="">
                    <i class="icon">&#xe604;</i>
                </li>
                <li>
                    <p>账号</p>
                    <span></span>
                </li>
                <li>
                    <p>姓名</p>
                    <span></span>
                    <i class="icon">&#xe604;</i>
                </li>
                <li>保密资料</li>
                <li>
                    <p>设置密码</p>
                    <span>未设置密码</span>
                    <i class="icon">&#xe604;</i>
                </li>
            </ul>
        </div>
         <router-link to="/mine" tag="p" class="log-off">
            <p @click="loginOut">退出登录</p>
         </router-link>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    export default {
        computed: {
            ...mapState(['userinfo']),
        },
        methods: {
            ...mapMutations(['loginOut']),
            toback () {
                this.$router.back()
            }
        }
    }
</script>

<style lang="scss">
@font-face {
    font-family: 'iconfont';  /* project id 1238598 */
    src: url('//at.alicdn.com/t/font_1238598_oxvky4mukqg.eot');
    src: url('//at.alicdn.com/t/font_1238598_oxvky4mukqg.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1238598_oxvky4mukqg.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1238598_oxvky4mukqg.woff') format('woff'),
    url('//at.alicdn.com/t/font_1238598_oxvky4mukqg.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1238598_oxvky4mukqg.svg#iconfont') format('svg');
}
    .icon {
        font-family: 'iconfont';
    }
    .xm-person {
        height: 100%;
        width: 100%;

        &-header {
            height: 8%;
            width: 100%;
            background-color: #ffffff;
            border-bottom: 1px solid #eee;
            position: fixed;
            z-index: 100;
            position: relative;

            &-title {
                text-align: center;
                font-size: 16px;
                color: #333;
                padding: 5% 0;
            }
            i {
                position: absolute;
                top: 40%;
                left: 3%;
                color: #666;
                font-size: 16px;
            }
        }

        &-main {
            width: 100%;
            height: 80%;

            ul {
                height: 100%;
                padding: 0 4%;
                display: flex;
                flex-direction: column;

                li {
                    height: 10%;
                    border-bottom: 1px solid #eee;
                    line-height: 75px;
                    color: #bbb;
                    padding-left: 5px;

                    &:nth-child(1),&:nth-child(5) {
                        border-bottom: 1px solid #ccc;
                    }
                    &:nth-child(6) {
                        display: flex;
                        align-items: center;
                        span {
                            padding-left: 55%;
                            color: #d00;
                        }
                        i {
                            padding-left: 2%;
                            height: 138%;
                        }
                    }
                    &:nth-child(2) {
                        i {
                            position: relative;
                            bottom: 68px;
                            left: 95%;
                        }
                    }
                    &:nth-child(4) {
                        i {
                            position: relative;
                            bottom: 66px;
                            left: 95%;
                        }
                    }

                    p {
                        width: 20%;
                        font-size: 15px;
                        color: #000;
                        font-weight: 500;
                        line-height: 65px;
                    }

                    .icon {
                        font-size: 14px;
                    }
                }

            }
        }
        .log-off {
            border: 1px solid #b9a99b;
            width: 80%;
            height: 6%;
            color: #845f3f;
            background: none;
            margin: 3% 10%;
            font-size: 15px;
            border-radius: 2px;
            text-align: center;
            padding: 3% 0;
            box-sizing: border-box;
        }
    }
</style>
