const mailInput = document.getElementById('EmailInput');
const passwordInput = document.getElementById('PasswordInput');
const btnSignin = document.getElementById('btnSignin');

btnSignin.addEventListener('click', checkCredentials);
function checkCredentials() {
    //ici appeler l'api pour vérifié les credentials en BDD

    if (mailInput.value == 'test@mail.com' && passwordInput.value == 'test') {
        //il faudrat recuperer le token
        const token = 'eyJhbGdeqsfsregdrghfyxjtfxhtdxfhftxhtfhtfxhtfxhtfxhfth';
        setToken(token);
        //placer ce token en cookie

        setCookie('role', 'client', 7);
        window.location.replace('/');
}
else {
    mailInput.classList.add('is-invalid');
    passwordInput.classList.add('is-invalid');
}
}