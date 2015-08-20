/*TMODJS:{"version":39,"md5":"350c904aeb6960078d8fa9ad39dfc555"}*/
template('product',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,list=$data.list,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$string=$utils.$string,total=$data.total,page=$data.page,$out='';$out+='<div class="container-fluid"> <div class="row product-wrapper reader-text"> ';
$each(list,function($value,$index){
$out+=' <div class="col-lg-4"> <article class="product"> <a href="/#/product/detail/';
$out+=$escape($value.id);
$out+='"> <div class="bg" style="background-image: url(';
$out+=$escape($value.cover);
$out+=');"></div> <div class="content"> <h4 class="title">';
$out+=$escape($value.title);
$out+='</h4> <div class="summary">';
$out+=$escape($value.summary);
$out+='</div> </div> </a> </article> </div> ';
});
$out+=' </div> <nav class="text-center" style="padding-bottom: 30px;"> <ul class="pagination">';
$out+=$string($helpers. paging(total ,  page, '/#/product/list/'));
$out+='</ul> </nav> </div> ';
return new String($out);
});