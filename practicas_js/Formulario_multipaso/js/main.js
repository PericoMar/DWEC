import { API_KEY_PLACES, API_KEY_CURRENCY } from "./api.js";

//Variables para comprobar si es correcto cada vez que haga un cambio en los campos:
let nom, ape = " ";
let email, password = "", passwordConfirm = "", tel;
let gen, dateOfBirth;
let pais, direccion;
let amount, convertedAmount;
let baseCurrency = "USD", currency;

const formulario = document.getElementById("formRegistro");
const pasos = document.querySelectorAll(".paso");
const btnsSiguiente = document.querySelectorAll(".btn-siguiente");
const progressBar = document.getElementById("progress-bar")
const btnsAnterior = document.querySelectorAll(".btn-anterior");

//Control del formulario:
const inputNombre = document.getElementById("input-nom");
const inputApe = document.getElementById("input-ape");
const msgNom = document.getElementById("msg-nom");
const msgApe = document.getElementById("msg-ape");
const btnNombre = document.getElementById("btn-nombre");
const REGEX_NOMBRE = /^([A-ZÁÉÍÓÚÑa-zñáéíóúñ]{1,}'?-?[A-ZÁÉÍÓÚÑa-zñáéíóú]*[\s]*[A-ZÁÉÍÓÚÑa-zñáéíóúñ]{1,})+$/;

const inputEmail = document.getElementById("input-email");
const inputPassword = document.getElementById("input-password");
const inputPasswordConfirm = document.getElementById("input-password2");
const inputTel = document.getElementById("input-tel");
const msgTel = document.getElementById("msg-tel");
const REGEX_TEL = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
const msgPasswd = document.getElementById("msg-passwd");
const msgPasswdMatch = document.getElementById("msg-passwd-match");
const msgEmail = document.getElementById("msg-email");
const MIN_PASSWD_LENGTH = 8;
//Gestion de la barra de fuerza de la contraseña
const strengthBar = document.getElementById('strength-bar');
const btnInfo = document.getElementById("btn-info");
const REGEX_EMAIL = /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])/;
const btnShowHidePass = document.getElementById("btn-show-hide-pass");
const btnShowHidePassMatch = document.getElementById("btn-show-hide-pass-match");
const ImgEye = document.getElementById("eye-img");
const ImgEyeMatch = document.getElementById("eye-img-match");

// Datos adicionales
const selectGenero = document.getElementById("select-gen");
const inputDate = document.getElementById("input-fecha");
const msgAdult = document.getElementById("msg-adult");
const msgDateCorrect = document.getElementById("msg-date-correct")
const btnDetalles = document.getElementById("btn-details");

const paises = {
    "España": {
        "iso": "ES",
        "ingles": "Spain"
    },
    "Francia": {
        "iso": "FR",
        "ingles": "France"
    },
    "Alemania": {
        "iso": "DE",
        "ingles": "Germany"
    },
    "Italia": {
        "iso": "IT",
        "ingles": "Italy"
    },
    "Reino Unido": {
        "iso": "GB",
        "ingles": "United Kingdom"
    },
    "Países Bajos": {
        "iso": "NL",
        "ingles": "Netherlands"
    },
    "Suecia": {
        "iso": "SE",
        "ingles": "Sweden"
    },
    "Portugal": {
        "iso": "PT",
        "ingles": "Portugal"
    },
    "Grecia": {
        "iso": "GR",
        "ingles": "Greece"
    }
}


