//Implementer le JS de ma page


const inputNom = document.getElementById("NomInput")
const inputPreNom = document.getElementById("PrenomInput")
const inputMail = document.getElementById("EmailInput")
const inputPassword = document.getElementById("PasswordInput")
const inputValidatePassword = document.getElementById("validatePasswordInput")
const btnValidation = document.getElementById("btn-validation-inscription")

inputNom.addEventListener("keyup", validateForm);
inputPreNom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidatePassword.addEventListener("keyup", validateForm);

function validateConfirmationPassword(inputpwd, inputConfirmPwd){
    if(inputpwd.value === inputConfirmPwd.value){
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");
        return true;
    }
    else{
        inputConfirmPwd.classList.add("is-invalid");
        inputConfirmPwd.classList.remove("is-valid");
        return false;
    }
}

function validateForm() {
    const nonOk = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPreNom);
    const mailOk = validateMail(inputMail);
    const passwordOk = validatePassword(inputPassword);
    const confirmationPasswordOk = validateConfirmationPassword(inputPassword, inputValidatePassword);

    if(nonOk && prenomOk && mailOk && passwordOk && confirmationPasswordOk){
        btnValidation.disabled = false;
    }
    else{
        btnValidation.disabled = true;
    }
}

function validatePassword(input){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if(passwordUser.match(passwordRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;
    }
}

function validateMail(input){
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;
    }
}

function validateRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;
    }
}