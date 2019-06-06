<template>
    <ul class="xm-footer">
        <router-link
            tag="li"
            v-for="tabbar in tabbars"
            :key="tabbar.name"
            :to="tabbar.path"
        >
            <i class="icon" v-html="tabbar.meta.icon"></i>
            <span>{{tabbar.meta.title}}</span>
        </router-link>
    </ul>
</template>

<script>
    import routes from '@/router/routes'
export default {
    data () {
        return {
            tabbars: routes.filter(route => route.meta.isTabbar)
        }
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

}
</style>
