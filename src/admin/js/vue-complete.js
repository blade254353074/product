var Vue = require('vue');

module.exports = function() {
    Vue.use(require('vue-resource'));
    return Vue;
}();
