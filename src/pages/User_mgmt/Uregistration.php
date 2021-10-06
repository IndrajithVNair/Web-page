<!DOCTYPE html>
<html lang="en">
<?php
$status = "";
$role = "";

if(isset($_GET['status'])){
  if($_GET['status'] == 0){
    $status = 0;
  }
}

if(isset($_GET['role'])){
  if($_GET['role'] == 4){
    $role = 4;
  }  

  if($_SERVER['REQUEST_METHOD']=="POST"){
    include_once("./include/db_connection.php");
    if($conn->connect_error){
      die("Failed connection : " . $conn->error);
      echo '<script>alert("connection failed")</script>';
    }else{
      if(isset($_POST['submit'])){
        $aadharno = $_POST['aadharno'];
        $username = $_POST['username'];
        $check = $conn->prepare("select userId from usertable where aadharNo = ?");
        $check->bind_param("s",$aadharno);
        $check->execute();
  
        $checkresult = $check->get_result()->fetch_all(MYSQLI_ASSOC);
        $check->close();
        if(count($checkresult) > 0){
          echo '<script>alert("User already exists")</script>';
        }
        else{
            $fname = $_POST['firstname'];
            $lname = $_POST['lastname'];
            $email = $_POST['mailid'];
            $liceno = $_POST['liceno'];
            $password = $_POST['password'];
            $gender = $_POST['gender'];
            $phone = $_POST['phone'];
            $state = $_POST['state'];
            $address = $_POST['address'];
            $pincode = $_POST['pincode'];
  
            // for usertable
            $stmt1 = $conn->prepare("insert into usertable(userName,mailId,aadharNo,password,userStatus,userRole) values(?,?,?,?,?,?)");
            $stmt1->bind_param("ssssss",$username,$email,$aadharno,$password,$status,$role);
  
            //for userinformation
            $stmt2 = $conn->prepare("insert into userinformation(aadharNo,fName,lName,address,gender,phone) values(?,?,?,?,?,?)");
            $stmt2->bind_param("ssssss",$aadharno,$fname,$lname,$address,$gender,$phone);
  
            // for licence information
            $stmt3 = $conn->prepare("insert into userlicenceinformation(aadharNo,licenceNo,state,pinCode) values(?,?,?,?)");
            $stmt3->bind_param("ssss",$aadharno,$liceno,$state,$pincode);
  
            if($stmt1->execute() and $stmt2->execute() and $stmt3->execute()) {
              header("Location:LandingPage.php?reg=success");
            }
            else{
              echo '<script>alert("Inserton failed")</script>';
            }
            $stmt1->close();
        }
      }
    }
  }  



}



?>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Sign Up Road Pro</title>

  <link rel="stylesheet" href="static/fonts/material-icon/css/material-design-iconic-font.min.css">
  <link rel="stylesheet" href="static/css/Uregistration.css">
  <meta name="robots" content="noindex, follow">
  <style type="text/css">
    .validsmall {
      position: relative;
      bottom: 0;
      left: 0;
      padding: 10px;
      visibility: visible;
      color: red;
    }
    .validsmall #saddress{
      width : 350px;
      height : 350px;
    }
    .validsmall #susername {
      width : 350px;
      height : 350px;
    }

  </style>

</head>

<body>
  <div class="main">
    <div class="container">
      <div class="signup-content">
        <div class="signup-img">
          <!-- <img src="static/images/register.png" alt="registration.png"> -->
        </div>
        <div class="signup-form">
          <form method="POST" class="register-form" id="register-form" autocomplete="off" action="#" onsubmit="return validate();">
            <h2>Road Pro User Registration Form</h2>
            <div class="form-row">
              <div class="form-group">
                <label for="firstname">First Name :</label>
                <input type="text" name="firstname" id="firstname" />
                <small class="validsmall" id="sfirstname"></small>
              </div>
              <div class="form-group">
                <label for="lastname">Last Name :</label>
                <input type="text" name="lastname" id="lastname" />
                <small class="validsmall" id="slastname"></small>
              </div>
            </div>
            <div class="form-row">
            <div class="form-group">
              <label for="username">User Name :</label>
              <input type="username" name="username" id="username" />
              <small class="validsmall" id="susername"></small>
            </div>
            <div class="form-group">
              <label for="mailid">Email ID :</label>
              <input type="email" name="mailid" id="mailid" placeholder="example@domain.com" />
              <small class="validsmall" id="smailid"></small>
            </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="aadharno">Aadhar number :</label>
                <input type="text" name="aadharno" id="aadharno" placeholder="12 digit aadhar no">
                <small class="validsmall" id="saadharno"></small>
              </div>
              <div class="form-group">
                <label for="liceno">License number :</label>
                <input type="text" name="liceno" id="liceno" placeholder="15 digit licence no" />
                <small class="validsmall" id="sliceno"></small>
              </div>
            </div>


            <div class="form-group">
              <label for="address">Address :</label>
              <input type="text" name="address" id="address" 0 />
              <small class="validsmall" id="saddress"></small>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="state">State :</label>
                <div class="form-select">
                  <select name="state" id="state">
                    <option value="">Choose State Name</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                  </select>
                  <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
                  <small class="validsmall" id="sstate"></small>
                </div>
              </div>
              <div class="form-group">
                <label for="pincode">Zipcode :</label>
                <input type="text" name="pincode" id="pincode">
                <small class="validsmall" id="spincode"></small>
              </div>
            </div>
            <div class="form-radio">
              <label for="gender" class="radio-label">Gender :</label>
              <div class="form-radio-item">
                <input type="radio" name="gender" id="male" value="m" checked>
                <label for="male">Male</label>
                <span class="check"></span>
              </div>
              <div class="form-radio-item">
                <input type="radio" name="gender" id="female" value="f">
                <label for="female">Female</label>
                <span class="check"></span>
              </div>
              <div class="form-radio-item">
                <input type="radio" name="gender" id="other" value="o">
                <label for="other">Other</label>
                <span class="check"></span>
              </div>
            </div>
            <div class="form-group">
              <label for="phone">Phone number :</label>
              <input type="text" name="phone" id="phone">
              <small class="validsmall" id="sphone"></small>
            </div>
            <div class="form-group">
              <label for="password">Password :</label>
              <input type="password" name="password" id="password" />
              <small class="validsmall" id="spassword"></small>
            </div>

            <div class="form-group">
              <label for="cpassword">Confirm Password :</label>
              <input type="password" name="cpassword" id="cpassword" />
              <small class="validsmall" id="scpassword"></small>
            </div>

            <div class="form-submit">
              <input type="submit" value="Register" class="submit" name="submit" id="submit" />
            </div>
            <div class="form">
              <a href="Usignup.php">Already a user, Login To RoadPro</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <script src="static/js/UserRegistration.js"></script>
</body>

</html>