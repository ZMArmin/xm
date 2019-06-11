<template>
    <div class="xm-product">
        <div class="xm-product-header">
            <span>&lt;</span>
            <h3>有品推荐</h3>
            <i class="icon" v-html="'&#xe61e;'"></i>
        </div>
        <div class="xm-product-main">
            <ul class="xm-product-main-nav">
                <router-link
                    v-for="list in lists"
                    :key="list.id"
                    tag="li"
                    :to="`/product/${list.id}`"
                >{{list.name}}</router-link>
            </ul>
            <div class="xm-product-main-content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import * as ajax from '@/request'
    export default {
        data () {
            return {
                lists: []
            }
        },
        created () {
            // console.log(this.$route)
            ajax.getNav().then(resp => {
                // console.log(resp)
                let { list } = resp.data
                // 去掉今日推荐
                list = list.slice(1)
                this.lists = list
                // 第一次进来时默认跳转第0条shop
                // console.log(list)
                const { productId = list[0].id } = this.$route.params
                // console.log(productId)
                this.$router.push(`/product/${productId}`)
            })
        }
    }
</script>

<style lang="scss">
$grey: #eee;
$deepGrey: #383838;
$mainColor: #845f3f;
@font-face {
    font-family: 'iconfont';  /* project id 1231674 */
    src: url('//at.alicdn.com/t/font_1231674_uqt7el26mdl.eot');
    src: url('//at.alicdn.com/t/font_1231674_uqt7el26mdl.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1231674_uqt7el26mdl.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1231674_uqt7el26mdl.woff') format('woff'),
    url('//at.alicdn.com/t/font_1231674_uqt7el26mdl.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1231674_uqt7el26mdl.svg#iconfont') format('svg');
}
.icon {
    font-family: 'iconfont';
}
.xm-product {
    width: 100%;
    height: 100%;
    &-header {
        width: 100%;
        height: 50px;
        line-height: 50px;
        position: relative;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #fff;
        span {
            display: block;
            float: left;
            font-size: 20px;
            color: #919191;
            margin-left: 10px;
        }
        h3 {
            width: 100px;
            font-size: 16px;
            margin: 0 auto;
            text-align: center;
        }
        i{
            float: right;
            font-size: 20px;
            position: absolute;
            right: 10px;
            top: 50%;
            margin-top: -25px;
        }
    }
    &-main {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        &-nav {
            display: flex;
            justify-content: space-around;
            height: 30px;
            position: fixed;
            top: 50px;
            left: 0;
            background-color: #fff;
            // overflow-y: hidden;
            // border-bottom: 2px solid $grey;
            li {
                // overflow-y: hidden;
                width: 70px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                color: $deepGrey;
            }
            .router-link-exact-active,
            .router-link-active {
                border-bottom: 2px solid $mainColor;
            }
        }
        &-content {
            flex: 1;
            margin-top: 82px;
            background-color: #f4f4f4;
        }
    }
}
</style>
