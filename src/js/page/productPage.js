var $ = require('jquery'),
    template = require('../helper'),
    global = require('../global');


module.exports = function(page) {
    console.log('正在读取');
    if (page == 1) {
        global.$app.empty();
    }
    global.$app.append(template('./public/loading',{
        url: window.location.href
    }));
    $.ajax({
        url: '/api/proedAction!getList.action',
        dataType: 'json',
        data: {page: page},
    })
    .done(function(data) {
        global.$app.html(template('product', data));
    })
    .fail(function() {
        console.log("error");
    });
};
