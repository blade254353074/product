var $ = require('jquery'),
    template = require('../helper'),
    global = require('../global');

module.exports = function() {
    console.log('我是产品');

    var hash = window.location.hash;
    if (hash == '#/product') {
        window.location.hash = '#/product/list/1';
    }
};
