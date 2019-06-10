<template>
    <div class="xm-productList">
        <div class="xm-productList-header">
            <span>></span>
            <h3>有品推荐</h3>
            <i class="icon" v-html="'&#xe61e;'"></i>
        </div>
        <div class="xm-productList-main">
            <ul class="xm-productList-main-nav">
                <li>男装</li>
                <li>女装</li>
            </ul>
            <div class="xm-productList-main-shop">
                <div>
                    <img src="https://img.alicdn.com/bao/uploaded/i3/3177203649/O1CN01Svren01cpHk99VqHs_!!0-item_pic.jpg" alt="">
                </div>
                <p>sdfsdfsfsfsdfsd</p>
                <p>sdfsd</p>
                <p>￥<span>9.9</span></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
$grey: #eee;
$deepGrey: #383838;
$mainColor: #845f3f;
@font-face {
    font-family: 'iconfont';  /* project id 1231674 */
    src: url('//at.alicdn.com/t/font_1231674_uqt7el26mdl.eot');
    src: url('//at.alicdn.com/t/font_1231674_uqt7el26mdl.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1231674_uqt7el26mdl.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1231674_uqt7el26mdl.woff') format('woff'),
    url('//at.alicdn.com/t/font_1231674_uqt7el26mdl.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1231674_uqt7el26mdl.svg#iconfont') format('svg');
}
.icon {
    font-family: 'iconfont';
}
.xm-productList {
    width: 100%;
    &-header {
        width: 100%;
        height: 50px;
        line-height: 50px;
        position: relative;
        span {
            display: block;
            float: left;
            font-size: 20px;
            color: #919191;
            margin-left: 10px;
        }
        h3 {
            width: 100px;
            font-size: 16px;
            margin: 0 auto;
            text-align: center;
        }
        i{
            float: right;
            font-size: 20px;
            position: absolute;
            right: 10px;
            top: 50%;
            margin-top: -25px;
        }
    }
    &-main {

    }
}
</style>
