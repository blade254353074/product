var Vue = require('./vue-complete');

module.exports = (function() {
    Vue.component('notfound', require('./components/public/notfound.vue'))
    Vue.component('loading', require('./components/public/loading.vue'));
    Vue.component('welcome', require('./components/welcome.vue'));
    Vue.component('login', require('./components/login.vue'));
    Vue.component('app', require('./components/app.vue'));
    var app = new Vue({
        el: '#app',
        data: function() {
            return {
                currentView: 'welcome'
            }
        }
    });
    return app;
}());
