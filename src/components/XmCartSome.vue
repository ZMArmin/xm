<template>
    <div class="xm-cart-some">
        <div class="xm-cart-main">
            <div class="xm-cart-back">
                <img src="https://app.xiaomiyoupin.com/youpin/static/m/res/images/cart_top_bg_image.png">
            </div>
            <div class="xm-cart-title">
                购物车
            </div>
        </div>
        <div class="goBack" @click="goBack">
                <i class="icon">&#xe63e;</i>
        </div>
        <div class="xm-cart-edit" @click.stop="toggleIsEdit">
                <span v-if="!isEdit"> 编辑</span>
                <span v-else>完成</span>
        </div>
        <div class="xm-cart-item">
            <div class="xm-cart-item-title">
                <label>
                    <input type="checkbox" @change="toggleAllIscheck" :checked="isAllCheck">
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
        mapState,
        mapMutations,
        mapGetters
    } from 'vuex'
    export default {
        components: {
            XmCartItem
        },
        computed: {
            ...mapState([
                'cart',
                'allCheck',
                'isEdit'
            ]),
            ...mapGetters([
                'isAllCheck'
            ])
        },
        methods: {
            ...mapMutations([
                'toggleAllIscheck',
                'toggleIsEdit'
            ]),
            goBack () {
                this.$router.back()
            }
        }
    }
</script>

<style lang="scss">
    @font-face {
        font-family: 'iconfont';  /* project id 1237307 */
        src: url('//at.alicdn.com/t/font_1237307_xixmr887ds.eot');
        src: url('//at.alicdn.com/t/font_1237307_xixmr887ds.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_1237307_xixmr887ds.woff2') format('woff2'),
        url('//at.alicdn.com/t/font_1237307_xixmr887ds.woff') format('woff'),
        url('//at.alicdn.com/t/font_1237307_xixmr887ds.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_1237307_xixmr887ds.svg#iconfont') format('svg');
    }

    .goBack{
        position: absolute;
        width: 20px;
        height: 20px;
        top: 19px;
        left: 20px;
        font-size: 16px;
        z-index: 2;

        .icon {
            font-family: 'iconfont';
        }
    }
    .xm-cart-main {
        width: 100%;
        position: relative;
        background: #f3f3f3;
        z-index: 1;

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
            top: 18px;
            text-align: center;
            color: #fff;
        }
    }
    .xm-cart-edit {
        position: absolute;
        z-index: 1;
        top: 18px;
        right: 8px;
        color: #fff;
        font-size: 14px;
    }
    .xm-cart-item {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        margin-top:-45px;
        flex-direction: column;

        &-title {
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
