document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formRegistro");
    const pasos = document.querySelectorAll(".paso");
    const btnsSiguiente = document.querySelectorAll(".btn-siguiente");
    const progressBar = document.getElementById("progress-bar")
    const btnsAnterior = document.querySelectorAll(".btn-anterior");

    //Control del formulario:
    const inputNombre = document.getElementById("input-nom");
    const inputApe = document.getElementById("input-ape");
    const btnNombre = document.getElementById("btn-nombre");
    const REGEX_NOMBRE = /^([A-ZÁÉÍÓÚÑa-zñáéíóúñ]{1,}'?-?[A-ZÁÉÍÓÚÑa-zñáéíóú]*[\s]*[A-ZÁÉÍÓÚÑa-zñáéíóúñ]{1,})+$/;

    const inputEmail = document.getElementById("input-email");
    const inputPassword = document.getElementById("input-password");
    const inputPasswordConfirm = document.getElementById("input-password2");
    const msgPasswd = document.getElementById("msg-passwd");
    const msgPasswdMatch = document.getElementById("msg-passwd-match");
    const msgTextEmail = document.getElementById("msg-email");
    const MIN_PASSWD_LENGTH = 8;
    //Gestion de la barra de fuerza de la contraseña
    const strengthBar = document.getElementById('strength-bar');
    const btnInfo = document.getElementById("btn-info");
    const REGEX_EMAIL = /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])/;
    const btnShowHidePass = document.getElementById("btn-show-hide-pass");
    const btnShowHidePassMatch = document.getElementById("btn-show-hide-pass-match");
    const ImgEye = document.getElementById("eye-img");
    const ImgEyeMatch = document.getElementById("eye-img-match");

    const selectGenero = document.getElementById("select-gen");
    const inputDate = document.getElementById("input-fecha");
    const msgDate = document.getElementById("msg-date");
    const btnDetalles = document.getElementById("btn-details");


    let pasoActual = 1;

    //NO HACE FALTA CAMIAR NADA:
    function actualizarBarraDeProgreso() {
        const progreso = ((pasoActual - 1) / (pasos.length - 1)) * 100;
        progressBar.style = `width: ${progreso}%`
    }

    //Funciones para pasar de pagina:
    function siguientePaso() {
        pasos[pasoActual - 1].style.display = "none";
        pasoActual++;
        if (pasoActual > pasos.length) {
            pasoActual = pasos.length;
        }
        pasos[pasoActual - 1].style.display = "block";
        actualizarBarraDeProgreso();
    }

    function pasoAnterior() {
        pasos[pasoActual - 1].style.display = "none";
        pasoActual--;
        if (pasoActual < 1) {
            pasoActual = 1;
        }
        pasos[pasoActual - 1].style.display = "block";
        actualizarBarraDeProgreso();
    }

    btnsSiguiente.forEach((btn) => {
        btn.addEventListener("click", siguientePaso);
    });

    btnsAnterior.forEach((btn) => {
        btn.addEventListener("click", pasoAnterior);
    });


    //Variables para comprobar si es correcto cada vez que haga un cambio en los campos:
    let nom, ape = " ";
    let email, password ="", passwordConfirm = "";
    let gen, dateOfBirth;

    function validateNomApe() {
        if (REGEX_NOMBRE.test(nom) && REGEX_NOMBRE.test(ape)) {
            btnNombre.disabled = false;
        } else {
            btnNombre.disabled = true;
        }
    }

    function validateAccountInfo() {
        let strength = calculatePasswordStrength(password);
        updateStrengthMeter(strength);

        if (REGEX_EMAIL.test(email) && password === passwordConfirm && password.length >= MIN_PASSWD_LENGTH) {
            btnInfo.disabled = false;
        } else {
            btnInfo.disabled = true;
        }
    }

    function msgPassword() {
        if (password.length >= MIN_PASSWD_LENGTH) {
            msgPasswd.style.display = 'none';
        } else {
            msgPasswd.style.display = 'block';
        }
    }

    function msgPasswordMatch() {
        if (password === passwordConfirm) {
            msgPasswdMatch.style.display = 'none';
        } else {
            msgPasswdMatch.style.display = 'block';
        }
    }

    function msgEmail(){
        if(REGEX_EMAIL.test(email)){
            msgTextEmail.style.display = 'none';
        } else {
            msgTextEmail.style.display = 'block';
        }
    }

    //En este caso voy a hacer una función sencilla pero se podrian añadir más controles:
    function calculatePasswordStrength(password) {
        let strength = 0;
        const REGEX_MAYUS = /[A-ZÁÉIOU]/;
        const REGEX_NUM = /[0-9]/;
        const REGEX_SPECIAL_CARACTER = /[-!$%^&*()_+|~=`{}\[\]:\";'<>?,.\/@#]/;
        if (password.length > 8) {
            strength += 25;
        }
        if (REGEX_MAYUS.test(password)) {
            strength += 25;
        }
        if (REGEX_NUM.test(password)) {
            strength += 25;
        }
        if (REGEX_SPECIAL_CARACTER.test(password)) {
            strength += 25;
        }
        return strength;
    }

    function updateStrengthMeter(strength) {
        // Actualizar el ancho de la barra de progreso y el color
        strengthBar.style = `width: ${strength}%`
        if (strength <= 25) {
            strengthBar.classList.remove('bg-success', 'bg-warning');
            strengthBar.classList.add('bg-danger');
        } else if (strength <= 75) {
            strengthBar.classList.remove('bg-success', 'bg-danger');
            strengthBar.classList.add('bg-warning');
        } else {
            strengthBar.classList.remove('bg-warning', 'bg-danger');
            strengthBar.classList.add('bg-success');
        }
    }

    function validateGenderAndBirth() {
        if(isAdult()){
            msgDate.style.display = 'none';
        } else {
            msgDate.style.display = 'block';
        }

        if (gen && isAdult() && dateIsCorrect()) {
            btnDetalles.disabled = false;
        } else {
            btnDetalles.disabled = true;
        }
    }

    function isAdult() {
        const dateOfBirthObj = new Date(dateOfBirth);
        const date = new Date();
        let diferenciaAnios = date.getFullYear() - dateOfBirthObj.getFullYear();

        // Ajusta la diferencia si la fecha de nacimiento no ha ocurrido todavía este año
        if (
            date.getMonth() < dateOfBirthObj.getMonth() ||
            (date.getMonth() === dateOfBirthObj.getMonth() && date.getDate() < dateOfBirthObj.getDate())
        ) {
            diferenciaAnios--;
        }

        return diferenciaAnios > 18;
    }

    function dateIsCorrect() {
        const dateOfBirthObj = new Date(dateOfBirth);
        const date = new Date();
        return date.getFullYear() - dateOfBirthObj.getFullYear() < 120;
    }

    // Botones desactivados con los campos vacios:
    btnNombre.disabled = true;
    btnInfo.disabled = true;
    btnDetalles.disabled = true;

    // Controlamos el evento input para saber lo que pone cada vez que hace un cambio,
    // no pongo change porque en change tiene que perder el foco y lo normal en un formulario
    // es que tu vayas a clickar el boton justo despues de escribir.


    inputNombre.addEventListener("input", () => {
        nom = inputNombre.value;
        validateNomApe();
    });

    inputApe.addEventListener("input", () => {
        ape = inputApe.value;
        validateNomApe();
    });

    inputEmail.addEventListener("input", () => {
        email = inputEmail.value;
        validateAccountInfo();
        msgEmail();
    });

    inputPassword.addEventListener("input", () => {
        password = inputPassword.value;
        validateAccountInfo();
        msgPassword();
        msgPasswordMatch();
    });

    btnShowHidePass.addEventListener("click" , () => {
        if(inputPassword.type === 'password'){
            inputPassword.type = 'text';
            ImgEye.src = "img/eye-slash.svg";
        } else {
            inputPassword.type = 'password';
            ImgEye.src = "img/eye.svg";
        }
    });

    inputPasswordConfirm.addEventListener("input", () => {
        passwordConfirm = inputPasswordConfirm.value;
        validateAccountInfo();
        msgPasswordMatch();
    });

    btnShowHidePassMatch.addEventListener("click" , () => {
        if(inputPasswordConfirm.type === 'password'){
            inputPasswordConfirm.type = 'text';
            ImgEyeMatch.src = "img/eye-slash.svg";
        } else {
            inputPasswordConfirm.type = 'password';
            ImgEyeMatch.src = "img/eye.svg";
        }
    });

    selectGenero.addEventListener("change", () => {
        gen = selectGenero.value;
        //Desabilito la opcion de "Seleccione genero..."
        selectGenero.options[0].disabled = true;
        validateGenderAndBirth();
    });

    inputDate.addEventListener("change", () => {
        dateOfBirth = inputDate.value;
        validateGenderAndBirth();
    })

    formulario.addEventListener("submit", (e) => e.preventDefault());


});
