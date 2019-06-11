<template>
    <ul class="xm-app-header-ul">
        <li>
            <i class="icon">&#xe634;</i>
            <span>分类</span>
        </li>
        <li class="xm-app-header-ul-li">
            <i class="icon">&#xe639;</i>
            <input type="text" placeholder="搜索朋友圈的好货">
        </li>
        <li>
            <i class="icon">&#xe639;</i>
            <span>消息</span>
        </li>
    </ul>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
.xm-app-header-ul {
    display: flex;
    justify-content: space-around;
    text-align: center;
    li {
        margin-top: 10px;
        color: #ffffff;
        i {
            display: block;
            font-size: 20px;
        }
        span {
            font-size: 10px;
        }
    }
    &-li {
        width: 300px;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        background-color: #ededed;
        i {
            float: left;
            color: #a7a7a7;
        }
        input {
            width: 250px;
            height: 25px;
            border: none;
            outline: none;
            color: #a7a7a7;
            background-color: #ededed;
            float: left;
            margin-left: 5px;
            margin-top: 2px;
        }
    }
}
</style>
