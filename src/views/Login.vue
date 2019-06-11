<template>
  <div class="xm-login">
    <div class="xm-login-title">
        <div class="xm-login-title-back"><i></i></div>
        <h3>欢迎登录小米有品</h3>
    </div>
    <div class="xm-login-main">
        <label for="username">
            <input type="text" name="username" placeholder="输入手机号">
            <input type="password" name="password" placeholder="输入密码（至少8位字符）">
        </label>
        <button>登录</button>
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
    export default {

    }
</script>

<style lang="scss">
    .xm-login {
        position: relative;
        height: 100%;
        width: 100%;
        background: url('../../public/img/img.png') no-repeat;
        background-size: 100%;

        &-title {
            height: 20%;

            h3 {
                font-size: 24px;
                color: #333;
                text-align: center;
                padding: 30% 0;
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
            }

            p {
                width: 100%;
                margin-top: 8%;
                font-size: 12px;
                color: #666;
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
