<template>
    <div class="xm-app">
        <div class="xm-app-header">
        </div>
        <div class="xm-app-main">
            <router-view></router-view>
        </div>
        <div class="xm-app-footer">
            <router-view name="footer"></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        created () {
        }
    }
</script>

<style lang="scss">
@font-face {
  font-family: 'iconfont';  /* project id 1230872 */
  src: url('//at.alicdn.com/t/font_1230872_a62dauo6rnj.eot');
  src: url('//at.alicdn.com/t/font_1230872_a62dauo6rnj.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1230872_a62dauo6rnj.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1230872_a62dauo6rnj.woff') format('woff'),
  url('//at.alicdn.com/t/font_1230872_a62dauo6rnj.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1230872_a62dauo6rnj.svg#iconfont') format('svg');
}
.icon {
  font-family: 'iconfont';
}
html, body, div, span,
h1, h2, h3, h4, h5, h6, p,
a,
em, img,
small, strike, strong,
b, u, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas,
figure, figcaption, footer, header, hgroup,
main, menu, nav, section, summary,
audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
    display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
html,
body {
    height: 100%;
    font-size: 12px;
}

.xm-app {
    height: 100%;
    display: flex;
    flex-direction: column;

    &-main {
        flex: 1;
        overflow-x: hidden;
    }

}
</style>
