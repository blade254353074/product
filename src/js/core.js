var $ = require('jquery');
var director = require('director'),
    template = require('./helper'),
    cookie = require('./cookie');
module.exports = function() {
    console.log('router');
    // director();

    var $app = $('#app');
    var $header = $('#header');
    var $footer = $('#footer');

    $header.html(template('./public/navigation', {}));

    (function() {
        var notfound = function() {

        };

        var routes = {
            '/': 'index',
            '/intro': require('./page/intro'),
            '/product': {
                on: 'product',
                '/list/:page': 'productPage',
                '/detail/:id': require('./page/productDetail')
            },
            '/article': {
                on: require('./page/article'),
                '/cate/?([^\/]*)\/([^\/]*)/?': require('./page/articleCate'),
                '/detail/:id': require('./page/articleDetail')
            },
            '/team': 'team',
            '/contact': 'contact',
            '/join': 'join'
        };

        var container = {
            index: require('./page/index'),
            product: require('./page/product'),
            productPage: require('./page/productPage'),
            team: function() {},
            contact: function() {},
            join: function() {}
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
        }).init('/intro');
    }());
}
