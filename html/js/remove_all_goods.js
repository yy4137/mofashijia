 //所有产品下拉框
 var me =$(".menu-item-display");
 var sub = $(".sub-menu-cat");
 var ff = false;
   me.hover(function(){
     if(ff == false){
   	sub.css({
      display : "block"
    })
    $(sub).animate({
      height:"375px"
    })
   return ff = true;
  }
},function(){
  if(ff == true){

         $(sub).animate({height:"0px"},function(){
            sub.css({
                   display :"none"
                 })
         });
      	return ff = false;
  }
})


//膜法品牌下拉框
var mfpp = $("#mfpp");
var submenu = $("#ss");
var dd = false;
mfpp.hover(function(){
  if(dd == false){
 submenu.css({
   display : "block"
 })
 $(submenu).animate({
   height:"200px"
 })
return dd = true;
}
},function(){
if(dd == true){

      $(submenu).animate({height:"0px"},function(){
         submenu.css({
                display :"none"
              })
      });
     return dd = false;
}
})

//关于我们下拉框
var aboutOurs = $("#aboutOurs");
var sub_menuO = $("#dd");
var ff = false;
aboutOurs.hover(function(){
  if(ff == false){
 sub_menuO.css({
   display : "block"
 })
 $(sub_menuO).animate({
   height:"120px"
 })

return ff = true;
}
},function(){
if(ff == true){

      $(sub_menuO).animate({height:"0px"},function(){
         sub_menuO.css({
                display :"none"
              })
      });
     return ff = false;
}
})






// aboutOurs.onmouseover = function(){
//
// 	sub_menuO.style.display = "block";
// 	aboutOurs.onmouseout = function(){
// 	sub_menuO.style.display = "none";
// 	}
// }


//右边快捷栏的鼠标移入移出事件
//客服
var kefu = document.querySelector('#kef');
var div8 = document.querySelector("#divQQbox");
kefu.onmouseover = function(){
  div8.style.display = "block";
}
div8.onmouseover=function(){
  div8.style.display = "block";
  kefu.style.display = "none"
}
div8.onmouseout = function(e) {
  div8.style.display = "none";
  kefu.style.display = "block"
  var ev = e || window.event;
  if(ev.stopPropagation){
    ev.stopPropagation();
  }else{
    ev.cancelBubble = true;
  }
}
//加盟
var jm = document.querySelector("#jm");
var jiam = document.querySelector("#jiam");
jm.onmouseover = function(){
  jiam.style.display = "block";
}
jiam.onmouseover=function(){
  jiam.style.display = "block";
  jm.style.display = "none"
}
jiam.onmouseout = function(e) {
  jiam.style.display = "none";
  jm.style.display = "block"
  var ev = e || window.event;
  if(ev.stopPropagation){
    ev.stopPropagation();
  }else{
    ev.cancelBubble = true;
  }
}
//膜法微商
var code = document.querySelector("#code");
var coded = document.querySelector("#coded");
code.onmouseover = function(){
  coded.style.display = "block";
}
jiam.onmouseover=function(){
  coded.style.display = "block";
  code.style.display = "none"
}
coded.onmouseout = function(e) {
  coded.style.display = "none";
  code.style.display = "block"
  var ev = e || window.event;
  if(ev.stopPropagation){
    ev.stopPropagation();
  }else{
    ev.cancelBubble = true;
  }
}
