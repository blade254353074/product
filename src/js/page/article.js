var $ = require('jquery'),
    template = require('../helper'),
    global = require('../global');

module.exports = function() {
    console.log('我是文章');
    if ($('#articleCate').length === 0) {
        global.$app.html(template('article', {}));
    }

    var hash = window.location.hash;
    if (hash == '#/article') {
        window.location.href = '/#/article/cate/all/1';
    }
};
