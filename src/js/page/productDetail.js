var $ = require('jquery'),
    template = require('../helper'),
    global = require('../global');

module.exports = {
    on: function(id) {
        console.log('读取文章 ' + id);
        var $loading = $(template('./public/loading', {
            url: window.location.href
        }));
        global.$app.append($loading);
        $.ajax({
            url: '/api/proedAction!getProed.action',
            dataType: 'json',
            data: {id: id},
        })
        .done(function(data) {
            $loading.remove();
            global.$app.html(template('productDetail', data));
            global.$app.find('#close').on('click', function(e) {
                if (window.history.length == 0) {
                    window.location.href = '/#/product/list/1';
                    return;
                }
                window.history.go(-1);
            });
            global.$body.scrollTop(0);
        })
        .fail(function() {
            console.log("error");
        });
    },
    after: function() {
    }
}
