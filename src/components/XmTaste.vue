<template>
  <div class="xm-taste">
        <div class="xm-taste-title">
            品味
        </div>
        <div class="xm-taste-banner">
            <div class="xm-taste-banner-img">
                <mt-swipe :auto="4000">
                    <mt-swipe-item><img src="../../public/img/tesat-banner-1.png" alt="banner"></mt-swipe-item>
                    <mt-swipe-item><img src="../../public/img/tesat-banner-2.jpg" alt="banner"></mt-swipe-item>
                    <mt-swipe-item><img src="../../public/img/tesat-banner-3.jpg" alt="banner"></mt-swipe-item>
                </mt-swipe>
            </div>
            <ul>
                <li>
                    <i></i>
                    <span>618尖货</span>
                </li>
                <li>
                    <i></i>
                    <span>618尖货</span>
                </li>
                <li>
                    <i></i>
                    <span>618尖货</span>
                </li>
                <li>
                    <i></i>
                    <span>618尖货</span>
                </li>
                <li>
                    <i></i>
                    <span>618尖货</span>
                </li>
            </ul>
        </div>
        <div class="xm-taste-list">
            <div class="xm-taste-list-title">品味周刊<i></i></div>
            <div class="xm-taste-list-banner"></div>
            <div class="xm-taste-list-product">
                <ul>
                    <router-link
                        v-for="item in lists"
                        :key="item.id"
                        :to="{name: 'detail', query: { 'id':item.id }}"
                        tag="li"
                    >
                        <img :src="item.image" alt="">
                        <p>
                            <span>{{item.title}}</span>
                            <span>￥{{item.price}}</span>
                        </p>
                    </router-link>
                </ul>
            </div>
        </div>
        <div class="xm-taste-column">
            <div class="xm-taste-column-title">独家专栏<i></i></div>
            <ul>
                <li
                    class="xm-taste-column-block"
                    v-for="list in tastes"
                    :key="list.id"
                >
                    <img :src="list.img" alt="">
                    <div class="xm-taste-column-block-text">
                        <h3>{{list.title}}</h3>
                        <p>{{list.text}}</p>
                    </div>
                    <button>去发现</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import * as ajax from '@/request'
    export default {
        data () {
            return {
                lists: [],
                tastes: []
            }
        },
        created () {
            ajax.getTasteList().then(resp => {
                let { list } = resp.data
                this.lists = list
                // console.log(list)
            })
            ajax.taste().then(resp => {
                // console.log(resp)
                let { list } = resp.data
                this.tastes = list
            })
        }
    }
</script>

<style lang="scss">
$mainColor: #845f3f;
  .xm-taste {
        height: 100%;
        width: 100%;
        background-color: #f4f4f4;
        overflow-x: hidden;

        &-title {
            height: 8%;
            width: 100%;
            background-color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            color: #333;
            border-bottom: 1px solid #eee;
            position: fixed;
            z-index: 100;
        }

        &-banner {
            margin-top: 14%;
            height: 45%;
            background-color: #ffffff;

            &-img {
                width: 96%;
                height: 65%;
                padding: 12px 0;
                margin-left: 9px;

                .mint-swipe {
                    width: 100%;
                    height: 100%;
                    border-radius: 2%;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }

            ul {
                display: flex;
                height: 26%;

                li {
                    width: 20%;
                    text-align: center;

                    &:nth-child(1) {
                        i {
                            background: url('../../public/img/icon1.png') no-repeat;
                            background-size: 100%;
                        }
                    }
                    &:nth-child(2) {
                        i {
                            background: url('../../public/img/icon2.png') no-repeat;
                            background-size: 100%;
                        }
                    }
                    &:nth-child(3) {
                        i {
                            background: url('../../public/img/icon3.png') no-repeat;
                            background-size: 100%;
                        }
                    }
                    &:nth-child(4) {
                        i {
                            background: url('../../public/img/icon4.png') no-repeat;
                            background-size: 100%;
                        }
                    }
                    &:nth-child(5) {
                        i {
                            background: url('../../public/img/icon5.png') no-repeat;
                            background-size: 100%;
                        }
                    }
                    i {
                        display: inline-block;
                        width: 70%;
                        height: 70%;
                        margin-left: 5px;
                    }

                    span {
                        display: block;
                        font-size: 12px;
                        color: #333;
                        padding-top: 6px;
                    }
                }
            }
        }

        &-list {
            height: 44%;
            background-color: #fff;
            margin-top: 10px;

            &-title {
                height: 14%;
                background-color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
                color: #333;
                padding-left: 10px;
                box-sizing: border-box;

                i {
                    width: 4%;
                    height: 26%;
                    margin-left: 10px;
                    background: url('../../public/img/箭头.png') no-repeat;
                    background-size: 100% 100%;
                    opacity: .4;
                }
            }

            &-banner {
                width: 96%;
                height: 35%;
                background: url('../../public/img/taste-list-img.jpg') no-repeat;
                background-size: 100% 100%;
                margin: 0 9px;
                border-radius: 5px;
            }

            &-product {
                width: 96%;
                height: 49%;
                margin: 6px 9px;
                overflow: auto;

                ul {
                    height: 100%;
                    overflow: auto;
                    display: flex;

                    li {
                        width: 25%;
                        height: 100%;
                        margin-right: 20px;

                        img {
                            height: 70%;
                            width: 100%;
                        }

                        p {
                            font-size: 12px;
                            color: #666;
                            padding: 4px 0;

                            span {
                                line-height: 16px;

                                &:nth-child(1) {
                                    display: block;
                                    width: 100%;
                                    height: 100%;
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                }
                                &:nth-child(2) {
                                    color: #e30d0d;
                                }
                            }
                        }
                    }
                }
            }
        }

        &-column {
            height: 100%;
            width: 100%;
            margin-top: 10px;
            background: #fff;

             &-title {
                height: 6%;
                background-color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
                color: #333;
                padding-left: 10px;
                box-sizing: border-box;

                i {
                    width: 4%;
                    height: 26%;
                    margin-left: 10px;
                    background: url('../../public/img/箭头.png') no-repeat;
                    background-size: 100% 100%;
                    opacity: .4;
                }
            }

            &-block {
                margin: 0 9px;
                height: 45%;
                width: 96%;
                margin-bottom: 30px;

                img {
                    width: 100%;
                    height: 68%;
                    background-color: #333;
                    border-radius: 5px;
                }

                &-text {
                    text-align: center;
                    line-height: 25px;
                    margin-top: 8px;
                    h3 {
                        font-size: 16px;
                        font-weight: 600px;
                        color: #333;
                    }
                    p {
                        font-size: 12px;
                        color: #999;
                        padding-bottom: 8px;
                    }
                }

                button {
                    width: 22%;
                    height: 10%;
                    border: none;
                    margin: 0 39%;
                    color: #fff;
                    border-radius: 4px;
                    background-color: $mainColor;
                    padding: 7px 0;
                }
            }
        }
    }
</style>
