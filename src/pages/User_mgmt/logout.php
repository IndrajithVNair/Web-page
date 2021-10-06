<?php

session_start();

     if(isset($_SESSION['username']) or isset($_SESSION['userrole']))
     {
     	unset($_SESSION['username']);
     	unset($_SESSION['userrole']);
     }
     header("Location:Usignup.php");

?>
