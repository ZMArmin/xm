<template>
    <div class="xm-cart-mores">
        <router-link tag="dl" :to="{name: 'detail', query: { id }}" class="xm-cart-mores-info">
            <dt class="xm-cart-mores-info-pic"><img :src="image" alt=""></dt>
            <dd class="xm-cart-mores-info-discribe">{{qunTitle}}</dd>
            <dd class="xm-cart-mores-info-title">{{title}}</dd>
            <dd class="xm-cart-mores-info-price">￥{{price}}</dd>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: {
            id: Number,
            price: Number,
            image: String,
            title: String,
            qunTitle: String
        }
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
                   height: 100%;
                }
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