const inputPais = document.getElementById("input-pais");
const datalistPais = document.getElementById("paises");
const inputAutocomplete = document.getElementById("input-autocomplete");
const btnDireccion = document.getElementById("btn-dir");
const REGEX_DIRECCION = /[a-zA-Z0-9\s,'-]+/;

for (let pais in paises) {
    let optionPais = document.createElement("option");
    optionPais.value = pais;
    optionPais.innerHTML = paises[pais]["ingles"];
    datalistPais.appendChild(optionPais);
}

// Cambio de divisas
const inputAmount = document.getElementById("amount");
const selectBaseCurrency = document.getElementById("base-currency");
const selectCurrency = document.getElementById("currency");
const btnEnd = document.getElementById("btn-end");

var arrayMonedas = ["USD", "EUR", "JPY", "GBP", "AUD", "CAD", "CHF", "CNY", "SEK", "NZD", "NOK", "SGD", "KRW", "MXN", "INR"];


arrayMonedas.forEach(moneda => {
    const optionBaseCurrency = document.createElement("option");
    optionBaseCurrency.innerHTML = moneda;
    optionBaseCurrency.value = moneda;
    selectBaseCurrency.appendChild(optionBaseCurrency);

    const optionCurrency = document.createElement("option");
    optionCurrency.innerHTML = moneda;
    optionCurrency.value = moneda;
    selectCurrency.appendChild(optionCurrency);
});


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


function validateNomApe() {
    if (REGEX_NOMBRE.test(nom) && REGEX_NOMBRE.test(ape)) {
        btnNombre.disabled = false;

    } else {
        btnNombre.disabled = true;

    }
}

function updateMessageState(msg, inputField, isValid) {
    if (isValid) {
        msg.style.display = 'none';
        inputField.classList.remove('is-invalid');
        inputField.classList.add('is-valid');
    } else {
        msg.style.display = 'block';
        inputField.classList.remove('is-valid');
        inputField.classList.add('is-invalid');
    }
}

export function updateInputState(inputField, isValid) {
    if (isValid) {
        inputField.classList.remove('is-invalid');
        inputField.classList.add('is-valid');
    } else {
        inputField.classList.remove('is-valid');
        inputField.classList.add('is-invalid');
    }
}

function validateAccountInfo() {
    let strength = calculatePasswordStrength(password);
    updateStrengthMeter(strength);

    if (REGEX_EMAIL.test(email) && password === passwordConfirm && password.length >= MIN_PASSWD_LENGTH && REGEX_TEL.test(tel)) {
        btnInfo.disabled = false;
    } else {
        btnInfo.disabled = true;
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

    if (gen && isAdult() && dateIsCorrect()) {
        btnDetalles.disabled = false;
    } else {
        btnDetalles.disabled = true;
    }
}

function isAdult() {
    if(dateOfBirth && dateOfBirth.length === 10){
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

        return diferenciaAnios >= 18;
    } else {
        return false;
    }
}

function dateIsCorrect() {
    const dateOfBirthObj = new Date(dateOfBirth);
    const date = new Date();
    return date.getFullYear() - dateOfBirthObj.getFullYear() < 120;
}

export function validateDirection() {
    if (pais in paises && REGEX_DIRECCION.test(direccion)) {
        btnDireccion.disabled = false;
    } else {
        btnDireccion.disabled = true;
    }
}

function validateExchange() {
    if (!isNaN(amount) && baseCurrency != '' && currency != '') {
        btnEnd.disabled = false;
    } else {
        btnEnd.disabled = true;
    }
}

function updateCurrencyOptions() {
    for (let i = 1; i < selectCurrency.options.length; i++) {
        selectCurrency.options[i].disabled = false;
    }

    let selectedBaseCurrency = selectBaseCurrency.value;
    for (var i = 1; i < selectCurrency.options.length; i++) {
        if (selectCurrency.options[i].value === selectedBaseCurrency) {
            selectCurrency.options[i].disabled = true;
            break;
        }
    }
}

// Botones desactivados con los campos vacios:
btnNombre.disabled = true;
btnInfo.disabled = true;
btnDetalles.disabled = true;
btnDireccion.disabled = true;
btnEnd.disabled = true;

// Controlamos el evento input para saber lo que pone cada vez que hace un cambio,
// no pongo change porque en change tiene que perder el foco y lo normal en un formulario
// es que tu vayas a clickar el boton justo despues de escribir.


inputNombre.addEventListener("input", () => {
    nom = inputNombre.value;
    validateNomApe();
    updateMessageState(msgNom, inputNombre, REGEX_NOMBRE.test(nom));
});

inputApe.addEventListener("input", () => {
    ape = inputApe.value;
    validateNomApe();
    updateMessageState(msgApe, inputApe, REGEX_NOMBRE.test(ape));
});

inputEmail.addEventListener("input", () => {
    email = inputEmail.value;
    validateAccountInfo();
    updateMessageState(msgEmail, inputEmail, REGEX_EMAIL.test(email));
});

inputPassword.addEventListener("input", () => {
    password = inputPassword.value;
    validateAccountInfo();
    updateMessageState(msgPasswd, inputPassword, password.length >= MIN_PASSWD_LENGTH);
    if (passwordConfirm) {
        updateMessageState(msgPasswdMatch, inputPasswordConfirm, password === passwordConfirm);
    }
});

btnShowHidePass.addEventListener("click", () => {
    if (inputPassword.type === 'password') {
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
    updateMessageState(msgPasswdMatch, inputPasswordConfirm, password === passwordConfirm);
});

btnShowHidePassMatch.addEventListener("click", () => {
    if (inputPasswordConfirm.type === 'password') {
        inputPasswordConfirm.type = 'text';
        ImgEyeMatch.src = "img/eye-slash.svg";
    } else {
        inputPasswordConfirm.type = 'password';
        ImgEyeMatch.src = "img/eye.svg";
    }
});

inputTel.addEventListener("input", () => {
    tel = inputTel.value;
    validateAccountInfo();
    updateMessageState(msgTel, inputTel, REGEX_TEL.test(tel));
})

selectGenero.addEventListener("change", () => {
    gen = selectGenero.value;
    //Desabilito la opcion de "Seleccione genero..."
    selectGenero.options[0].disabled = true;
    validateGenderAndBirth();
    updateInputState(selectGenero, gen);
});

inputDate.addEventListener("change", () => {
    dateOfBirth = inputDate.value;
    validateGenderAndBirth();
    updateMessageState(msgAdult, inputDate, isAdult());
    updateMessageState(msgDateCorrect , inputDate , dateIsCorrect());
    updateInputState(inputDate, isAdult() && dateIsCorrect());
})

let scriptElement;  // Variable para almacenar el elemento script

inputPais.addEventListener("input", () => {
    inputAutocomplete.value = "";
    pais = inputPais.value;
    if (pais in paises) {
        inputAutocomplete.disabled = false;

        // Elimina el script anterior si existe
        if (scriptElement) {
            document.body.removeChild(scriptElement);
        }

        // Obtén el elemento body
        var body = document.body || document.getElementsByTagName('body')[0];

        // Crea un nuevo elemento script
        scriptElement = document.createElement('script');

        // Asigna la fuente del script con la clave API
        scriptElement.async = true;
        scriptElement.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY_PLACES}&libraries=places&callback=initAutocomplete`;

        // Agrega el nuevo script al body
        body.appendChild(scriptElement);

        let autocomplete;
        let details;

        window.initAutocomplete = function () {
            autocomplete = new google.maps.places.Autocomplete(
                document.getElementById("input-autocomplete"),
                {
                    types: ['address'],
                    componentRestrictions: { country: paises[pais].iso },
                    fields: ['formatted_address']
                });

            autocomplete.addListener('place_changed', onPlaceChanged);
        };

        function onPlaceChanged() {
            let place = autocomplete.getPlace();

            if (!place.geometry) {
                inputAutocomplete.placeholder = 'Calle Violeta Parra';
            } else {
                details = place.name;
            }
        }
    }

    updateInputState(inputPais, pais in paises);
    validateDirection();
})



inputAutocomplete.addEventListener("input", () => {
    direccion = inputAutocomplete.value;
    validateDirection();
    updateInputState(inputAutocomplete, REGEX_DIRECCION.test(direccion));
})

inputAmount.addEventListener("input", () => {
    amount = inputAmount.value;
    amount = Number(amount);
    validateExchange();
    updateInputState(inputAmount, !isNaN(amount));
})

selectBaseCurrency.addEventListener("change", () => {
    baseCurrency = selectBaseCurrency.value;
    selectBaseCurrency.options[0].disabled = true;
    selectCurrency.value = "";
    validateExchange();
    updateCurrencyOptions();
    updateInputState(selectBaseCurrency, baseCurrency != '')
});

selectCurrency.addEventListener("change", () => {
    currency = selectCurrency.value;
    selectCurrency.options[0].disabled = true;
    validateExchange();
    updateInputState(selectCurrency, currency != '')
});



const thanksModule = document.getElementById("thanks-module");



formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(`https://v6.exchangerate-api.com/v6/${API_KEY_CURRENCY}/latest/${baseCurrency}`)
    .then(response => response.json())
    .then(result => {
        convertedAmount = result.conversion_rates[currency] * amount;
        thanksModule.innerHTML = `<article>
                                    <h2>¡Gracias por tu solicitud, ${nom} ${ape}!</h2>
                                    <p>Has cambiado ${amount} ${baseCurrency} a ${currency} con éxito. El monto convertido es ${convertedAmount}.</p>
                                    <p>Te agradecemos por utilizar nuestro servicio.</p>
                                </article>`;
        const btnCerrarModal = document.createElement("button");
        const anchorMail = document.createElement("a");
        anchorMail.href = `mailto:${email}?subject=Exchange&body=Gracias%20por%20la%20solicitud.%0A%0AHas%20cambiado%20${amount}%20${baseCurrency}%20a%20${currency}%20con%20éxito.%20El%20monto%20convertido%20es%20${convertedAmount}.%0A%0A(Este%20correo%20no%20puede%20ser%20respondido)`;
        anchorMail.innerHTML = "Enviar la información por correo";
        btnCerrarModal.innerHTML = "Cerrar";
        btnCerrarModal.classList.add("button-cerrar-modal")
        thanksModule.appendChild(btnCerrarModal);
        thanksModule.appendChild(anchorMail);
        btnCerrarModal.addEventListener("click", closeModal);
        thanksModule.showModal();
    });

});

function closeModal() {
    thanksModule.close();
    location.reload();
}

