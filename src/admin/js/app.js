var director = require('director'),
    cookie = require('./cookie');

var Vue = require('./vue-complete');

Vue.http.options.complete = function(data, status, response) {
    if (status === 401) {
        cookie.delCookie('un');
        window.location.hash = '#/login';
    }
};
(function() {
    if (!window.console) {
        window.console = {};
        window.console.log = function() {};
    } //IE9煞笔

    var routes = {
        '/': 'welcome',
        '/login': 'login',
        '/logout': 'logout',
        '/page': {
            on: 'page',
            '/member': {
                '/add': 'mbAdd',
                '/list/:page': 'mbList'
            },
            '/product': {
                '/add': 'pdAdd',
                '/list/:page': 'pdList'
            },
            '/article': {
                '/list/:page': 'artList'
            },
            '/option': {
                '/setup': 'optSetup'
            }
        }
    };

    var app = require('./component'); //Vue实例 —— app

    var notfound = function() {
        app.currentView = 'notfound';
    }; // 未找到页面

    var container = {
        welcome: function() {
            if (cookie.getCookie('un') == '') {
                window.location.hash = '#/login';
                return;
            }
        },
        login: function() {
            app.currentView = 'login';
        },
        logout: function() {
            Vue.http.get('/api/', function(data) {
                if (data.state) {
                    window.location.hash = '/login';
                }
            });
        },
        page: function() {
            if (window.location.hash != '#/login' && window.location.hash != '#/logout') {
                console.log('加载框架');
                app.currentView = 'app';
                console.log(app.$);
                //new Vue(require('./app.vue')).$mount('#header');
            }
        },
        mbAdd: function() {
            console.log(app.$.app);
        },
        mbList: function(page) {
            console.log('成员列表: ' + page);
        },
        pdAdd: function() {

        },
        pdList: function(page) {
            console.log('产品列表: ' + page);
        },
        artList: function(page) {
            console.log('文章列表: ' + page);
        },
        optSetup: function() {
        }
    };

    var routerBefore = function() {
            console.log('routerBefore');
        },
        routerOn = function() {
            console.log('routerOn');
        },
        routerAfter = function() {
            console.log('routerAfter');
        };
    var router = director.Router(routes).configure({
        recurse: 'forward',
        strict: true, //当值为"false"时，路径允许以"/"结尾（也可以是其他自定义的分隔符）；默认值是"true"，说明默认不允许路径以"/"结尾
        resource: container,
        notfound: notfound,
        before: routerBefore,
        on: routerOn,
        after: routerAfter
    });
    if (window.location.hash !== '#/login') {
        //页面不为login，检测登录
/*        Vue.http.get('/api/log/memberAction!memCheckLog.action', function(data, status, request) {
            if (data.state == true) {
                //已登录，跳转页面
                cookie.setCookie('un', 'admin');
                window.location.hash = '#/page';
            } else {
                //未登录，跳转登录hash
                cookie.delCookie('un');
                window.location.hash = '#/login';
            }
            router.init('/');
        }).error(function(data, status){
            if (status === 401) {
                cookie.delCookie('un');
                router.init('/login');
                window.location.hash = '#/login';
            }
        });*/

        cookie.setCookie('un', 'admin');
        router.init('/');
    } else {
        //页面为login
        //router初始化
        router.init('/');
    }
}());
