<template>
  <div class="xm-login">
    <div class="xm-login-title">
        <div class="xm-login-title-back" @click="toback">
            <i class="icon">&#xe63e;</i>
        </div>
        <h3>欢迎登录小米有品</h3>
    </div>
    <div class="xm-login-main">
        <label>
            <input type="text" name="username" placeholder="输入手机号" v-model="username">
            <input type="password" name="password" placeholder="输入密码（至少8位字符）" v-model="password">
        </label>
        <button @click="onlogin">登录</button>
        <p>
            <span>忘记密码</span>
            <span>注册账号</span>
        </p>
    </div>
    <div class="xm-login-footer">
        <p>登录代表您已同意小米账号使用协议、隐私政策和小米有品用户协议</p>
    </div>
  </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
    export default {
        data () {
            return {
                username: '',
                password: ''
            }
        },
        computed: {
            ...mapState(['isLogin'])
        },
        methods: {
            ...mapActions(['loginAction']),
            onlogin () {
                let username = this.username
                let password = this.password
                // 调用之前验证用户名和密码 (用户名是否为空等  validate npm上找)

                this.loginAction({ username, password })
                // 请求的是自己输入的用户名密码，返回的是rap2模拟的用户信息
                // 登录成功后，全局的isLogin 就为 true
            },
            toback () {
                this.$router.back()
            }
        },
        watch: {
            // 监听islogin 的状态
            isLogin (newV, oldV) {
                if (newV === true) {
                    // islogin 为true
                    // from 是隐式传参，也就是从别的需要登录验证的页面跳转过来的，
                    // 但是如果是本来就要去登陆，那么就没有这个隐式传参，此时就回首页
                    const { from = '/' } = this.$route.params
                    this.$router.push(from)
                    console.log(from)
                }
            }
        }
    }
</script>

<style lang="scss">
$textColor: #666;
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
    .xm-login {
        position: relative;
        height: 100%;
        width: 100%;
        background: url('../../public/img/img.png') no-repeat;
        background-size: 100%;

        &-title {
            height: 20%;

            &-back {
                height: 20%;
                padding: 4% 3%;

                i {
                    color: #9b9b9b;
                    font-size: 15px;
                }
            }

            h3 {
                font-size: 24px;
                color: #333;
                text-align: center;
                padding: 15% 0;
            }
        }

        &-main {
            height: 30%;
            width: 70%;
            margin: 12% 15%;

            label {
                input {
                    width: 100%;
                    height: 25px;
                    margin-top: 25px;
                    border: none;
                    border-bottom: 1px solid #ddd;
                    font-size: 12px;
                    color: $textColor;
                    outline: none;
                }
            }
            button {
                width: 100%;
                height: 18%;
                background-color: #E4BB7E;
                border: none;
                border-radius: 60px;
                margin-top: 15%;
                color: #fff;
                font-size: 16px;
                outline: none;
            }

            p {
                width: 100%;
                margin-top: 8%;
                font-size: 12px;
                color: $textColor;
                padding:0 10px;
                box-sizing: border-box;

                span {
                    &:nth-child(2) {
                        float: right;
                    }
                }
            }
        }

        &-footer {
            margin: 0 6%;
            position: absolute;
            bottom: 5%;

             p {
                font-size: 12px;
                color: #9b9b9b;
             }
        }
    }
</style>
