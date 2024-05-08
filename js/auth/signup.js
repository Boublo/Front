//Implementer le JS de ma page


const inputNom = document.getElementById("NomInput")
const inputPreNom = document.getElementById("PrenomInput")
const inputMail = document.getElementById("EmailInput")
const inputPassword = document.getElementById("EmailInput")
const inputvalidatePasswordInput = document.getElementById("validatePasswordInput")
const btnValidation = document.getElementById("btn-validation-inscription")

inputNom.addEventListener("keyup", validateForm);
inputPreNom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputvalidatePasswordInput.addEventListener("keyup", validateForm);

function validateForm() {
    const nonOk = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPreNom);
    const mailOk = validateMail(inputMail);

    if(nonOk && prenomOk && mailOk){
        btnValidation.disabled = false;
    }
    else{
        btnValidation.disabled = true;
    }
}

function validateMail(){
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const mailUser = inputMail.value;
    if(mailUser .match(emailRegex)){
        inputMail.classList.add("is-valid");
        inputMail.classList.remove("is-invalid");
        return true;
    }
    else{
        inputMail.classList.add("is-invalid");
        inputMail.classList.remove("is-valid");
        return false;
    }
}

function validateRequired(inputNom){
    if(inputNom.value != ''){
        inputNom.classList.add("is-valid");
        inputNom.classList.remove("is-invalid");
        return true;
    }
    else{
        inputNom.classList.add("is-invalid");
        inputNom.classList.remove("is-valid");
        return false;
    }
}