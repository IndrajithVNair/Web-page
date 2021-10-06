

/* function validate(){
    var password = document.getElementById("password").value.trim();
    var email = document.getElementById("mailid").value.trim();


}
 */
function form_validation_login() {

    //alert("inside javascript file");
    // Name and Password from the register-form
    var username = document.getElementById('mailid').value.trim();
    var password = document.getElementById('password').value.trim();
    var text = "";

    var flag = true;

    //console.log(username);

    if (username == null || username == "") {
        text = "username cannot be empty";
        //console.log(text);
        document.getElementById("usernamewarning").innerHTML = text;
        flag = false;
    } else {
        document.getElementById("usernamewarning").innerHTML = "";
    }



    if (password == null || password == "") {
        text = "password cannot be empty";
        document.getElementById("passwordwarning").innerHTML = text;
        flag = false;
    }
    else if (password.length < 8) {
        text = "password must contain atleast 8 characters";
        document.getElementById("passwordwarning").innerHTML = text;
        flag = false;
    }
    else if (password.search(/[a-z]/g) < 0) {
        text = "password must contain atleast one letter";
        document.getElementById("passwordwarning").innerHTML = text;
        flag = false;
    }
    else if (password.search(/[0-9]/) < 0) {
        text = "password must contain atleast one digit";
        document.getElementById("passwordwarning").innerHTML = text;
        flag = false;
    }

    if (flag == false) {
        return false;
    } else if (flag == true) {
        return true;
    }

}
