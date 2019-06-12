<template>
    <div>
        <div class="header">
            <ul class="logoUl">
                <li  class="logoImg">
                    <img src="../../public/img/comeBack.png" alt="">
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
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
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
        .logoImg {
            width: 64px;
            height: 28px;
            img {
                width: 20px;
                height: 20px;
                margin-top: 5px;
                padding-left: 10px;
            }
        }
        .logoLi {
            width: 258px;
            height: 28px;
            background-color: #ece8e8;
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
                background-color: #ece8e8;
            }
        }
        .logoMessage {
            width: 28px;
            height: 28px;
            .liMessage {
                width: 28px;
                height: 28px;
                line-height: 28px;
                font-size: 14px;
            }
        }
    }
}
</style>
