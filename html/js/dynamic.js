// var arr = [{
// 	img:"../img/2014 上海悦目年会.png",
// },{
// 	img:"../img/战狼拓展训练.png",
// },{
// 	img:"../img/双十一大事件.png",
// },{
// 	img:"../img/圣诞狂欢节.png",
// },{
// 	img:"../img/区域间美容联谊活动.png",
// },{
// 	img:"../img/快乐38节.png",
// },{
// 	img:"../img/膜法世家的天然膜护理之行.png",
// },{
// 	img:"../img/milk skin party.png",
// }];
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
 requestA({url:"../../php/code/dynamic.php"},function(obj){
   console.log(obj);
      test(obj);

})


function test(arr){
	arr.push(arr[0]);

//	arr.push(arr[1]);
	arr.unshift(arr[arr.length-2]);
  console.log(arr);
//	arr.unshift(arr[arr.length-4])
	var sld = $(".sliders");
	var ul = $("<ul></ul>");
	ul.addClass("ula");
	sld.append(ul);
	for (var i =0;i< arr.length;i++) {
		var li =$("<li></li>");
	    li.addClass("lia");
	    var a = $("<a></a>");
		  a[0].href =arr[i].d_href;
	    li.append(a);
	    var img = $("<img/>");
	    img[0].src = "../../php/img/"+arr[i].d_img;
	    a.append(img);
	    ul.append(li);
	}
	ul.css({
		left:-li.width() +"px"
	})
	 var left = $(".left");
	left.on("click",function(){
		var off=  ul.position().left;
		off += li.width();
		ul.css({
			left:off
		})
		if(off >= 480){
			ul.css({
				left:-li.width()-2*li.width()
			})
		}
	})

	var right = $(".right");
	right.on("click",function(){
		var off = ul.position().left;
		off -= li.width();
		ul.css({
			left:off
		})
		if(off <= -3840){
			ul.css({
				left:-li.width()
			})
		}
	})
}
