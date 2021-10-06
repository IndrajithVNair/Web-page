<?php

session_start();

include_once("./include/db_connection.php");

if(isset($_GET['regstatus'])){
if($_GET['regstatus']=="success"){
  echo '<script>alert("registration succesful")</script>';
}
}

if ($_SERVER['REQUEST_METHOD'] == "POST") {
  if ($conn->connect_error) {
    die("Failed connection : " . $conn->error);
    echo '<script>alert("connection failed")</script>';
  } else {
    if (isset($_POST['submit'])) {
      $mailid = $_POST['mailid'];
      $password = $_POST['password'];

      $check = $conn->prepare("select userName,userStatus,userRole from usertable where mailId = ? and password = ?");
      $check->bind_param("ss", $mailid, $password);
      if ($check->execute()) {
        $checkresult = $check->get_result()->fetch_all(MYSQLI_ASSOC);
        $check->close();
        if (count($checkresult) != 1) {
          // echo '<script>alert("Invalid Credentials")</script>';
          $check = $conn->prepare("select userName,userStatus,userRole from usertable where userName = ? and password = ?");
          $check->bind_param("ss", $mailid, $password);

          if ($check->execute()) {
            $checkresult = $check->get_result()->fetch_all(MYSQLI_ASSOC);
            $check->close();
            if (count($checkresult) != 1) {
              echo '<script>alert("Invalid Credentials")</script>';
            } else {
              if ($checkresult[0]['userStatus'] == 1) {
                $_SESSION['username'] = $checkresult[0]['userName'];
                $_SESSION['userrole'] = $checkresult[0]['userRole'];
                header("Location:LandingPage.php?login=success");
              } else {
                echo '<script>alert("Invalid credentials")</script>';
              }
            }
          } else {
            echo '<script>alert("Login Failed")</script>';
          }
        } else {
          if ($checkresult[0]['userStatus'] == 1) {
            // session variables
            $_SESSION['username'] = $checkresult[0]['userName'];
            $_SESSION['userrole'] = $checkresult[0]['userRole'];
            header("Location:LandingPage.php?login=success");
          } else {
            echo '<script>alert("Invalid credentials")</script>';
          }
        }
      } else {

        echo '<script>alert("Login Failed")</script>';
      }
    }
  }
}

?>


<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from colorlib.com/etc/regform/colorlib-regform-7/ by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 10 Sep 2021 17:58:04 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Road Pro</title>

  <link rel="stylesheet" href="/static/fonts/material-icon/css/material-design-iconic-font.min.css">

  <link rel="stylesheet" href="static/css/Usignup.css">
  <meta name="robots" content="noindex, follow">

  <style type="text/css">
    .validationwarning {
      position: relative;
      bottom: 0;
      left: 0;
      padding: 8px;
      visibility: visible;
      color: red;
      /*       width: 350px;
      height: 350px; */
    }
  </style>


</head>

<body>
  <div class="main">
    <section class="sign-in">
      <div class="container">
        <div class="signin-content">
          <div class="signin-image">
            <figure><img src="#" alt=""></figure>

          </div>
          <div class="signin-form">
            <h2 class="form-title">Sign up</h2>
            <form method="POST" class="register-form" id="login-form" action="#" autocomplete="off" onsubmit="return form_validation_login();">
              <div class="form-group">
                <label for="mailid"><i class="zmdi zmdi-account material-icons-name"></i></label>
                <input type="text" name="mailid" id="mailid" placeholder="Email or username" />
                <small class="validationwarning" id="usernamewarning"></small>
              </div>
              <div class="form-group">
                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                <input type="password" name="password" id="password" placeholder="Enter your password" />
                <small class="validationwarning" id="passwordwarning"></small>
              </div>
              <!-- <div class="form-group">
<input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
<label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
</div> -->

              <div class="form-group form-button">
                <input type="submit" value="Login" class="form-submit" name="submit" id="submit" />
              </div>
              <div class="form-group">
                <a href="Uregistration.php?status=0&role=4" class="signup-image-link">Not a Road Pro User, Register here !</a>
              </div>


            </form>
          </div>
        </div>
      </div>
    </section>
  </div>

  <script src="static/js/Usignin.js"></script>

  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-23581568-13');
  </script>
  <script defer src="../../../../static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"rayId":"68ca8ad3998e0e20","token":"cd0b4b3a733644fc843ef0b185f98241","version":"2021.8.1","si":10}'></script>


</body>

</html>