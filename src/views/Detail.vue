<template>
    <div class="xm-detail">
        <div class="xm-detail-main">
            <div class="xm-detail-banners">
                <mt-swipe :auto="3000" class="xm-detail-banners__swipe">
                    <mt-swipe-item>背景图1</mt-swipe-item>
                    <mt-swipe-item>背景图2</mt-swipe-item>
                    <mt-swipe-item>背景图3</mt-swipe-item>
                </mt-swipe>
            </div>
            <p class="xm-detail-title">
                <mt-badge size="small" color="#FF4040">撒地方撒地方</mt-badge>快乐健康
            </p>
            <p class="xm-detail-price">￥9.9</p>
        </div>
        <div class="xm-detail-footer">
        <p class="xm-detail-footer-btn">加入购物车</p>
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
.xm-detail {
  height: 100%;
  display: flex;
  flex-direction: column;

  &-main {
    flex: 1;
  }
  &-banners {
    width: 100%;
    height: 0;
    padding-top: 100%;
    position: relative;

    &__swipe {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;

      img {
        width: 100%;
      }
    }
  }
  &-title {
    font-size: 12px;
    color: $deepGrey;
    line-height: 30px;
  }

  &-footer {
    height: 50px;

    &-btn {
      text-align: center;
      background-color: $mainColor;
      margin: 0 6px;
      border-radius: 3px;
      line-height: 30px;
      color: #fff;
    }

  }
}
</style>
