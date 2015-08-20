// app.vue
<style>
.red {
    color: red;
}
</style>
<template v-ref="aaa">
    <component is="{{headerView}}" keep-alive></component>
    <ul class="nav">
        <component  is="{{navigationView}}"
                    v-repeat="menu"
                    v-ref="menu"></component>
    </ul>
    <component is="{{pageView}}" keep-alive></component>
</template>
<script>
module.exports = {
    data: function() {
        return {
            headerView: 'header',
            navigationView: 'navigation',
            pageView: 'page',
            menu: [{
                title: '成员',
                icon: 'icon-user',
                open: false,
                children: [{
                    title: '添加',
                    hash: '#/page/member/add',
                    active: false
                }, {
                    title: '列表',
                    hash: '#/page/member/list/1',
                    active: false
                }]
            }, {
                title: '产品',
                icon: 'icon-th',
                children: [{
                    title: '添加',
                    hash: '#/page/product/add',
                    active: false
                }, {
                    title: '列表',
                    hash: '#/page/product/list/1',
                    active: false
                }]
            }, {
                title: '文章',
                icon: 'icon-file',
                children: [{
                    title: '列表',
                    hash: '#/page/article/list/1',
                    active: false
                }]
            }, {
                title: '界面配置',
                icon: 'icon-scale',
                children: [{
                    title: '设置',
                    hash: '#/page/option/setup',
                    active: false
                }]
            }]
        }
    },
    components: {
        header: require('./public/header.vue'),
        navigation: require('./public/navigation.vue'),
        page: require('./public/page.vue')
    }
}
</script>
