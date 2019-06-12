<template>
    <div>
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
        <div class="slideBottom">
            <ul class="bottom">
                <li
                    class="bottomLi"
                    v-for="grids in gridsV2"
                    :key="grids.text"
                >
                    <img :src="grids.imageUrl" alt="" class="bottomLiImg">
                    <span>{{grids.text}}</span>
                </li>
            </ul>
        </div>
        <div class="bottomImg">
            <img src="../../public/img/bottomImg.png" alt="">
        </div>
        <div class="crowdFinding">
            <div class="crowdFinding-text">
                <p class="textP">小米众筹<span>更多</span></p>
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
                    <p class="moreLeftPrice">{{detailMore.price}}</p>
                    <img :src="detailMore.image" alt="" class="moreLeftImg">
                </div>
                <div class="messageMoreRight">
                    <p class="moreRightTitle">{{detailMore.title}}</p>
                    <p class="moreRightPrice">{{detailMore.price}}</p>
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
                    <img :src="market.image" alt="" class="imgRight">
                </li>
                <li class="marketTopLi"></li>
            </ul>
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
        <div class="tasteLife">
            <div class="tasteText">
                <p class="tasteP">有品市场<span>更多</span></p>
            </div>
            <div class="tasteMain">
                <img src="../../public/img/taste.jpg" alt="" class="tasteImg">
                <p class="tasteTitle">今日省钱攻略</p>
                <p class="tasteMessage">米家变频空调直降500，今日小件组合超值组合省200</p>
            </div>
        </div>
        <div class="newList">
            <div class="newImg">
                <img src="../../public/img/tastebanner1.png" alt="" class="newImgImg">
            </div>
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
            <p class="loveMoreTitle">——更多好物，敬请期待——</p>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import swiperCss from 'swiper/dist/css/swiper.min.css'
    import * as ajax from '@/request'
    export default {
        data () {
            return {
                banners: [],
                gridsV2: [],
                topList: [],
                detail: [],
                detailMore: [],
                market: [],
                navLinks: [],
                categories: []
            }
        },
        created () {
            ajax.getHome().then(resp => {
                this.banners = resp.data.banners
                this.$nextTick().then(() => {
                    this.initSwiper()
                })
                this.gridsV2 = resp.data.gridsV2
                this.topList = resp.data.topList
                this.navLinks = resp.data.navLinks
            }),
            ajax.getRecomend().then(resp => {
                this.detail = resp.data.detail
            }),
            ajax.getRecomendThen().then(resp => {
                this.detailMore = resp.data.detail
                console.log(this.detailMore)
            }),
            ajax.getMarket().then(resp => {
                this.market = resp.data.detail
            }),
            ajax.getList().then(resp => {
                this.categories = resp.data.categories
            })
        },
        methods: {
            initSwiper () {
                var mySwiper = new Swiper('.swiper-container', {
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
.header {
    width: 100%;
    height: 30px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: #fff;
    .logoUl {
        width: 100%;
        height: 30px;
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
            width: 258px;
            height: 28px;
            background-color: #ece8e8;
            position: relative;
            img {
                width: 16px;
                height: 16px;
                float: left;
                position: absolute;
                top: 6px;
                left: 0px;
            }
            input {
                width: 228px;
                height: 16px;
                position: absolute;
                top: 6px;
                left: 22px;
                border: none;
                background-color: #ece8e8;
            }
        }
        .logoMessage {
            width: 28px;
            height: 28px;
            img {
                width: 28px;
                height: 28px;
            }
        }
    }
}
.nav {
    width: 100%;
    height: 30px;
    padding-top: 30px;
    overflow: auto;
    .navUl {
        height: 100%;
        overflow: auto;
        width: 600px;
        .navLi {
            width: 60px;
            height: 30px;
            margin: 0 10px;
            float: left;
            line-height: 30px;
            font-size: 14px;
        }
    }
}
.swiper-container {
    height: 0;
    padding-top: (400 / 1080) * 100%;
    width: 100%;
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
    width: 100%;
    height: 100px;
    .bottom {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .bottomLi {
            width: 72px;
            height: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            .bottomLiImg {
                width: 50px;
                height: 50px;
                margin-bottom: 5px;
            }
        }
    }
}
.bottomImg {
    width: 100%;
    height: 100px;
    img {
        width: 100%;
        height: 100px;
    }
}
.crowdFinding {
    width: 100%;
    height: 200px;
    .crowdFinding-text {
        width: 100%;
        height: 30px;
        .textP {
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
    .crowdFinding-message {
        width: 100%;
        height: 170px;
        background-color: #cea397;
        margin-top: 10px;
        .messageLeft {
            width: 55%;
            height: 170px;
            float: left;
            position: relative;
            .messageSm {
                height: 44px;
                font-size: 16px;
                line-height: 22px;
                position: absolute;
                top: 20px;
                left: 10px;
                overflow: hidden;
            }
            span {
                height: 22px;
                line-height: 22px;
                font-size: 14px;
                position: absolute;
                top: 68px;
                left: 10px;
                overflow: hidden;
                color: #cecece;
            }
            i {
                position: absolute;
                top: 100px;
                left: 10px;
                color: #e90d4f;
                font-size: 16px;
                line-height: 22px;
            }
        }
        .messageRight {
            width: 45%;
            height: 170px;
            float:right;
            img {
                width: 100px;
                height: 100px;
                margin-top: 30px;
                margin-left: 30px;
            }
        }
    }
    .crowdFinding-messageMore {
        width: 100%;
        height: 150px;
        .messageMoreLeft {
            width: 50%;
            height: 150px;
            float: left;
            position: relative;
            .moreLeftTitle {
                height: 44px;
                display: block;
                padding-top: 10px;
                padding-left: 10px;
                line-height: 22px;
                font-size: 16px;
                overflow: hidden;
            }
            .moreLeftPrice {
                display: block;
                line-height: 22px;
                font-size: 16px;
                color: #f31a1a;
                padding-top: 10px;
                padding-left: 10px;
            }
            .moreLeftImg {
                width: 100px;
                height: 100px;
                position: absolute;
                right: 0px;
                bottom: 0px;
            }
        }
        .messageMoreRight {
            width: 50%;
            height: 150px;
            position: relative;
            float: right;
            .moreRightTitle {
                height: 44px;
                display: block;
                padding-top: 10px;
                padding-left: 10px;
                line-height: 22px;
                font-size: 16px;
                overflow: hidden;
            }
            .moreRightPrice {
                display: block;
                line-height: 22px;
                font-size: 16px;
                color: #f31a1a;
                padding-top: 10px;
                padding-left: 10px;
            }
            .moreRightImg {
                width: 100px;
                height: 100px;
                position: absolute;
                right: 0px;
                bottom: 0px;
            }
        }
        
    }
}
.recomendImg {
    width: 100%;
    height: 100px;
    img {
        width: 100%;
        height: 100px;
    }
}
.dayUpdate {
    width: 100%;
    margin-top: 150px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    li {
        width: 33%;
        height: 150px;
        img {
            width: 100%;
            height: 100px;
        }
        .updateTitle {
            height: 22px;
            font-size: 16px;
            line-height: 22px;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        .updatePrice {
            height: 22px;
            font-size: 16px;
            line-height: 22px;
            color: #f00e0e;
        }
    }
}
.market {
    width: 100%;
    height: 330px;
    .marketText {
        width: 100%;
        height: 30px;
        .textP {
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
    .marketTop {
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: center;
        background-color: #ffcec0;
        .marketTopLi {
            width: 50%;
            height: 150px;
            .topLiTitle {
                font-size: 16px;
                line-height: 22px;
                height: 22px;
                color: #e75e03;
                margin-top: 10px;
                margin-left: 10px;
            }
            .topLiMess {
                font-size: 14px;
                line-height: 18px;
                height: 18px;
                margin-top: 10px;
                margin-left: 10px;
                overflow: hidden;
            }
            .imgLeft {
                width: 50%;
                height: 50%;
                margin-top: 10px;
            }
            .imgRight {
                width: 50%;
                height: 50%;
                margin-top: 10px;
            }
        }
    }
    .marketBot {
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: center;
        .marketBotLi {
            width: 25%;
            height: 150px;
            background-color: #c2bbbb;
            text-align: center;
            .botLiTitle {
                font-size: 16px;
                line-height: 22px;
                height: 22px;
                color: #e75e03;
                margin-top: 10px;
                margin-left: 10px;
            }
            .botLiMess {
                font-size: 14px;
                line-height: 18px;
                height: 18px;
                margin-top: 10px;
                margin-left: 10px;
            }
            .botLiImg {
                width: 50%;
                height: 50%;
                margin-top: 10px;
            }
        }
    }
}
.tasteLife{
    width: 100%;
    height: 230px;
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
        height: 200px;
        .tasteImg {
            width: 100%;
            height: 150px;
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
    height: 370px;
    .newImg {
        width: 100%;
        height: 200px;
        .newImgImg {
            width: 100%;
            height: 200px;
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
                width: 100px;
                height: 100%;
                float: left;
                text-align: center;
                .listLiImg {
                    width: 100px;
                    height: 100px;
                }
                .listLiTitle {
                    font-size: 16px;
                    line-height: 22px;
                    height: 22px;
                    margin-top: 5px;
                }
                .listLiPrice {
                    font-size: 14px;
                    line-height: 18px;
                    height: 18px;
                    color: #e90d4f;
                    margin-top: 5px;
                }
            }
        }
    }
}
.loveMore {
    width: 100%;
    height: 150px;
    background-color: #c2bbbb;
    text-align: canter;
    overflow: hidden;
    .loveMoreTitle {
        width: 50%;
        margin: 0 auto;
        font-size: 14px;
        line-height: 22px;
        height: 22px;
        margin-top: 60px;
    }
}
</style>
