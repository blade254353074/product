module.exports = function() {
    if (window.location.hash != '#/login' && window.location.hash != '#/logout') {
        if (frameLoad) {
            return;
        }
        console.log('加载框架');
        app.currentView = 'app';
        //new Vue(require('./app.vue')).$mount('#header');
        frameLoad = true;
    }
}
