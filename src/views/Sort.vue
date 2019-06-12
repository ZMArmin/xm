<template>
    <div class="xm-sort">
        <div class="xm-sort-top">
            <div class="xm-sort-top-search">
                <i class="icon" v-html="'&#xe61e;'"></i>
                <input v-model="value" placeholder="粉丝专享日 拼手气抽金条"/>
            </div>
        </div>
        <div class="xm-sort-main">
            <ul class="xm-sort-main-sidebar">
                <router-link
                    v-for="list in lists"
                    :key="list.id"
                    tag="li"
                    :to="`/sort/${list.id}`"
                ><p>{{list.name}}</p></router-link>
            </ul>
            <div class="xm-sort-main-right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import * as ajax from '@/request'
    export default {
        data () {
            return {
                value: '',
                lists: []
            }
        },
        created () {
            // console.log(this.$route)
            ajax.getNav().then(resp => {
                // console.log(resp)
                let { list } = resp.data
                // 去掉今日推荐
                // list = list.slice(1)
                this.lists = list
                // 第一次进来时默认跳转第0条shop
                // console.log(list)
                const { shopId = list[0].id } = this.$route.params
                this.$router.push(`/sort/${shopId}`)
            })
        }
    }
</script>

<style lang="scss">
$grey: #eee;
$deepGrey: #383838;
$mainColor: #845f3f;
@font-face {
    font-family: 'iconfont';  /* project id 1231674 */
    src: url('//at.alicdn.com/t/font_1231674_ftrcnereula.eot');
    src: url('//at.alicdn.com/t/font_1231674_ftrcnereula.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1231674_ftrcnereula.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1231674_ftrcnereula.woff') format('woff'),
    url('//at.alicdn.com/t/font_1231674_ftrcnereula.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1231674_ftrcnereula.svg#iconfont') format('svg');
}
.icon {
    font-family: 'iconfont';
}
.xm-sort {
    height: 100%;
    display: flex;
    flex-direction: column;
    &-top {
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #e9e9e9;
        &-search {
            width: 90%;
            height: 30px;
            line-height: 30px;
            background-color: #f4f4f4;
            margin: 0 auto;
            margin-top: 10px;
            border-radius: 5px;
            input {
                outline: none;
                border: none;
                background-color: #f4f4f4;
                color: #d1d1d1;
                width: 85%;
                height: 22px;
                line-height: 20px;
            }
            i {
                font-size: 20px;
                color:#a1a1a1;
                margin: 0 7px;
            }
        }
    }

    &-main {
        flex: 1;
        display: flex;
        &-sidebar {
            width: 80px;
            background-color:$grey;
            overflow-x: hidden;
            li {
                height: 50px;
                line-height: 50px;
                padding-left: 10px;
                font-size: 12px;
                color: $deepGrey;
                border-left: 2px solid $grey;
            }
            .router-link-exact-active,
            .router-link-active {
                background-color: #ffffff;
                border-left: 2px solid $mainColor;
                color:$mainColor;
            }
        }
        &-right {
            flex: 1;
            overflow-x: hidden;
        }
    }
}

</style>
