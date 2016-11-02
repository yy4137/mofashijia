 //注册
(function() {
    $(".submit").click(function(){
      var name1 =document.querySelector("#user_name").val();
      var email = document.querySelector("#E-mail").val();
      var pwd=document.querySelector("#user_pwd").val();
      var cpwd = document.querySelector("#confirm_pwd").val();
      var acode = document.querySelector("#auth_code").val();
      // var btn=document.querySelector(".submit");
      //如果这些内容为不等于空
      if(name1 != "" && email != "" && pwd !="" && cpwd != "" && acode !=""){
          if(name1.length == 11 && ){
            if(email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/)) {
              if (pwd.match(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/)) {
                 if(pwd == cpwd){
                   return true;
                 }else {
                    alert("密码两次输入不符合！");
                    return false;
                  }
               else{
                 alert("密码格式不正确！");
                 return false
               }
              }
            else {
              alert("邮箱格式错误");
              return false;
            }
          }else {
             alert("用户名0-11位，请重新填写！");
             return false;
          }
        else {
          alert("请填写完整！");
          return false;
        }










    })
})






    function requestA(obj,callback) {
       var request = new XMLHttpRequest();
       request.open('GET',obj.url,true);
       request.send();
       request.onreadystatechange = function() {
         if (request.readyState == 4 && request.status == 200) {
             var str = request.responseText;
             var obj = JSON.parse(str);
             if (callback) {
               callback(obj);
               }
            }
        }
     }
     //console.log(pwd);
     btn.onclick=function() {
         var newname= name1.value;
         var newemail = email.value;
         var newpwd= pwd.value;
         var newcpwd = cpwd.value;
         var newacode = acode.value;

         requestA({url:'../php/code/register.php?user_name='+newname+'&E-mail='+newemail+'&user_pwd='+newpwd+'&cpwd='+newcpwd+'&acode='+newacode},function(obj){
               //console.log(obj);
               if(obj.state==true) {
                 console.log("iii");
                 //window.location.assign("www.baidu.com");
               }else {
                //  alert(obj);
               }

         })

     }
