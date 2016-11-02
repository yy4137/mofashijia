//品牌历程
var arr = [];
var img1 = $("#img1");
$(div1).append(img1);
function requestA(obj,callback) {
        var request=new XMLHttpRequest();
        request.open('GET',obj.url,true)
        request.send();
        request.onreadystatechange=function() {
          if (request.readyState == 4 && request.status == 200) {
              var str = request.responseText;
               var obj = JSON.parse(str);
              if (callback) {
                callback(obj);
                }
             }
         }
      }
 requestA({url:"../../php/code/trademark.php"},function(obj){
   for (var i = 0; i < obj.length; i++) {
      arr.push(obj[i])
      // console.log(arr);
      change(obj);
   }
})

var li1 =$(".ks_li");
function change(obj){
	for (var i = 0; i < li1.length; i++) {
	  $(li1[i]).on("mouseover",function(){
        var i = $(".ks_li").index($(this));
        for (var k =0;k <li1.length;k++) {
           li1[k].style.backgroundPosition="0 0px";
        }
       this.style.backgroundPosition = "0 -90px";
       img1[0].src="../../php/img/"+arr[i].t_img;
        //console.log(arr[i].t_id);


    })
	}
  img1[0].src="../../php/img/"+arr[0].t_img;

}
