var $ = require('jquery'),
    template = require('../helper'),
    global = require('../global'),
    particle = require('../particleground');

var pg;
module.exports = {
    on: function() {
        console.log('我是介绍页');
        global.$app.html(template('intro', {})).addClass('full');
        pg = particleground(document.getElementById('intro'), {
            dotColor: '#34AAFF',
            lineColor: '#34AAFF'
        });
    },
    after: function() {
        try {
            global.$app.removeClass('full');
            pg.disable();
        } catch (e) {
            console.error(e);
        }
    }
}
