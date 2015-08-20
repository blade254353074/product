/*TMODJS:{"version":3,"md5":"95f9409add48107b42f27a7a4cbe3548"}*/
template('public/articleList',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,list=$data.list,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$string=$utils.$string,total=$data.total,page=$data.page,$out='';$out+='<ul> ';
$each(list,function($value,$index){
$out+=' <li class="article-img"> <a class="wrap-img" href="/#/article/detail/';
$out+=$escape($value.id);
$out+='"><img src="';
$out+=$escape($value.cover);
$out+='"></a> <div class="wrap-text"> <p class="list-top"> <a href="" class="author-name">';
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
$out+='">评论 ';
$out+=$escape($value.comment);
$out+='</a> <em>·</em> <a href="/#/article/detail/';
$out+=$escape($value.id);
$out+='">喜欢 ';
$out+=$escape($value.like);
$out+='</a> </div> </div> </li> ';
});
$out+=' </ul> <nav class="text-center"> <div class="pagination">';
$out+=$string($helpers. paging(total ,  page, '/#/article/list/'));
$out+='</div> </nav> ';
return new String($out);
});