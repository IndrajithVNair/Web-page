function validate() {
    var firstname = document.getElementById('firstname').value.trim();
    var lastname = document.getElementById('lastname').value.trim();
    var mailid = document.getElementById('mailid').value.trim();
    var password = document.getElementById('password').value.trim();
    var cpassword = document.getElementById('cpassword').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var aadharno = document.getElementById('aadharno').value.trim();
    var liceno = document.getElementById('liceno').value.trim();
    var state = document.getElementById('state').value.trim();
    var address = document.getElementById('address').value.trim();
    var pincode = document.getElementById('pincode').value.trim();
    var username = document.getElementById('username').value.trim();

    var states = ["Andhra Pradesh", "Assam", "Bihar", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Telangana", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur"];

    var flag = true;
    if (firstname.length <= 0) {
        document.getElementById('sfirstname').innerHTML = "field is required";
        flag = false;
    }
    else {
        document.getElementById('sfirstname').innerHTML = "";
    }

    if (lastname.length <= 0) {
        document.getElementById('slastname').innerHTML = "field is required";
        flag = false;
    }
    else {
        document.getElementById('slastname').innerHTML = "";
    }

    if (mailid.length <= 0) {
        document.getElementById('smailid').innerHTML = "field is required";
        flag = false;
    }
    else {
        if (mailid.indexOf('@') <= 0) {
            document.getElementById('smailid').innerHTML = "invalid email address";
            flag = false;
        } else if ((mailid.charAt(mailid.length - 4) != '.') && (mailid.charAt(mailid.length - 3) != '.')) {
            document.getElementById('smailid').innerHTML = "invalid email address";
            return false;
        } else {
            document.getElementById('smailid').innerHTML = "";
        }
    }

    if (aadharno.length <= 0) {
        document.getElementById('saadharno').innerHTML = "field is required";
        flag = false;
    }
    else if (aadharno.length != 12) {
        document.getElementById('saadharno').innerHTML = "incorrect aadhar card no";
        flag = false;
    }
    else if (/[^0-9\-\/]/.test(aadharno)) {
        document.getElementById('saadharno').innerHTML = "incorrect aadhar card no";
        flag = false;
    }
    else {
        document.getElementById('saadharno').innerHTML = "";
    }

    if (liceno.length <= 0) {
        document.getElementById('sliceno').innerHTML = "field is required";
        flag = false;
    }
    else if (liceno.length != 15) {
        document.getElementById('sliceno').innerHTML = "incorrect licence no";
        flag = false;
    }
    else if (/[^a-zA-Z0-9\-\/]/.test(liceno)) {
        document.getElementById('sliceno').innerHTML = "incorrect licence number";
        flag = false;
    }
    else {
        document.getElementById('sliceno').innerHTML = "";
    }

    if (password.length <= 0) {
        document.getElementById('spassword').innerHTML = "field is required";
        flag = false;
    }
    else {

        if (password.length < 8) {
            document.getElementById('spassword').innerHTML = "password should be atleast 8 characters";
            flag = false;
        }
        else if (password.search(/[a-z]/g) < 0) {
            document.getElementById("spassword").innerHTML = "password must contain atleast one letter";
            flag = false;
        }
        else if (password.search(/[0-9]/) < 0) {
            document.getElementById("spassword").innerHTML = "password must contain atleast one digit";
            flag = false;
        }
        else {
            document.getElementById('spassword').innerHTML = "";
        }
    }
    if (cpassword.length <= 0) {
        document.getElementById('scpassword').innerHTML = "field is required";
        flag = false;
    } else {
        if (password != cpassword) {
            document.getElementById('scpassword').innerHTML = "passwords do not match";
            flag = false;
        }
        else {
            document.getElementById('scpassword').innerHTML = "";
        }
    }

    if (state.lenght != 0) {
        var found = false;
        for (var i = 0; i < states.length; i++) {
            if (state == states[i]) {
                found = true;
                break;
            }
        }
        if (found == false) {
            document.getElementById('sstate').innerHTML = "please select your state";
            flag = false;
        }
        if (found) {
            document.getElementById('sstate').innerHTML = "";
        }
    }
    else {
        document.getElementById('sstate').innerHTML = "please select your state";
        flag = false;
    }

    if (phone.length <= 0) {
        document.getElementById('sphone').innerHTML = "field is required";
        flag = false;
    } else if (phone.length != 10) {
        document.getElementById('sphone').innerHTML = "please check phone number ";
        flag = false;
    } else if (/[^0-9\-\/]/.test(phone)) {
        document.getElementById('sphone').innerHTML = "please enter a valid phone number";
        flag = false;
    } else {
        document.getElementById('sphone').innerHTML = "";
    }

    if (address.length <= 0) {
        document.getElementById('saddress').innerHTML = "field is required";
        flag = false;
    }

    if (pincode.length <= 0) {
        document.getElementById('spincode').innerHTML = "field is required";
        flag = false;
    } else if (pincode.length < 6) {
        document.getElementById('spincode').innerHTML = "incorrected pin code";
        flag = false;
    } else {
        document.getElementById('spincode').innerHTML = "";
    }

    if(username.length <= 0) {
        document.getElementById('susername').innerHTML = "field is required";
        flag = false;
    } else if (username.length < 6) {
        document.getElementById('susername').innerHTML = "username must be atleast 6 characters long";
        flag = false;
    } else {
        document.getElementById('susername').innerHTML = "";
    }

    if (flag == false) {
        return false;
    } else if (flag == true) {
        return true;
    }

}