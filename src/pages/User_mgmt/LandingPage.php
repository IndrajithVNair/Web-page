<?php

session_start();



if(isset($_GET['login'])){{

    if($_GET['login']=="success"){
        if(isset($_SESSION['username']) and isset($_SESSION['userrole'])){
            $username = $_SESSION['username'];
            $userrole = $_SESSION['userrole'];
            echo "<h1>welcome ".$username."</h1>";
            switch($userrole){
                case 0: echo "<h1>Hello Admin !</h1>"; break;
                case 1: echo "<h1>Hello RTO Officer !<h1>"; break;
                case 2: echo "<h1>Hello Traffic Officer !<h1>"; break;
                case 3: echo "<h1>Hello Civil Police Officer !<h1>"; break;
                case 4: echo "<h1>Hello User !<h1>"; break;
            }
        }
    }
}
}else{
    if(isset($_GET['reg'])){
    
        if($_GET['reg']=="success"){
            header("Location:http://localhost/Usignup.php?regstatus=success");
          }
        }else{
            header("Location:Usignup.php");
        }    
}

?>


<html>
<head>
    <title>RoadPro</title>
</head>
<body>
    <h2> landing page ...</h2>
    <a href="Usignup.php">Sign In</a><br>
    <a href="logout.php">Logout</a>
</body>
</html>