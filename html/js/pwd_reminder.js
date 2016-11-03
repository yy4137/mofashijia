//找回密码
 var name3 = document.querySelector("#user_name");
 var email = document.querySelector("#E_mail");
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
 var a=name3.value
 var b=email.value
 requestA({url:'../../php/code/pwd_reminder.php?user_name='+a+'&E_mail='+b},function(obj){

     console.log(obj);
   if(obj.state==true) {
      console.log("iii");
    location.assign('http://127.0.0.1/mofashijia/html/html/index.html');
  }else if(obj.state == "false") {
    location.assign('http://127.0.0.1/mofashijia/html/html/user.html');
    // alert("xxxxx");
   }
   console.log(obj.state);
   })

 }
