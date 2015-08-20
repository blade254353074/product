/*TMODJS:{"version":12,"md5":"8e8cfeb0850b85f86c4d9f75b74e2e5a"}*/
template('articleList',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,list=$data.list,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$string=$utils.$string,total=$data.total,page=$data.page,cate=$data.cate,$out='';$out+='<ul> ';
$each(list,function($value,$index){
$out+=' <li class="article-img"> <a class="wrap-img" href="/#/article/detail/';
$out+=$escape($value.id);
$out+='"><div class="bg" style="background-image:url(';
$out+=$escape($value.cover);
$out+=')"></div></a> <div class="wrap-text"> <p class="list-top"> <a href="" class="author-name">';
$out+=$escape($value.author);
$out+='</a> <em>·</em> <span class="time" title="';
$out+=$escape($value.time);
$out+='">';
$out+=$escape($helpers. dateDiff($value.time ));
$out+='</span> </p> <h4 class="title"><a href="/#/article/detail/';
$out+=$escape($value.id);
$out+='">';
$out+=$escape($value.title);
$out+='</a></h4> <div class="list-footer"> <a href="/#/article/detail/';
$out+=$escape($value.id);
$out+='">阅读 ';
$out+=$escape($value.read);
$out+='</a> <em>·</em> <a href="/#/article/detail/';
$out+=$escape($value.id);
$out+='">喜欢 ';
$out+=$escape($value.like);
$out+='</a> </div> </div> </li> ';
});
$out+=' </ul> <nav class="text-center"> <div class="pagination" style="margin-top:30px;">';
$out+=$string($helpers. paging(total ,  page, cate));
$out+='</div> </nav> ';
return new String($out);
});