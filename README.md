#product

*admin的html文件路径：

 /src/html/admin/index.html

 html片段:

    <body>
        <div id="app">
            <component is="{{currentView}}" v-ref="app"></component>
        </div>
        <script src="/assets/admin/js/app.min.js"></script>
    </body>

*JS入口文件

 /src/admin/js/app.js

 Vue是添加过vue-resource组件的

*一层组件在/src/admin/js/component.js

*vue组件位置为:

 /src/admin/js/components/*.vue

 /src/admin/js/components/public/*.vue
