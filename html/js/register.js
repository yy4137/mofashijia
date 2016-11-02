 //注册
(function() {
    $(".p_submit").click(function(){
      var name1 =document.querySelector("#user_name").value;
      var email = document.querySelector("#E-mail").value;
      var pwd=document.querySelector("#user_pwd").value;
      var cpwd = document.querySelector("#confirm_pwd").value;
      var acode = document.querySelector("#auth_code").value;
       var btn=document.querySelector(".submit");
      //如果这些内容为不等于空
      if(name1 != "" && email != "" && pwd !="" && cpwd != "" && acode !=""){
        if(name1.length == 11 ){
           if(email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/)){
             if(pwd.match(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/)){
               if(pwd == cpwd){
                  return true;
               }else {
                  alert("密码两次输入不符合！");
                  return false;
               }
             }else{
                 alert("密码格式不正确！");
                 return false;
             }
           }else {
                alert("邮箱格式错误");
                return false;
           }
        }else {
                alert("用户名0-11位，请重新填写！或用户名重复！");
                return false;
        }
      }else {
               alert("请填写完整！");
               return false;

      }


    });

    // window.history.forward(1);


})()
