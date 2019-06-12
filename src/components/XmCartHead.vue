<template>
    <div class="xm-cart-head" v-headShow="{container, distance}">
        <div class="xm-cart-head-title">
            购物车
        </div>
        <div class="xm-cart-head-edit" @click.stop="toggleIsEdit">
            <span v-if="!isEdit"> 编辑</span>
            <span v-else>完成</span>
        </div>
    </div>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'
    export default {
        props: {
            distance: Number,
            container: String
        },
        directives: {
            headShow: {
                inserted (el, binding) {
                    document.querySelector(binding.value.container).addEventListener('scroll', (e) => {
                        if (e.target.scrollTop > binding.value.distance) {
                            el.style.opacity = '1'
                        } else {
                            el.style.opacity = '0'
                        }
                    })
                }
            }
        },
        computed: {
            ...mapState([
                'isEdit'
            ])
        },
        methods: {
            ...mapMutations([
                'toggleIsEdit'
            ])
        }
    }
</script>

<style lang="scss">
    .xm-cart-head {
        width: 100%;
        height: 8%;
        position: fixed;
        top: 0;
        opacity: 0;
        line-height: 45px;
        z-index: 2;
        transition:opacity 0.7s;

        &-title {
            width: 100%;
            color: #333;
            font-size: 14px;
            text-align: center;
            background: #fff;
            border-bottom: 1px solid #bfbfc0;
        }

        &-edit {
            position: absolute;
            color: #333;
            right: 20px;
            top:0;
        }
    }
</style>
