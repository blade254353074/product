var $ = require('jquery'),
    template = require('../helper'),
    global = require('../global');

module.exports = function() {
    console.log('init');
    var hash = window.location.hash;
    var activeUrl = hash.match(/^#\/[^\/]+/)[0];
    global.$header.find('.active').removeClass('active');
    global.$header.find('a[data-link="/' + activeUrl + '"]').parent().addClass('active');
    if (hash == '#/' || hash == '') {
        window.location.hash = '/#/intro';
    }
};
