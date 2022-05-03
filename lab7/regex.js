checkEmail = function(){
    let emailValue = document.getElementById("exampleInputEmail1").value;
    const emailPattern = "^[a-zA-Z_-]+@[a-zA-Z_-]+\.[a-zA-Z]{2,3}$";
    let emailRegex = new RegExp(emailPattern);

    if(emailValue.match(emailRegex)){
        console.log(emailValue);
    } else {
        alert("Incorrect email format!");
    }
}

checkPassword = function(){
    let passwordValue = document.getElementById("exampleInputPassword1").value;
    const passwordPattern = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{10,20}$";
    let passwordRegex = new RegExp(passwordPattern);

    if(passwordValue.match(passwordRegex)){
        alert("Success, your password is correct!");
    } else {
        alert("Incorrect password format, at least 1 digit and 1 capital letter!");
    }
}

window.onload = function() {
    document.getElementById("exampleInputEmail1").onclick = checkEmail;
    // document.getElementById("exampleInputPassword1").onclick = checkPassword;
    document.getElementById("myButton").onclick = checkPassword
}
