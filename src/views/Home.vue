<template>
    <div class="wrap">
        <div class="header">
            <ul class="logoUl">
                <li  class="logoImg">
                    <img src="../../public/img/yp_logo.png" alt="">
                </li>
                <li class="logoLi">
                    <img src="../../public/img/search.png" alt="">
                    <input type="text" placeholder="欢迎浏览有品网" @click="toSearch">
                </li>
                <router-link tag="li" to="/message" class="logoMessage">
                    <img src="../../public/img/message.png" alt="">
                </router-link>
            </ul>
        </div>
        <div class="nav">
            <ul class="navUl">
                <li class="navLi">推荐</li>
                <li class="navLi">手机</li>
                <li class="navLi">家用电器</li>
                <li class="navLi">家用家装</li>
                <li class="navLi">智能家庭</li>
                <li class="navLi">服装配饰</li>
                <li class="navLi">居家餐厨</li>
                <li class="navLi">日用文创</li>
                <li class="navLi">运动户外</li>
                <li class="navLi">鞋靴箱包</li>
            </ul>
            <div class="navRight"></div>
        </div>
        <div class="banner-wrap">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div
                        class="swiper-slide"
                        v-for="banner in banners"
                        :key="banner.id"
                    >
                        <img :src="banner.imageUrl" :alt="banner.title">
                </div>
            </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
        <div class="slideBottom">
            <ul class="bottom">
                <li
                    class="bottomLi"
                    v-for="hotCommodity in hotCommodities"
                    :key="hotCommodity.text"
                >
                    <img :src="hotCommodity.image" alt="" class="bottomLiImg">
                    <span class="bottomSpan">{{hotCommodity.title}}</span>
                </li>
            </ul>
        </div>
        <div class="bottomImg">
            <img src="../../public/img/bottomImg.png" alt="">
        </div>
        <div class="crowdFinding">
            <div class="crowdFinding-text">
                <p class="textP">小米众筹<router-link to="/product" tag="span" class="span">更多</router-link></p>
            </div>
            <div class="crowdFinding-message">
                <div class="messageLeft">
                    <p class="messageSm">{{detail.title}}</p>
                    <span>{{detail.title}}</span>
                    <i>￥{{detail.bottomPrice}}</i>
                </div>
                <div class="messageRight">
                    <img :src="detail.image" alt="">
                </div>
            </div>
            <div class="crowdFinding-messageMore">
                <div class="messageMoreLeft">
                    <p class="moreLeftTitle">{{detailMore.title}}</p>
                    <p class="moreLeftPrice">￥{{detailMore.price}}</p>
                    <img :src="detailMore.image" alt="" class="moreLeftImg">
                </div>
                <div class="messageMoreRight">
                    <p class="moreRightTitle">{{detailMore.title}}</p>
                    <p class="moreRightPrice">￥{{detailMore.price}}</p>
                    <img :src="detailMore.image" alt="" class="moreRightImg">
                </div>
            </div>
        </div>
        <div class="recomendImg">
            <img src="../../public/img/bottomImg.png" alt="">
        </div>
        <ul class="dayUpdate">
            <li
                class="updateLi"
                v-for="list in topList"
                :key="list.title"
            >
                <img :src="list.image" alt="">
                <p class="updateTitle">{{list.title}}</p>
                <p class="updatePrice">￥{{list.originPrice}}</p>
            </li>
        </ul>
        <div class="market">
            <div class="marketText">
                <p class="textP">有品市场<span>更多</span></p>
            </div>
            <ul class="marketTop">
                <li class="marketTopLi">
                    <p class="topLiTitle">{{market.expireMsg}}</p>
                    <p class="topLiMess">{{market.title}}</p>
                    <img :src="market.image" alt="" class="imgLeft">
                </li>
                <li class="marketTopLi">
                    <p class="topLiTitle">{{market.expireMsg}}</p>
                    <p class="topLiMess">{{market.title}}</p>
                    <img :src="market.image" alt="" class="imgLeft">
                </li>
            </ul>
            <div class="box"></div>
            <ul class="marketBot">
                <li
                    class="marketBotLi"
                    v-for="navLink in navLinks"
                    :key="navLink.title"
                >
                    <p class="botLiTitle">{{navLink.title}}</p>
                    <p class="botLiMess">{{navLink.boardName}}</p>
                    <img :src="navLink.imageUrl" alt="" class="botLiImg">
                </li>
            </ul>
        </div>
        <!-- <div class="tasteLife">
            <div class="tasteText">
                <p class="tasteP">有品市场<span>更多</span></p>
            </div>
            <div class="tasteMain">
                <img src="../../public/img/taste.jpg" alt="" class="tasteImg">
                <p class="tasteTitle">今日省钱攻略</p>
                <p class="tasteMessage">米家变频空调直降500，今日小件组合超值组合省200</p>
            </div>
        </div> -->
        <div class="newList">
            <!-- <div class="newImg">
                <img src="../../public/img/tastebanner1.png" alt="" class="newImgImg">
            </div> -->
            <div class="listUl">
                <div class="newListUl">
                    <li
                        class="newListLi"
                        v-for="categorie in categories"
                        :key="categorie.title"
                    >
                        <img :src="categorie.imageUrl" alt="" class="listLiImg">
                        <p class="listLiTitle">{{categorie.title}}</p>
                        <p class="listLiPrice">￥{{categorie.id}}</p>
                    </li>
                </div>
            </div>
        </div>
        <div class="loveMore">
            <p class="loveMoreTitle">··· 更多好物，敬请期待 ···</p>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import swiperCss from 'swiper/dist/css/swiper.min.css'
    import * as ajax from '@/request'
    export default {
        name: 'home',
        data () {
            return {
                banners: [],
                topList: [],
                detail: [],
                detailMore: [],
                market: [],
                navLinks: [],
                categories: [],
                hotCommodities: []
            }
        },
        created () {
            // console.log('created')
            ajax.getHome().then(resp => {
                this.banners = resp.data.banners
                this.$nextTick().then(() => {
                    this.initSwiper()
                })
                this.topList = resp.data.topList
                this.navLinks = resp.data.navLinks
            })

            ajax.getNewBot().then(resp => {
                this.hotCommodities = resp.data.hotCommodities
            })

            ajax.getRecomend().then(resp => {
                this.detail = resp.data.detail
            })

            ajax.getRecomendThen().then(resp => {
                this.detailMore = resp.data.detail
            })

            ajax.getMarket().then(resp => {
                this.market = resp.data.detail
            })

            ajax.getList().then(resp => {
                this.categories = resp.data.categories
            })
        },
        // destroyed () {
        //     console.log('destroyed')
        // },
        methods: {
            initSwiper () {
                const mySwiper = new Swiper('.swiper-container', {
                    autoplay: true,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination'
                    }
                })
            },
            toSearch () {
                this.$router.push('/search')
            }
        }
    }
