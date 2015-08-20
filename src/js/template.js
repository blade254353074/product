/*TMODJS:{"version":"1.0.0"}*/
!function() {
    function template(filename, content) {
        return (/string|function/.test(typeof content) ? compile : renderFile)(filename, content);
    }
    function toString(value, type) {
        return "string" != typeof value && (type = typeof value, "number" === type ? value += "" : value = "function" === type ? toString(value.call(value)) : ""), 
        value;
    }
    function escapeFn(s) {
        return escapeMap[s];
    }
    function escapeHTML(content) {
        return toString(content).replace(/&(?![\w#]+;)|[<>"']/g, escapeFn);
    }
    function each(data, callback) {
        if (isArray(data)) for (var i = 0, len = data.length; len > i; i++) callback.call(data, data[i], i, data); else for (i in data) callback.call(data, data[i], i);
    }
    function resolve(from, to) {
        var DOUBLE_DOT_RE = /(\/)[^/]+\1\.\.\1/, dirname = ("./" + from).replace(/[^/]+$/, ""), filename = dirname + to;
        for (filename = filename.replace(/\/\.\//g, "/"); filename.match(DOUBLE_DOT_RE); ) filename = filename.replace(DOUBLE_DOT_RE, "/");
        return filename;
    }
    function renderFile(filename, data) {
        var fn = template.get(filename) || showDebugInfo({
            filename: filename,
            name: "Render Error",
            message: "Template not found"
        });
        return data ? fn(data) : fn;
    }
    function compile(filename, fn) {
        if ("string" == typeof fn) {
            var string = fn;
            fn = function() {
                return new String(string);
            };
        }
        var render = cache[filename] = function(data) {
            try {
                return new fn(data, filename) + "";
            } catch (e) {
                return showDebugInfo(e)();
            }
        };
        return render.prototype = fn.prototype = utils, render.toString = function() {
            return fn + "";
        }, render;
    }
    function showDebugInfo(e) {
        var type = "{Template Error}", message = e.stack || "";
        if (message) message = message.split("\n").slice(0, 2).join("\n"); else for (var name in e) message += "<" + name + ">\n" + e[name] + "\n\n";
        return function() {
            return "object" == typeof console && console.error(type + "\n\n" + message), type;
        };
    }
    var cache = template.cache = {}, String = this.String, escapeMap = {
        "<": "&#60;",
        ">": "&#62;",
        '"': "&#34;",
        "'": "&#39;",
        "&": "&#38;"
    }, isArray = Array.isArray || function(obj) {
        return "[object Array]" === {}.toString.call(obj);
    }, utils = template.utils = {
        $helpers: {},
        $include: function(filename, data, from) {
            return filename = resolve(from, filename), renderFile(filename, data);
        },
        $string: toString,
        $escape: escapeHTML,
        $each: each
    }, helpers = template.helpers = utils.$helpers;
    template.get = function(filename) {
        return cache[filename.replace(/^\.\//, "")];
    }, template.helper = function(name, helper) {
        helpers[name] = helper;
    }, "function" == typeof define ? define(function() {
        return template;
    }) : "undefined" != typeof exports ? module.exports = template : this.template = template, 
    /*v:25*/
    template("article", '<div id="articleCate" class="article-cate"> <div class="wrapper"> <ul> <li><a href="#/article/cate/all/1">全部</a></li> <li><a href="#/article/cate/front-end-development/1">前端开发</a></li> <li><a href="#/article/cate/back-end-development/1">后端开发</a></li> <li><a href="#/article/cate/visual-design/1">视觉设计</a></li> <li><a href="#/article/cate/team-life/1">团队生活</a></li> </ul> </div> <div class="toggle icon icon-chevron-right"></div> </div> <div id="articleWrapper" class="article-wrapper"> <div id="articleList" class="article-list reader-text"></div> </div> '), 
    /*v:9*/
    template("articleDetail", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), id = $data.id, title = $data.title, avatar = $data.avatar, author = $data.author, time = $data.time, cover = $data.cover, $string = $utils.$string, content = $data.content, $out = "";
        return $out += '<div class="article-detail" data-id="', $out += $escape(id), $out += '"> <div class="paper reader-text"> <div class="article-header"> <h3 class="title">', 
        $out += $escape(title), $out += '</h3> <div class="meta"> <a href="javascript:;"><img src="', 
        $out += $escape(avatar), $out += '" class="avatar"></a> <div class="meta-main"> <p>', 
        $out += $escape(author), $out += "</p> <p>", $out += $escape(time), $out += '</p> </div> </div> <div class="thumbnail"> <img src="', 
        $out += $escape(cover), $out += '"> </div> </div> <div class="article-body">', $out += $string(content), 
        $out += '</div> </div> <div class="artcle-tool"></div> </div> ', new String($out);
    }), /*v:12*/
    template("articleList", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, $each = $utils.$each, list = $data.list, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $string = $utils.$string, total = $data.total, page = $data.page, cate = $data.cate, $out = "";
        return $out += "<ul> ", $each(list, function($value) {
            $out += ' <li class="article-img"> <a class="wrap-img" href="/#/article/detail/', 
            $out += $escape($value.id), $out += '"><div class="bg" style="background-image:url(', 
            $out += $escape($value.cover), $out += ')"></div></a> <div class="wrap-text"> <p class="list-top"> <a href="" class="author-name">', 
            $out += $escape($value.author), $out += '</a> <em>·</em> <span class="time" title="', 
            $out += $escape($value.time), $out += '">', $out += $escape($helpers.dateDiff($value.time)), 
            $out += '</span> </p> <h4 class="title"><a href="/#/article/detail/', $out += $escape($value.id), 
            $out += '">', $out += $escape($value.title), $out += '</a></h4> <div class="list-footer"> <a href="/#/article/detail/', 
            $out += $escape($value.id), $out += '">阅读 ', $out += $escape($value.read), $out += '</a> <em>·</em> <a href="/#/article/detail/', 
            $out += $escape($value.id), $out += '">喜欢 ', $out += $escape($value.like), $out += "</a> </div> </div> </li> ";
        }), $out += ' </ul> <nav class="text-center"> <div class="pagination" style="margin-top:30px;">', 
        $out += $string($helpers.paging(total, page, cate)), $out += "</div> </nav> ", new String($out);
    }), /*v:10*/
    template("index", ""), /*v:9*/
    template("intro", '<div id="intro" class="intro-index"> <div class="intro-text"> <div class="content"> <h1 class="title">Boooooooom!!!</h1> <p>哈哈哈</p> <p>蛤蛤</p> <a href="/#/product" class="view">查看产品</a> </div> </div> </div> '), 
    /*v:39*/
    template("product", function($data) {
        "use strict";
        var $utils = this, $helpers = $utils.$helpers, $each = $utils.$each, list = $data.list, $escape = ($data.$value, 
        $data.$index, $utils.$escape), $string = $utils.$string, total = $data.total, page = $data.page, $out = "";
        return $out += '<div class="container-fluid"> <div class="row product-wrapper reader-text"> ', 
        $each(list, function($value) {
            $out += ' <div class="col-lg-4"> <article class="product"> <a href="/#/product/detail/', 
            $out += $escape($value.id), $out += '"> <div class="bg" style="background-image: url(', 
            $out += $escape($value.cover), $out += ');"></div> <div class="content"> <h4 class="title">', 
            $out += $escape($value.title), $out += '</h4> <div class="summary">', $out += $escape($value.summary), 
            $out += "</div> </div> </a> </article> </div> ";
        }), $out += ' </div> <nav class="text-center" style="padding-bottom: 30px;"> <ul class="pagination">', 
        $out += $string($helpers.paging(total, page, "/#/product/list/")), $out += "</ul> </nav> </div> ", 
        new String($out);
    }), /*v:19*/
    template("productDetail", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), cover = $data.cover, title = $data.title, summary = $data.summary, content = $data.content, $out = "";
        return $out += '<div class="product-article reader-text"> <div class="paper"> <div class="content"> <a href="javascript:;" id="close" class="close"></a> <div class="paper-header" style="background-image: url(', 
        $out += $escape(cover), $out += ')"> <div class="bg"></div> <div class="text"> <h3 class="title">', 
        $out += $escape(title), $out += '</h3> <p class="summary">', $out += $escape(summary), 
        $out += '</p> </div> </div> <div class="paper-body"> <article> ', $out += $escape(content), 
        $out += " </article> </div> </div> </div> </div> ", new String($out);
    }), /*v:10*/
    template("public/loading", '<div class="loading"> <div class="mask"></div> <div class="wrapper"> <div class="loading-animate"> <div class="loading-pic"> <img src="/assets/imgs/loading-bm-01.jpg"> <div class="sentence">『额，开始加载了』</div> </div> <div class="loading-pic"> <img src="/assets/imgs/loading-bm-02.jpg"> <div class="sentence">『等等吧，应该会很快的』</div> </div> <div class="loading-pic"> <img src="/assets/imgs/loading-bm-03.jpg"> <div class="sentence">『好慢啊』</div> </div> <div class="loading-pic"> <img src="/assets/imgs/loading-bm-04.jpg"> <div class="sentence">『卧槽，怎么这么慢！！！』</div> </div> <div class="loading-pic"> <img src="/assets/imgs/loading-bm-05.jpg"> <div class="sentence">『尼玛，再不出来我可要发飙了』</div> </div> <div class="loading-pic"> <img src="/assets/imgs/loading-bm-06.jpg"> <div class="sentence">『啊啊啊，要疯了』</div> </div> <div class="loading-pic"> <img src="/assets/imgs/loading-bm-07.jpg"> <div class="sentence"> <p>『&*%……￥&……%&*￥%￥』</p> <a href="javascript:window.location.reload();" class="btn btn-link">点击重试</a> </div> </div> </div> </div> </div> '), 
    /*v:19*/
    template("public/navigation", '<nav class="navbar"> <div class="navbar-wrapper"> <div class="navbar-brand"> <a class="logo" href="/#/intro" data-link="/#/intro"></a> </div> <ul class="navbar-nav"> <li><a href="/#/product/list/1" data-link="/#/product">产品</a></li> <li><a href="/#/article/cate/all/1" data-link="/#/article">文章</a></li> <li><a href="/#/team" data-link="/#/team">团队</a></li> <li><a href="/#/contact" data-link="/#/contact">联系</a></li> <li><a href="/#/join" data-link="/#/join">加入</a></li> </ul> </div> </nav> ');
}();