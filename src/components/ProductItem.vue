<template>
    <router-link tag="div" :to="{name: 'detail', query: { id }}" class="xm-productItem">
        <div>
            <img :src="image" alt="title">
        </div>
        <p class="xm-productItem-odds">{{couponValue}}</p>
        <p class="xm-productItem-title">{{title}}</p>
        <p class="xm-productItem-explain">{{title}}</p>
        <p class="xm-productItem-price">￥<span>{{price}}</span></p>
    </router-link>
</template>

<script>
    export default {
        props: {
            id: Number,
            price: Number,
            image: String,
            title: String,
            qunTitle: String,
            couponValue: String
        }
    }
</script>

<style lang="scss">
$grey: #eee;
$deepGrey: #383838;
$mainColor: #845f3f;
.xm-productItem {
    width: 46%;
    height: 280px;
    border-radius: 8px;
    background-color: #fff;
    overflow: hidden;
    float: left;
    margin-left: 10px;
    margin-top: 10px;
    img {
        display: block;
        width: 80%;
        height: 80%;
        margin: 15px auto;
    }
    &-odds {
        // width: 100%;
        height: 16px;
        line-height: 16px;
        font-size: 12px;
        text-align: left;
        color: #e00;
    }
    &-title {
        height: 24px;
        line-height: 24px;
        font-size: 14px;
        color: $deepGrey;
        margin-left: 5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    &-explain {
        height: 16px;
        line-height: 16px;
        font-size: 12px;
        color: #ababab;
        margin-bottom: 14px;
        margin-left: 5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    &-price {
        color:#962423;
        margin-left: 5px;
        span {
            font-size: 20px;
        }
    }
}
</style>