</script>

<style lang="scss">
.wrap {
    background-color: #eee;
}
.header {
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: #fff;
    .logoUl {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logoImg {
            width: 64px;
            height: 28px;
            img {
                width: 58px;
                height: 28px;
            }
        }
        .logoLi {
            width: 74%;
            height: 28px;
            margin-left: -24px;
            background-color: #eee;
            opacity: .6;
            position: relative;
            img {
                width: 16px;
                height: 16px;
                float: left;
                position: absolute;
                top: 6px;
                left: 6px;
            }
            input {
                width: 228px;
                height: 16px;
                position: absolute;
                top: 6px;
                left: 28px;
                border: none;
                background: none;
                font-size: 12px;
                outline: none;
            }
        }
        .logoMessage {
            width: 28px;
            height: 28px;
            img {
                width: 22px;
                height: 22px;
                margin: 4px -5px;
            }
        }
    }
}
.nav {
    width: 100%;
    height: 30px;
    padding-top: 45px;
    overflow: auto;
    padding-bottom: 2px;
    background-color: #fff;
    .navUl {
        height: 100%;
        overflow: auto;
        width: 160%;
        padding-left: 6px;
        .navLi {
            height: 30px;
            float: left;
            line-height: 30px;
            font-size: 12px;
            padding: 0 8px;
            flex-wrap: nowrap;
            color: #333;
            // transform: scale(0.9);
        }
    }
}
.banner-wrap {
    background-color: #fff;
}
.swiper-container {
    height: 0;
    padding-top: (400 / 1080) * 100%;
    width: 96%;
    border-radius: 5px;
    .swiper-wrapper {
        position: absolute;
        top: 0;
        left: 0;
    }

    img {
        width: 100%;
    }
}
.slideBottom {
    width: 96%;
    height: 100px;
    padding: 0 9px;
    background-color: #fff;
    .bottom {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .bottomLi {
            width: 20%;
            height: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;
            .bottomLiImg {
                width: 88%;
                height: 72%;
                margin-bottom: 5px;
            }
            .bottomSpan {
                height: 20px;
                width: 100%;
                line-height: 20px;
                overflow: hidden;
                font-size: 12px;
                color:#666;
                white-space: nowrap;
                text-overflow: ellipsis;
                padding-left: 6px;
            }
        }
    }
}
.bottomImg {
    width: 100%;
    height: 80px;
    background-color: #fff;
    margin: 8px 0;
    img {
        width: 100%;
        height: 90%;
    }
}
.crowdFinding {
    width: 96%;
    padding: 0 9px;
    background-color: #fff;

    .crowdFinding-text {
        width: 100%;
        height: 30px;
        margin-top: 5px;
        .textP {
            height: 30px;
            line-height: 30px;
            font-size: 16px;
            margin-left: 5px;
            color: #333;
            padding: 6px 0;
            .span {
                float: right;
                font-size: 12px;
                margin-right: 5px;
                transform: scale(0.9);
                color: #999;
            }
        }
    }
    .crowdFinding-message {
        width: 99%;
        height: 160px;
        margin-top: 10px;
        background-color: #faf2f2;
        .messageLeft {
            width: 55%;
            height: 160px;
            float: left;
            position: relative;
            .messageSm {
                height: 44px;
                font-size: 14px;
                line-height: 22px;
                position: absolute;
                top: 20px;
                left: 10px;
                overflow: hidden;
            }
            span {
                height: 22px;
                width: 100%;
                line-height: 22px;
                font-size: 12px;
                position: absolute;
                top: 68px;
                left: 10px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                color: #999;
            }
            i {
                position: absolute;
                top: 100px;
                left: 10px;
                color: #e90d4f;
                font-size: 14px;
                line-height: 22px;
            }
        }
        .messageRight {
            width: 45%;
            height: 170px;
            float:right;
            img {
                width: 110px;
                height: 110px;
                margin-top: 25px;
                margin-left: 30px;
            }
        }
    }
    .crowdFinding-messageMore {
        width: 100%;
        height: 150px;
        padding: 10px 0;
        .messageMoreLeft {
            width: 48%;
            height: 150px;
            float: left;
            position: relative;
            background-color: #fafafa;
            .moreLeftTitle {
                height: 44px;
                display: block;
                padding-top: 10px;
                padding-left: 10px;
                line-height: 22px;
                font-size: 14px;
                color: #333;
                overflow: hidden;
            }
            .moreLeftPrice {
                display: block;
                line-height: 22px;
                font-size: 12px;
                color: #f31a1a;
                padding-top: 10px;
                padding-left: 10px;
            }
            .moreLeftImg {
                width: 95px;
                height: 92px;
                position: absolute;
                right: 0px;
                bottom: 0px;
            }
        }
        .messageMoreRight {
            width: 48%;
            height: 150px;
            position: relative;
            float: right;
            background-color: #fafafa;
            margin-right: 3px;
            .moreRightTitle {
                height: 44px;
                display: block;
                padding-top: 10px;
                padding-left: 10px;
                line-height: 22px;
                font-size: 14px;
                color: #333;
                overflow: hidden;
            }
            .moreRightPrice {
                display: block;
                line-height: 22px;
                font-size: 12px;
                color: #f31a1a;
                padding-top: 10px;
                padding-left: 10px;
            }
            .moreRightImg {
                width: 95px;
                height: 92px;
                position: absolute;
                right: 0px;
                bottom: 0px;
            }
        }
    }
}
.recomendImg {
     width: 100%;
    height: 80px;
    background-color: #fff;
    margin: 8px 0;
    img {
        width: 100%;
        height: 90%;
    }
}
.dayUpdate {
    width: 100%;
    margin-top: 8px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    background-color: #fff;
    li {
        width: 28%;
        height: 150px;
        margin: 10px 9px;
        padding-left: 1px;
        img {
            width: 100%;
            height: 110px;
        }
        .updateTitle {
            height: 22px;
            font-size: 12px;
            line-height: 22px;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        .updatePrice {
            height: 22px;
            font-size: 13px;
            line-height: 22px;
            color: #f00e0e;
        }
    }
}
.market {
    width: 100%;
    background-color: #fff;
    margin-top: 8px;
    .marketText {
        width: 96%;
        height: 30px;
        margin: 0 9px;
        .textP {
            height: 30px;
            line-height: 30px;
            font-size: 16px;
            margin-left: 5px;
            color: #333;
            padding: 6px 0;
            span {
                float: right;
                font-size: 12px;
                margin-right: 5px;
                transform: scale(0.9);
                color: #999;
            }
        }
    }
    .marketTop {
        width: 96%;
        height: 200px;
        margin: 0 9px;
        display: flex;
        justify-content: center;
        .marketTopLi {
            width: 45%;
            height: 185px;
            background-color: #efefef;
            border-radius: 5px;
            margin: 0 12px;
            .topLiTitle {
                font-size: 12px;
                line-height: 22px;
                height: 22px;
                color: #e75e03;
                margin: 5px 10px;
            }
            .topLiMess {
                font-size: 12px;
                line-height: 18px;
                height: 18px;
                margin: 5px 10px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .imgLeft {
                width: 84%;
                height: 63%;
                margin: 5px 10px;
            }
            .imgRight {
                width: 50%;
                height: 50%;
                margin-top: 10px;
            }
        }
    }
    .box {
        height: 8px;
        width: 1005;
        background-color: #eee;
        margin: 5px 0;
    }
    .marketBot {
        width: 100%;
        height: 135px;
        display: flex;
        justify-content: center;
        .marketBotLi {
            width: 25%;
            height: 135px;
            text-align: center;
            .botLiTitle {
                font-size: 14px;
                line-height: 22px;
                height: 22px;
                color: #e75e03;
                margin: 5px 5px;
            }
            .botLiMess {
                font-size: 12px;
                line-height: 18px;
                height: 18px;
                margin: 5px 5px;
            }
            .botLiImg {
                width: 68%;
                height: 50%;
                margin-top: 4px;
            }
        }
    }
}
.tasteLife{
    width: 100%;
    height: 250px;
    .tasteText {
        width: 100%;
        height: 30px;
        .tasteP {
            height: 30px;
            line-height: 30px;
            font-size: 20px;
            margin-left: 10px;
            span {
                float: right;
                font-size: 14px;
                margin-right: 10px;
            }
        }
    }
    .tasteMain {
        width: 100%;
        height: 250px;
        .tasteImg {
            width: 100%;
            height: 170px;
        }
        .tasteTitle {
            width: 100%;
            height: 22px;
            font-size: 16px;
            line-height: 22px;
        }
        .tasteMessage {
            width: 100%;
            height: 18px;
            line-height: 18px;
            font-size: 14px;
            color: #c2bbbb;
        }
    }
}
.newList {
    width: 100%;
    height: 165px;
    background-color: #fff;
    margin-top: 8px;
    .newImg {
        width: 100%;
        height: 160px;
        .newImgImg {
            width: 100%;
            height: 160px;
        }
    }
    .listUl {
        width: 100%;
        height: 170px;
        overflow: auto;
        .newListUl {
            overflow: auto;
            width: 1200px;
            height: 170px;
            list-style: none;
            .newListLi {
                text-align: center;
                width: 100px;
                height: 100%;
                float: left;
                text-align: center;
                .listLiImg {
                    width: 100px;
                    height: 100px;
                }
                .listLiTitle {
                    font-size: 14px;
                    line-height: 22px;
                    height: 22px;
                    margin-top: 5px;
                }
                .listLiPrice {
                    font-size: 12px;
                    line-height: 18px;
                    height: 18px;
                    color: #e90d4f;
                }
            }
        }
    }
}
.loveMore {
    width: 100%;
    background-color: #efefef;
    .loveMoreTitle {
        font-size: 12px;
        line-height: 30px;
        height: 30px;
        color: #666;
        padding: 5px 30%;
    }
}
</style>
