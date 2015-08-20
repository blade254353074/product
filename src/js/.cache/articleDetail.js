/*TMODJS:{"version":9,"md5":"04d4b396acf7ab304212671186838277"}*/
template('articleDetail',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,id=$data.id,title=$data.title,avatar=$data.avatar,author=$data.author,time=$data.time,cover=$data.cover,$string=$utils.$string,content=$data.content,$out='';$out+='<div class="article-detail" data-id="';
$out+=$escape(id);
$out+='"> <div class="paper reader-text"> <div class="article-header"> <h3 class="title">';
$out+=$escape(title);
$out+='</h3> <div class="meta"> <a href="javascript:;"><img src="';
$out+=$escape(avatar);
$out+='" class="avatar"></a> <div class="meta-main"> <p>';
$out+=$escape(author);
$out+='</p> <p>';
$out+=$escape(time);
$out+='</p> </div> </div> <div class="thumbnail"> <img src="';
$out+=$escape(cover);
$out+='"> </div> </div> <div class="article-body">';
$out+=$string(content);
$out+='</div> </div> <div class="artcle-tool"></div> </div> ';
return new String($out);
});