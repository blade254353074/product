var compiler = require('vueify');
var sass = require('node-sass');
var postcss = require('postcss');
var autoprefixer = require('autoprefixer-core');

module.exports = function(compiler) {
    // register a compile function for <style lang="stylus-prefixed">
    compiler.register({
        lang: 'scss',
        type: 'style',
        compile: function(content, cb) {
            sass.render({
                data: content,
                //includePaths: ['lib/', 'mod/'],
                //outputStyle: 'compressed'
            }, function(error, result) { // node-style callback from v3.0.0 onwards
                if (error) {
                    console.log(error.status); // used to be "code" in v2x and below
                    console.log(error.column);
                    console.log(error.message);
                    console.log(error.line);
                } else {
                    postcss([autoprefixer({
                        browsers: ['last 2 version', 'safari 5', 'ie 9', 'ios 6', 'android 2.3']
                    })]).process(result.css).then(function(result) {
                        result.warnings().forEach(function(warn) {
                            console.warn(warn.toString());
                        });
                        cb(error, result.css);
                    });
                }
            });
        }
    });
};
