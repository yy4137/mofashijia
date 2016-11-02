//膜法世家体验店加盟
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
   requestA({url:"../../php/code/K_Point.php"},function(obj){
    //  console.log(obj);


          test(obj);

  })
var lc_t = $(".licheng-title");
function test(arr){
	var ul = $("<ul/>");
  ul.addClass("gg")
	lc_t.append(ul);

  for(var i = 0; i < arr.length; i++) {
     var li = $("<li/>");
     $('.gg').append(li);
     var div1 = $("<i/>");
     div1[0].data = arr[i];
     div1.addClass("i1");
     li.append(div1);
     var spanimg = $("<span/>");
     li.append(spanimg);
     spanimg.text(arr[i].k_title);

     var lc_img = $("<div/>");
     lc_img.addClass("licheng-img");
     lc_t.append(lc_img);

       var img2 = $("<img/>");
       lc_img.append(img2);
       img2.addClass("img2");
       img2[0].src = "../../php/img/"+arr[i].k_img;

      var divs = $(".i1");
       div1.on("mouseover",function(){

        //  console.log(k);
        var imgs = $(".img2");
        for (var i = 0; i < imgs.length; i++) {
          imgs[0].src="../../php/img/"+this.data.k_img;
          $(divs).css({
            background:"rgb(85,35,8)"
          })
        }
        $(this).css({
          background:"rgb(128,65,33)"
        })
         console.log(this.data.k_img);
     })



  }

}
