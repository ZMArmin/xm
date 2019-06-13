<template>
    <div class="xm-product">
        <div class="xm-product-header">
            <span @click="onToBack">&lt;</span>
            <h3>有品推荐</h3>
            <i class="icon" v-html="'&#xe61e;'" @click="onToSearch"></i>
        </div>
        <div class="xm-product-main">
            <div class="xm-product-main-nav">
                <ul class="xm-product-main-nav-ul">
                    <router-link
                        v-for="list in lists"
                        :key="list.id"
                        tag="li"
                        :to="`/product/${list.id}`"
                    >{{list.name}}</router-link>
                </ul>
            </div>
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
                id: '',
                lists: [],
                name: ''
            }
        },
        methods: {
            onToSearch () {
                this.$router.push('/search')
            },
            onToBack () {
                this.$router.push('/sort')
            },
            getList () {
                ajax.getNav().then(resp => {
                    // console.log(resp)
                    let { list } = resp.data
                    // 去掉第一条数据
                    list = list.slice(1)
                    this.lists = list
                    // 第一次进来时默认跳转第0条shop
                    // console.log(list[0].id,111)
                    // const { productId = Number(this.$route.params.typeId) } = Number(this.$route.params.typeId)
                    // this.$router.push(`/product/${productId}`)
                    const { productId = list[0].id } = this.$route.params
                    this.$router.push(`/product/${productId}`)
                })
            }
        },
        beforeRouteEnter (to, from, next) {
            // console.log({ to, from })
            // let id = from.params.shopId
            next(vm => {
                vm.getList()
                // if (from.path.includes('sort')) {
                //     ajax.getShopList(id).then(resp => {
                //         // console.log(resp.data.category.name)
                //         vm.name = resp.data.category.name
                //     })
                // } else if (from.path.includes('detail')) {
                //     vm.name = '有品推荐'
                // }
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
    src: url('//at.alicdn.com/t/font_1231674_u1oehblncof.eot');
    src: url('//at.alicdn.com/t/font_1231674_u1oehblncof.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1231674_u1oehblncof.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1231674_u1oehblncof.woff') format('woff'),
    url('//at.alicdn.com/t/font_1231674_u1oehblncof.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1231674_u1oehblncof.svg#iconfont') format('svg');
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
            width: 100%;
            overflow: auto;
            position: fixed;
            top: 50px;
            left: 0;
            &-ul {
                width: 1190px;
                height: 32px;
                background-color: #fff;
                overflow: auto;
                li {
                    float: left;
                    margin: 0 10px;
                    padding: 0 5px;
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
        }
        &-content {
            flex: 1;
            margin-top: 82px;
            background-color: #f4f4f4;
        }
    }
}
</style>
