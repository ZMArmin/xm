<template>
    <div class="xm">
        <XmMine></XmMine>
        <div class="xm-wrap">
            <p>专属推荐</p>
            <div class="xm-wrap-prolist">
                <XmCartMore
                    v-for="item in list"
                    :key="item.id"
                    :id="item.id"
                    :image="item.image"
                    :title="item.title"
                    :price="item.price"
                    :qunTitle="item.qunTitle"
                ></XmCartMore>
            </div>
        </div>
    </div>
</template>

<script>
    import XmMine from '@/components/XmMine'
    import XmCartMore from '@/components/XmCartMore'
    import * as ajax from '@/request'
    export default {
        data () {
            return {
                list: []
            }
        },
        components: {
            XmMine,
            XmCartMore
        },
        created () {
            ajax.gitCartMore().then(resp => {
                console.log(resp)
                this.list = resp.data.list
            })
        }
    }
</script>

<style lang="scss">
    .xm {
        width: 100%;
        height: 100%;
        // overflow-x: hidden;

        &-wrap {
            p {
                font-size: 15px;
                font-weight: 500;
                color: #222;
                height: 40px;
                line-height: 35px;
                padding-left: 12px;
            }
            &-prolist {
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
            }
        }
    }

</style>
