/*TMODJS:{"version":19,"md5":"77be08cd34d3c167a6c18276716b0010"}*/
template('productDetail',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,cover=$data.cover,title=$data.title,summary=$data.summary,content=$data.content,$out='';$out+='<div class="product-article reader-text"> <div class="paper"> <div class="content"> <a href="javascript:;" id="close" class="close"></a> <div class="paper-header" style="background-image: url(';
$out+=$escape(cover);
$out+=')"> <div class="bg"></div> <div class="text"> <h3 class="title">';
$out+=$escape(title);
$out+='</h3> <p class="summary">';
$out+=$escape(summary);
$out+='</p> </div> </div> <div class="paper-body"> <article> ';
$out+=$escape(content);
$out+=' </article> </div> </div> </div> </div> ';
return new String($out);
});