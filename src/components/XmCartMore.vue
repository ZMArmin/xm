<template>
    <div class="xm-cart-mores">
        <dl class="xm-cart-mores-info">
            <dt class="xm-cart-mores-info-pic"><img src="https://img.youpin.mi-img.com/800_pic/7dc0f40fb38f901978d34014d389e4c7.png@base@tag=imgScale&F=webp" alt=""></dt>
            <dd class="xm-cart-mores-info-discribe">最好的选中活动上世纪建成后将实施科技阿斯利康数据时</dd>
            <dd class="xm-cart-mores-info-title">金士顿基督教是基督教客户简单介绍</dd>
            <dd class="xm-cart-mores-info-price">￥126</dd>
        </dl>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .xm-cart-mores {
        width: 45%;
        margin-bottom: 35px;
        background: #fff;

        &-info {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-content: space-around;
            background: #fff;

           &-pic {
               width: 100%;
               height: 100%;
               background: #fafafa;

               img {
                   width: 100%;
                   height: 100%;               }
           }

           &-discribe {
                background: #f6f2f1;
                color: #9f8052;
                box-sizing: border-box;
                width: 100%;
                height: 32px;
                font-size: 12px;
                line-height: 32px;
                padding-left: 3px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
           }

           &-title {
                font-size: 13px;
                margin-top: 8px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                color: #333;
           }

           &-price {
               font-size: 13px;
               color:#e30d0d;
               margin-top: 10px;
           }

        }
    }
</style>
