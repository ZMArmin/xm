<template>
    <div class="xm-cart-item-product">
        <div class="xm-cart-item-product-check">
            <label>
            <input type="checkbox" :checked="isCheck" @change="toggleIscheck(id)">
            <span></span>
        </label>
        </div>
        <div class="xm-cart-item-product-picture">
            <img :src="image" :alt="title">
        </div>
        <div class="xm-cart-item-product-attr">
            <p class="xm-cart-item-product-attr-title">{{title}}</p>
            <div class="xm-cart-item-product-attr-action">
                <span class="xm-cart-item-product-attr-price">￥{{price}}</span>
                <span class="xm-cart-item-product-attr-counter">
                    <span @click="countDecrement(id)">-</span>
                    <span>{{count}}</span>
                    <span @click="countIncrement(id)">+</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapMutations
    } from 'vuex'
    export default {
        props: {
            id: {
                type: Number,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            count: {
                type: Number,
                default: 1
            },
            isCheck: {
                type: Boolean,
                default: true
            }
            
        },
        methods: {
            ...mapMutations([
                'toggleIscheck',
                'countDecrement',
                'countIncrement'
            ])
        }
    }
</script>

<style lang="scss" scoped>
    .xm-cart-item-product {
        margin:0 10px;
        background: #fff;
        padding-bottom: 14px;
        display: flex;
        box-sizing: border-box;
        padding-left: 12px;
        position: relative;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;

        &-check {
            height: 74px;
            width: 48px;
            
            input {
                display: none;
                position: relative;

            &:checked {
                + span {
                    width: 18px;
                    height: 18px;
                    background: url(https://app.xiaomiyoupin.com/youpin/static/m/res/images/std_icon_checkbox_check.png) no-repeat center center;
                    background-size: 100%;
                    border:none;
                }
            }
            }
            span {
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

        }

        &-picture {
           width: 86px;
           height: 86px; 
           margin-left:-20px;
           background: #f3f3f3;
           
           img {
               width: 100%;
               height: 100%;
           }
        }

        &-attr {
            flex: 1;
            height: 86px;
            display: flex;
            flex-direction: column;
            margin-left: 8px;

            &-title {
                margin-top: 2px;
                font-size: 14px;
                line-height: 20px;
                margin-bottom: 6px;
                color:#333;
            }

            &-action {
                display: flex;
                justify-content: space-between;
                margin-right: 8px;

                .xm-cart-item-product-attr-price {
                    font-size: 16px;
                    color: #e30d0d;
                }

                .xm-cart-item-product-attr-counter {
                    height: 20px;
                    line-height: 20px;
                    font-size: 14px;

                    span {
                        display: inline-block;
                        width: 20px;
                        text-align: center;

                        &:nth-child(2) {
                            background: #f3f3f3;
                            width: auto;
                            padding: 0 10px;
                        }

                        &:nth-child(3),
                        &:nth-child(1) {
                            font-size: 14px;
                            font-weight: 800;
                        }
                    }

                    
                    
                }
            }
        }
    }
</style>
