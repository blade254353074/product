var $ = require('jquery'),
    template = require('../helper'),
    global = require('../global');

module.exports = function(name, page) {
    console.log('我是文章');
    if ($('#articleCate').length === 0) {
        global.$app.html(template('article', {}));
    }
    var hash = window.location.hash;

    if (name === '') {
        // 如果没写页数 'cate'
        window.location.hash = hash + '/1';
        return;
    }
    if (page === '') {
        // 'cate/'
        window.location.hash = hash + '1';
        return;
    }
    var $articleCate = $('#articleCate');
    var activeUrl = hash.match(/^#\/article\/cate\/[^\/]+/)[0];
    $articleCate.find('a[href="' + activeUrl + '/1"]').parent().addClass('active').siblings('.active').removeClass('active');
    var pageNum = parseInt(page);
    if (parseInt(page) != page || pageNum < 1) {
        console.log('页数参数错误');
        return;
    }
    console.log(name, page);
    var $articleList = $('#articleList');
    if ($articleList.length === 0) {
        $articleList = $('<div id="articleList" class="article-list reader-text"></div>');
        $('#articleWrapper').html($articleList);
    }
    $articleList.html(template('./public/loading', {}));
    $.ajax({
        url: '/api/artAction!getSomeArt.action',
        dataType: 'json',
        data: {
            type: name,
            page: page
        }
    }).done(function(data) {
        data['cate'] = '/#/article/cate/' + name + '/';
        $articleList.html(template('articleList', data));
        global.$app.animate({
            scrollTop: 0
        }, 200);
    }).fail(function() {
        console.log("error");
    });
};
