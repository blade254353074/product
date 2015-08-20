var $ = require('jquery'),
    template = require('../helper'),
    global = require('../global');

module.exports = function() {
    console.log('init');
    var hash = window.location.hash;
    var activeUrl = hash.match(/^#\/[^\/]+/)[0];
};
