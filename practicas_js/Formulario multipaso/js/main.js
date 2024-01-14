document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formRegistro");
    const pasos = document.querySelectorAll(".paso");
    const botonesSiguiente = document.querySelectorAll(".btn-siguiente");
    const progressBar = document.getElementById("progress-bar")
    const botonesAnterior = document.querySelectorAll(".btn-anterior");

    //Control del formulario:
    const inputNombre = document.getElementById("input-nom");
    const inputApe = document.getElementById("input-ape");
    const botonNombre = document.getElementById("btn-nombre");
    const REGEX_NOMBRE = /^([A-ZÁÉÍÓÚÑa-zñáéíóúñ]{1,}'?-?[A-ZÁÉÍÓÚÑa-zñáéíóú]+[\s]*)+$/;

    const inputEmail = document.getElementById("input-email");
    const inputPassword = document.getElementById("input-password");
    const inputPasswordConfirm = document.getElementById("input-password2");
    const msgPasswd = document.getElementById("msg-passwd");
    const msgPasswdMatch = document.getElementById("msg-passwd-match");
    const MIN_PASSWD_LENGTH = 8;
    //Gestion de la barra de fuerza de la contraseña
    const strengthBar = document.getElementById('strength-bar');
    const botonInfo = document.getElementById("btn-info");
    const REGEX_EMAIL = /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])/;

    const selectGenero = document.getElementById("select-gen");
    const botonDetalles = document.getElementById("btn-details");


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

    botonesSiguiente.forEach((boton) => {
        boton.addEventListener("click", siguientePaso);
    });

    botonesAnterior.forEach((boton) => {
        boton.addEventListener("click", pasoAnterior);
    });


    //Variables para comprobar si es correcto cada vez que haga un cambio en los campos:
    let nom, ape = " ";
    let email, password = "", passwordConfirm;
    let gen;

    function validateNomApe() {
        if (REGEX_NOMBRE.test(nom) && REGEX_NOMBRE.test(ape)) {
            botonNombre.disabled = false;
        } else {
            botonNombre.disabled = true;
        }
    }

    function validateEmail() {
        if (REGEX_EMAIL.test(email)) {
            botonInfo.disabled = false;
        } else {
            botonInfo.disabled = true;
        }
    }

    function validatePassword() {
        let strength = calculatePasswordStrength(password);
        updateStrengthMeter(strength);

        if (password.length >= MIN_PASSWD_LENGTH) {
            msgPasswd.style.display = 'none';
        } else {
            msgPasswd.style.display = 'block';
        }

        if(password === passwordConfirm){
            msgPasswdMatch.style.display = 'none';
        } else {
            msgPasswdMatch.style.display = 'block';
        }

        if(password === passwordConfirm && password.length >= MIN_PASSWD_LENGTH){
            botonInfo.disabled = false;
        } else {
            botonInfo.disabled = true;
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
        console.log(strength);
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

    function validateGenero() {
        if (gen) {
            botonDetalles.disabled = false;
        } else {
            botonDetalles.disabled = true;
        }
    }

    // Botones desactivados con los campos vacios:
    botonNombre.disabled = true;
    botonInfo.disabled = true;
    botonDetalles.disabled = true;

    // Controlamos el evento input para saber lo que pone cada vez que hace un cambio,
    // no pongo change porque en change tiene que perder el foco y lo normal en un formulario
    // es que tu vayas a clickar el boton justo despues de escribir.


    inputNombre.addEventListener("input", () => {
        nom = inputNombre.value;
        validateNomApe();
    })

    inputApe.addEventListener("input", () => {
        ape = inputApe.value;
        validateNomApe();
    })

    inputEmail.addEventListener("input", () => {
        email = inputEmail.value;
        validateEmail();
    })

    inputPassword.addEventListener("input", () => {
        password = inputPassword.value;
        validatePassword();
    })

    inputPasswordConfirm.addEventListener("input" , () => {
        passwordConfirm = inputPasswordConfirm.value;
        validatePassword();
    })

    selectGenero.addEventListener("change", () => {
        gen = selectGenero.value;
        validateGenero();
    })


    formulario.addEventListener("submit", (e) => e.preventDefault());


});
