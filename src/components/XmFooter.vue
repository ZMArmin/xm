<template>
    <ul class="xm-footer">
        <router-link
            tag="li"
            v-for="tabbar in tabbars"
            :key="tabbar.name"
            :to="tabbar.path"
            :event="$route.path.includes(tabbar.path) ? '' : 'click'"
        >
            <i class="icon" v-html="tabbar.meta.icon"></i>
            <span>{{tabbar.meta.title}}</span>
            <b class="countTabbar" v-if="tabbar.name === 'cart'">{{totalCount}}</b>
        </router-link>
    </ul>
</template>

<script>
    import routes from '@/router/routes'
    import {
        mapGetters
    } from 'vuex'
    export default {
        data () {
            return {
                tabbars: routes.filter(route => route.meta.isTabbar)
            }
        },
        computed: {
            ...mapGetters(['totalCount'])
        }
    }
</script>

<style lang="scss" scoped>
$mainColor: #845f3f;
.xm-footer {
    display: flex;
    border-top: 1px solid #ccc;
    height: 52px;
    justify-content: space-around;
    text-align: center;

    li {
        position: relative;
    }

    i {
        display: block;
        font-size: 18px;
        line-height: 32px;
        color: $mainColor;
    }

    span {
        font-size: 12px;
        line-height: 14px;
        color: #666;
    }
    .countTabbar {
        display: inline-block;
        position: absolute;
        top: 0;
        right: 0;
        background: #e30d0d;
        color: #FFF;
        font-size: 12px;
        text-align: center;
        border-radius: 50%;
        padding:3px 5px;

    }
}
</style>
