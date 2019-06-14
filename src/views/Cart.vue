<template>
    <div class="wrap">
        <XmUnLoginCart v-if="!isLogin"></XmUnLoginCart>
        <div class="xm-cart" v-else>
            <XmCartHead :distance="20" container=".xm-cart" v-show="!isCartEmpty"></XmCartHead>
            <XmCartEmpty v-if="isCartEmpty"></XmCartEmpty>
            <XmCartSome v-else></XmCartSome>
            <div class="xm-cart-more">
                <p class="xm-cart-more-title">为您推荐</p>
                <div class="xm-cart-more-wrap">
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
            <div class="xm-cart-total" v-if="totalCount !=0">
                <label class="xm-cart-total-check">
                    <input type="checkbox" @change="toggleAllIscheck" :checked="isAllCheck">
                    <span class="check"></span>
                    <span class="checkName">全选</span>
                </label>
                <p class="xm-cart-total-counter"><i v-if="!isEdit">合计：<span class="money">￥{{totalCheckedPrice | toFix2}}</span></i></p>
                <router-link tag="p" class="xm-cart-total-cal" v-if="!isEdit" to="/account">结算<span v-if="!isCartEmpty && totalCheckedCount !=0" class="tatalCount">({{totalCheckedCount}})</span></router-link>
                <p class="xm-cart-total-del" v-else @click="deleItem">删除<span v-if="!isCartEmpty && totalCheckedCount !=0" class="tatalCount">({{totalCheckedCount}})</span></p>
            </div>
        </div>
    </div>
</template>

<script>
    import XmCartMore from '@/components/XmCartMore'
    import XmCartEmpty from '@/components/XmCartEmpty'
    import XmCartSome from '@/components/XmCartSome'
    import XmUnLoginCart from '@/components/XmunLoginCart'
    import XmCartHead from '@/components/XmCartHead'
    import * as ajax from '@/request'
    import {
        mapGetters,
        mapState,
        mapMutations,
        mapActions
    } from 'vuex'
    export default {
        data () {
            return {
                list: []
            }
        },
        components: {
            XmCartMore,
            XmCartEmpty,
            XmCartSome,
            XmUnLoginCart,
            XmCartHead
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.getList()
            })
        },
        computed: {
            ...mapState([
                'cart',
                'allCheck',
                'isEdit'
            ]),
            ...mapGetters([
                'totalCount',
                'totalCheckedCount',
                'totalCheckedPrice',
                'isAllCheck',
                'isCartEmpty',
                'isLogin'
            ])
        },
        methods: {
            ...mapActions([
                'deleItem'
            ]),
            ...mapMutations([
                'toggleAllIscheck',
                'toggleIsEdit'
            ]),
            getList () {
                ajax.gitCartMore().then(resp => {
                    // console.log(resp)
                    this.list = resp.data.list
                })
            }
        }
    }
</script>

<style lang="scss">
    .wrap {
        height: 100%;
        width: 100%;
    }
    .xm-cart {
        width: 100%;
        height: 100%;
        overflow-x: auto;

        .xm-cart-more {
            background: #f3f3f3;
            padding-top: 10px;
            display: flex;
            flex-direction: column;

            &-title {
                width: 100%;
                height: 46px;
                background: #fff;
                line-height: 46px;
                text-align: center;
                font-size: 15px;
                color: #333;
            }

            .xm-cart-more-wrap {
                flex: 1;
                background: #fff;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
            }
        }
        .xm-cart-total {
            width: 100%;
            position: absolute;
            bottom: 53px;
            height: 48px;
            background: #fff;
            display: flex;
            line-height: 48px;

            &-check {
                margin-left: 12px;

                    input {
                    display: none;
                    position: relative;

                    &:checked {
                        + .check {
                            width: 18px;
                            height: 18px;
                            background: url(https://app.xiaomiyoupin.com/youpin/static/m/res/images/std_icon_checkbox_check.png) no-repeat center center;
                            background-size: 100%;
                            border:none;
                        }
                    }
                }
                .check {
                    display: inline-block;
                    width: 18px;
                    height: 18px;
                    box-sizing: border-box;
                    border: 1px solid #333;
                    border-radius: 50%;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    margin: auto;
                }

                .checkName {
                    display: inline-block;
                    font-size: 13px;
                    line-height: 48px;
                    margin-left: 25px;
                }
            }
            .xm-cart-total-cal,
            .xm-cart-total-del {
                    width: 96px;
                    height: 38px;
                    margin-right: 5px;
                    margin-top: 5px;
                    font-size: 15px;
                    background: #e30d0d;
                    color: #fff;
                    line-height: 38px;
                    text-align: center;
                    font-weight: 600;
                    border-radius: 20px;
                }
        }
        .xm-cart-total-counter {
            flex: 1;
            font-size: 13px;
            font-weight: bold;
            text-align: right;
            color: #000;
            line-height: 48px;
            margin-right: 12px;

            .money {
                font-weight: normal;
                font-size: 16px;
                color: #e30d0d;
            }
        }
        .xm-cart-total-cal {
            width: 96px;
            height: 38px;
            margin-top: 5px;
            font-size: 15px;
            background: #e30d0d;
            color: #fff;
            line-height: 38px;
            text-align: center;
            font-weight: 600;
            border-radius: 20px;
        }
    }
</style>
