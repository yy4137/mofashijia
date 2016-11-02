<?php

   $name2 = $_GET["user_name"];
   $pwd1 = $_GET["user_pwd"];

   $mysql = new mysqli("localhost","root","","mofashijia");
   if($mysql->connect_errno){
     die($mysql->connect_errno);
   }
   $mysql->query("set names utf8");

  //  $sqlstr="select * from register where user_name=\".$name2.\"and user_pwd=\".$pwd1.\"";
    // $sqlstr="select * from register where user_name=\".$name2.\"and user_pwd=\".$pwd1.\"";
 $sqlstr = "SELECT * FROM `register` WHERE `user_name`='".$name2."' AND `user_pwd` ='".$pwd1."'";
  //$sqlstr = "SELECT * FROM `register` WHERE `user_name` LIKE '%".$name2."%' AND `user_pwd`  LIKE '%".$pwd1."%'";
  //  $result=$mysql->query($sqlstr);
  //  $a = ['state'=>$result];
  //  echo json_encode($a);
  //   var_dump($result);
  $result=$mysql->query($sqlstr);
     // var_dump($result);
     $myArray = array();

     while($record = $result->fetch_assoc()) {
           array_push($myArray,$record);
     }
    //  print_r($myArray);
     $a = $myArray[0]["user_name"];
     $b = $myArray[0]["user_pwd"];
     if($a == $name2 && $b ==$pwd1){
       $c =["state"=>"true"];
       echo json_encode($c);
      //  header("location: http://127.0.0.1/mofashijia/html/html/index.html");
     }else {
        $c =["state"=>"false"];
        echo json_encode($c);
     }









?>
