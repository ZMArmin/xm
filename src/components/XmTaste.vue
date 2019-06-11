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
            <div class="xm-taste-list-title">品味周刊</div>
            <div class="xm-taste-list-banner"></div>
            <div class="xm-taste-list-product"></div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
  .xm-taste {
        height: 100%;
        width: 100%;
        background-color: #f4f4f4;

        &-title {
            height: 8%;
            background-color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            color: #333;
            border-bottom: 1px solid #eee;
        }

        &-banner {
            height: 45%;
            background-color: #ffffff;

            &-img {
                width: 96%;
                height: 68%;
                padding: 10px 0;
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
                        width: 65%;
                        height: 65%;
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
            height: 42%;
            background-color: #fff;
            margin-top: 10px;

            &-title {
                height: 18%;
                background-color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
                color: #333;
            }

            &-banner {
                width: 96%;
                height: 24%;
                background-color: greenyellow;
                margin: 5px 9px;
            }
        }
    }
</style>
