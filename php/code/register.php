<?php

    $name = $_POST["user_name"];
    $email = $_POST["E-mail"];
    $pwd = $_POST["user_pwd"];
    $cpwd = $_POST["confirm_pwd"];
    $acode = $_POST["auth_code"];
    $mysql = new mysqli("localhost","root","","mofashijia");
    if($mysql->connect_errno){
      die($mysql->connect_errno);
    }
    $mysql->query("set names utf8");

    $sqlstr="insert into register values(\"".$name."\",\"".$email."\",\"".$pwd."\",\"".$cpwd."\",\"".$acode."\")";

    $result=$mysql->query($sqlstr);
    $a = ['state'=>$result];
    echo json_encode($a);
     var_dump($result);
     header("location: http://127.0.0.1/mofashijia/html/html/load.html");

?>
