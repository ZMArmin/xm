<template>
    <div class="xm-shopItem">
        <div class="xm-shopItem-img">
            <img :src="image" alt="title">
        </div>
        <p class="xm-shopItem-title">{{title}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            id: Number,
            image: String,
            title: String
        }
    }
</script>

<style lang="scss">
$grey: #eee;
$deepGrey: #383838;
$mainColor: #845f3f;
.xm-shopItem {
    width: 33%;
    box-sizing: border-box;
    display: inline-block;
    padding: 10px;
    &-title {
        font-size: 12px;
        line-height: 25px;
        color: $deepGrey;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    img {
        width: 100%;
    }
}
</style>
