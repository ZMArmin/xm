<template>
    <div class="xm-sort">
        <div class="xm-sort-top">
            <div class="xm-sort-top-search">
                <i class="icon" v-html="'&#xe61e;'"></i>
                <input v-model="value" @click="onToSearch" placeholder="粉丝专享日 拼手气抽金条"/>
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
        methods: {
            onToSearch () {
                this.$router.push('/search')
            }
        },
        created () {
            // console.log(this.$route)
            ajax.getNav().then(resp => {
                // console.log(resp)
                let { list } = resp.data
                // 去掉第一条数据
                list = list.slice(1)
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
    src: url('//at.alicdn.com/t/font_1231674_u1oehblncof.eot');
    src: url('//at.alicdn.com/t/font_1231674_u1oehblncof.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1231674_u1oehblncof.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1231674_u1oehblncof.woff') format('woff'),
    url('//at.alicdn.com/t/font_1231674_u1oehblncof.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1231674_u1oehblncof.svg#iconfont') format('svg');
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
        overflow-y: hidden;
        &-sidebar {
            width: 80px;
            background-color:$grey;
            overflow-x: hidden;
            li {
                height: 50px;
                // line-height: 50px;
                font-size: 12px;
                color: $deepGrey;
                overflow: hidden;
                p {
                    height: 20px;
                    line-height: 20px;
                    width: 100%;
                    padding-left: 10px;
                    margin-top: 15px;
                    border-left: 3px solid $grey;
                }
            }
            .router-link-exact-active,
            .router-link-active {
                background-color: #ffffff;
                p {
                    border-left: 3px solid $mainColor;
                    color:$mainColor;
                }
            }
        }
        &-right {
            flex: 1;
            overflow-x: hidden;
        }
    }
}

</style>
