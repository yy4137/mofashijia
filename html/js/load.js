
      var name1 =document.querySelector("#user_name");
      var pwd = document.querySelector("#user_pwd");
      var btn = document.querySelector(".submit");

      function requestA(obj,callback) {
        var request=new XMLHttpRequest
        request.open('GET',obj.url,true)
        request.send();
        request.onreadystatechange=function  () {
          if (request.readyState==4&&request.status==200) {
              var str=request.responseText;
              var obj = JSON.parse(str);
              if (callback) {
                callback(obj);
                //console.log(obj);
                }
             }
         }
      }
      btn.onclick=function() {
      var a=name1.value
      var b=pwd.value
      requestA({url:'../../php/code/load.php?user_name='+a+'&user_pwd='+b},function(obj){

          console.log(obj);
        if(obj.state=='true') {
           console.log("iii");
         location.assign('http://127.0.0.1/mofashijia/html/html/index.html');
        }else {
         //  alert(obj);
        }

        })

      }
