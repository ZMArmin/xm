<template>
    <div class="xm-cart-some">
         <div class="xm-cart-head">
            <div class="xm-cart-head-title">
                购物车
            </div>
            <div class="xm-cart-head-edit">
                编辑
            </div>
        </div>
        <div class="xm-cart-main">
            <div class="xm-cart-back">
                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/cart_top_bg_image.png">
            </div>
            <div class="xm-cart-title">
                购物车
            </div>
        </div>
        <div class="xm-cart-edit">
                编辑
        </div>
        <div class="xm-cart-item">
            <div class="xm-cart-item-title">
                <label>
                    <input type="checkbox">
                    <span class="check"></span>
                    <span class="name">有品精选</span>
                </label>
            </div>
            <div class="xm-cart-item-products">
                <XmCartItem
                    v-for="item in cart"
                    :key="item.id"
                    :title="item.title"
                    :price="item.price"
                    :id="item.id"
                    :image="item.image"
                    :isCheck="item.isCheck"
                    :count="item.count"
                ></XmCartItem>
            </div>
        </div>
    </div>
</template>

<script>
    import XmCartItem from '@/components/XmCartItem'
    import {
        mapState
    } from 'vuex'
    export default {
        components: {
            XmCartItem
        },
        computed: {
            ...mapState(['cart'])
        },
        created () {
            console.log(this.cart)
        }
    }
</script>

<style lang="scss">
    .xm-cart-head {
        width: 100%;
        height: 50px;
        position: fixed;
        top: 0;
        line-height: 50px;
        z-index: 2;

        &-title {
            width: 100%;
            color: #333;
            font-size: 16px;
            text-align: center;
            background: #fff;
            border-bottom: 1px solid #eee;
        }

        &-edit {
            position: absolute;
            color: #333;
            right: 20px;
            top:0;
        }
    }

    .xm-cart-main {
        width: 100%;
        position: relative;
        background: #f3f3f3;
        z-index: -1;

        .xm-cart-back {
            height: 105px;

            img {
                width: 100%;
                height: 100%;
            }

        }
        .xm-cart-title {
            width: 100%;
            position: absolute;
            font-size: 16px;
            top: 28px;
            text-align: center;
            color: #fff;
        }
    }
        .xm-cart-edit {
            position: absolute;
            z-index: 1;
            top:28px;
            right: 8px;
            color: #fff;
            font-size: 14px;
        }
        .xm-cart-item {
            width: 100%;
            box-sizing: border-box;
            display: flex;
            margin-top:-50px;
            flex-direction: column;
            .xm-cart-item-title {
                z-index: 1;
                margin:0 10px;
                background: #fff;
                padding-left: 12px;
                padding-top: 3px;
                height: 42px;
                position: relative;
                border-radius: 5px;

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
                    top:0;
                    bottom: 0;
                    margin: auto;
                }
                .name {
                    color: #333333;
                    font-size: 14px;
                    line-height: 42px;
                    padding-left: 26px;
                }
            }

            .xm-cart-item-products {
                width: 100%;
                background: #f3f3f3;
                box-sizing: border-box;
            }
        }
</style>
