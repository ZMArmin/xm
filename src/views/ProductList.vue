<template>
    <div
        class="xm-productList"
        v-infinite-scroll="onLoadMore"
        infinite-scroll-distance="10"
    >
        <ProductItem
            v-for="list in lists"
            :key="list.id"
            :id="list.id"
            :image="list.image"
            :title="list.title"
            :price="list.price"
            :couponValue="list.couponValue"
        ></ProductItem>
        <b
            class="xm-productList-loadmore"
            v-if="!isEnd"
            @click="onLoadMore"
        >加载更多...</b>
        <div class="xm-productList-nomore" v-else>
            <p>——底线在此，不能更低了——</p>
        </div>
    </div>
</template>

<script>
    import * as ajax from '@/request'
    import ProductItem from '@/components/ProductItem'
    export default {
        data () {
            return {
                id: '',
                isEnd: false,
                lists: [],
                nextIndex: 0
            }
        },
        // created () {
        //     // console.log(this.$route.params)
        //     this.id = this.$route.params.shopId
        //     ajax.getShopList(this.id).then(resp => {
        //         // console.log(resp)
        //         this.lists = resp.data.items.list
        //     })
        // },

        // 导航守卫
        beforeRouteEnter (to, from, next) {
            // this.id = to.params.productId
            next(vm => {
                vm.id = to.params.productId
                // vm.getList()
            })
        },

        beforeRouteUpdate (to, from, next) {
            this.id = to.params.productId
            this.nextIndex = 0
            this.lists = []
            this.getList()
            next()
        },
        methods: {
            getList () {
                ajax.getShopList(this.id, this.nextIndex).then(resp => {
                    // console.log(resp)
                    // this.lists = resp.data.items.list
                    this.lists = this.lists.concat(resp.data.items.list)
                    this.nextIndex = resp.data.items.nextIndex
                    this.isEnd = resp.data.items.isEnd
                })
            },
            onLoadMore () {
                this.getList()
            }
        },
        components: {
            ProductItem
        }
    }
</script>

<style lang="scss" scoped>
$grey: #eee;
$deepGrey: #383838;
$mainColor: #845f3f;
.xm-productList-loadmore {
    display: inline-block;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    // background-color: $mainColor;
    // border-radius: 5px;
    // margin: 0 auto;
    color: $mainColor;
}
.xm-productList-nomore {
        width: 100%;
        height: 150px;
        line-height: 150px;
        text-align: center;
        font-size: 14px;
        color: #ababab;
        margin-top: 20px;
        background-color: $grey;
}
</style>
