<template>
    <div class="xm-shopList">
        <div>
            <a href="javascript:;" class="xm-shopList-banner">
                <img src="https://img.youpin.mi-img.com/miio_album_pics/4baf5aeccf55feb0325db15070984e29.jpg@base@tag=imgScale&F=webp" alt="">
            </a>
        </div>
        <!-- <router-link :to="{name:'product', params: { typeId: id }}" class="xm-shopList-shop" tag="div"> -->
        <router-link to="/product" class="xm-shopList-shop" tag="div">
            <XmSortItem
                v-for="list in lists"
                :key="list.id"
                :id="list.id"
                :image="list.image"
                :title="list.title"
            ></XmSortItem>
        </router-link>
    </div>
</template>

<script>
    import * as ajax from '@/request'
    import XmSortItem from '@/components/XmSortItem'
    export default {
        data () {
            return {
                id: 2,
                lists: []
            }
        },
        // 导航守卫
        beforeRouteEnter (to, from, next) {
            let id = to.params.shopId
            next(vm => {
                vm.getList(id)
            })
        },

        beforeRouteUpdate (to, from, next) {
            let id = to.params.shopId
            this.id = id
            this.getList(id)
            next()
        },
        methods: {
            getList (id) {
                ajax.getShopList(id).then(resp => {
                    // console.log(resp)
                    this.lists = resp.data.items.list
                })
            }
        },
        components: {
            XmSortItem
        }
    }
</script>

<style lang="scss">
.xm-shopList {
    width: 100%;
    &-banner {
        display: block;
        width: 94%;
        height: 130px;
        margin: 10px auto;
        img {
            width: 100%;
            height: 100%;
        }
    }
}

</style>
