function validation(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px";

    if (name.length <6) {
        text = "Must Be At Least 6 Characters";
        error_message.innerHTML = text;
        return false;

    }
    if (email.length <10) {
        text = "Invalid Email";
        error_message.innerHTML = text;
        return false;
    }
    if (phone.length <10) {
        text = "Invalid Phone Number";
        error_message.innerHTML = text;
        return false;
    }
    if (message.length <30) {
        text = "Message Error";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted")
    return true;
}
