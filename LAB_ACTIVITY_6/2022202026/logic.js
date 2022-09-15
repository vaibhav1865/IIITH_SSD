

function validate_username(event) {
const error = document.getElementById("errorusr");
const username = document.getElementById("serverUsername");
const usernameRegex = /^[a-zA-Z0-9]{0,20}$/;
    if (username.validity.patternMismatch) {
        error.innerHTML = "Invalid username";
        error.style.color = "red";
        return false;

    } else {
        error.innerHTML = "Valid username";
        error.style.color = "green";
        return true;
    }
}

function isKeyPressed(event) {
    var element = document.body;
    if (  event.ctrlKey  && event.keyCode == 77 ) {
        element.classList.toggle("dark-mode");
    } 
  }

  function validate_paswd(){
    let pswd = document.getElementById("serverPassword").value; 
    let cpswd = document.getElementById("confirmPassword").value; 
    if(pswd !== cpswd)  {
        alert("Confirm password and password is not matching!");
    }
}


