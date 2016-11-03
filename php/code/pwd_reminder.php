<?php

   $name4 = $_GET["user_name"];
   $email = $_GET["E_mail"];

   $mysql = new mysqli("localhost","root","","mofashijia");
   if($mysql->connect_errno){
     die($mysql->connect_errno);
   }
   $mysql->query("set names utf8");
   $sqlstr = "SELECT * FROM `register` WHERE `user_name`='".$name4."'";

  $result=$mysql->query($sqlstr);
     $myArray = array();
     while($record = $result->fetch_assoc()) {
           array_push($myArray,$record);
     }
     $a = $myArray[0]["user_name"];
     $b = $myArray[0]["E_mail"];
    if ($name4==$a && $email==$b) {
      $c =["state"=>"ture"];
      echo json_encode($c);
    }else{
      $c =["state"=>"false"];
      echo json_encode($c);
    }









?>
