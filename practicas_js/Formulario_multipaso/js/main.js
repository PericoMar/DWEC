//Variables para comprobar si es correcto cada vez que haga un cambio en los campos:
    let nom, ape = " ";
    let email, password = "", passwordConfirm = "" ,tel;
    let gen, dateOfBirth;
    let pais, ciudad , direccion;
    let amount, convertedAmount;

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
    const inputTel = document.getElementById("input-tel");
    const msgTel = document.getElementById("msg-tel");
    const REGEX_TEL = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
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

    // Datos adicionales
    const selectGenero = document.getElementById("select-gen");
    const inputDate = document.getElementById("input-fecha");
    const msgDate = document.getElementById("msg-date");
    const btnDetalles = document.getElementById("btn-details");

    // Dirección
    var paises = {
        "España": {
            "ingles": "Spain",
            "ciudades": ["Madrid", "Barcelona", "Valencia", "Sevilla", "Zaragoza", "Málaga", "Murcia", "Palma de Mallorca", "Las Palmas de Gran Canaria", "Bilbao", "Alicante", "Córdoba", "Valladolid", "Vigo", "Gijón"]
        },
        "Francia": {
            "ingles": "France",
            "ciudades": ["París", "Marsella", "Lyon", "Toulouse", "Niza", "Nantes", "Estrasburgo", "Montpellier", "Burdeos", "Lille", "Rennes", "Reims", "Saint-Étienne", "Toulon", "Le Havre"]
        },
        "Alemania": {
            "ingles": "Germany",
            "ciudades": ["Berlín", "Hamburgo", "Múnich", "Colonia", "Fráncfort del Meno", "Stuttgart", "Düsseldorf", "Dortmund", "Essen", "Leipzig", "Dresde", "Hanóver", "Núremberg", "Duisburgo", "Bochum"]
        },
        "Italia": {
            "ingles": "Italy",
            "ciudades": ["Roma", "Milán", "Nápoles", "Turín", "Palermo", "Génova", "Bolonia", "Florencia", "Bari", "Catania", "Venecia", "Verona", "Messina", "Padua", "Trieste"]
        },
        "Reino Unido": {
            "ingles": "United Kingdom",
            "ciudades": ["Londres", "Birmingham", "Mánchester", "Glasgow", "Liverpool", "Edimburgo", "Bristol", "Newcastle", "Sheffield", "Cardiff", "Leeds", "Nottingham", "Southampton", "Belfast", "Plymouth"]
        },
        "Países Bajos": {
            "ingles": "Netherlands",
            "ciudades": ["Ámsterdam", "Róterdam", "La Haya", "Utrecht", "Eindhoven", "Tilburgo", "Groninga", "Almere", "Breda", "Nimega", "Enschede", "Haarlem", "Arnhem", "Zwolle", "Maastricht"]
        },
        "Suecia": {
            "ingles": "Sweden",
            "ciudades": ["Estocolmo", "Gotemburgo", "Malmö", "Uppsala", "Linköping", "Västerås", "Örebro", "Norrköping", "Helsingborg", "Jönköping", "Umeå", "Lund", "Borås", "Sundsvall", "Gävle"]
        },
        "Portugal": {
            "ingles": "Portugal",
            "ciudades": ["Lisboa", "Oporto", "Braga", "Coímbra", "Aveiro", "Funchal", "Évora", "Faro", "Setúbal", "Portimão", "Vila Nova de Gaia", "Amadora", "Queluz", "Agualva-Cacém", "Almada"]
        },
        "Grecia": {
            "ingles": "Greece",
            "ciudades": ["Atenas", "Salónica", "El Pireo", "Patras", "Larisa", "Heraklion", "Volos", "Ioánina", "Kavala", "Komotini", "Rodas", "Chania", "Chalcis", "Lamia", "Alexandroupoli"]
        }
    }

    const datalistPais = document.getElementById("paises");
    const inputPais = document.getElementById("input-pais");
    const datalistCiudad = document.getElementById("ciudades");
    const inputCiudad = document.getElementById("input-ciudad");
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

    function validateAccountInfo() {
        let strength = calculatePasswordStrength(password);
        updateStrengthMeter(strength);

        if (REGEX_EMAIL.test(email) && password === passwordConfirm && password.length >= MIN_PASSWD_LENGTH && REGEX_TEL.test(tel)) {
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

    function msgEmail() {
        if (REGEX_EMAIL.test(email)) {
            msgTextEmail.style.display = 'none';
        } else {
            msgTextEmail.style.display = 'block';
        }
    }

    function msgPhone() {
        if (REGEX_TEL.test(tel)) {
            msgTel.style.display = 'none';
        } else {
            msgTel.style.display = 'block';
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
        if (isAdult()) {
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

    function validateDirection() {
        if(pais in paises && paises[pais]["ciudades"].includes(ciudad) && REGEX_DIRECCION.test(direccion)){
            btnDireccion.disabled = false;
        } else {
            btnDireccion.disabled = true;
        }
    }

    function validateExchange() {
        if(!isNaN(amount) && baseCurrency != '' && currency != ''){
            btnEnd.disabled = false;
        } else {
            btnEnd.disabled = true;
        }
    }

    function updateCurrencyOptions(){
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
        msgPasswordMatch();
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

    inputTel.addEventListener("input" , () => {
        tel = inputTel.value;
        msgPhone();
        validateAccountInfo();
    })

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

    inputPais.addEventListener("input", () => {
        pais = inputPais.value;
        inputCiudad.value = "";
        datalistCiudad.innerHTML = "";
        if (pais in paises) {
            inputAutocomplete.disabled = false;
            for (let ciudad of paises[pais]["ciudades"]) {
                let optionCiudad = document.createElement("option");
                optionCiudad.value = ciudad;
                datalistCiudad.appendChild(optionCiudad);
            }
        }
        validateDirection();
    })

    inputCiudad.addEventListener("change", () => {
        ciudad = inputCiudad.value;
        validateDirection();
    })

    inputAutocomplete.addEventListener("input" , () => {
        direccion = inputAutocomplete.value;
        validateDirection();
    })

    let baseCurrency;
    let currency;

    // Los datos pueden estar desactualizados
    // Intenté usar una API pero al menos la versión gratuita no me funcionó

    const tasasDeCambio = {
        USD: {
            EUR: 0.85,
            GBP: 0.75,
            JPY: 110.24,
            AUD: 1.33,
            CAD: 1.26,
        },
        EUR: {
            USD: 1.18,
            GBP: 0.88,
            JPY: 128.87,
            AUD: 1.53,
            CAD: 1.45,
        },
        GBP: {
            USD: 1.33,
            EUR: 1.14,
            JPY: 146.82,
            AUD: 1.74,
            CAD: 1.64,
        },
        JPY: {
            USD: 0.0091,
            EUR: 0.0078,
            GBP: 0.0068,
            AUD: 0.012,
            CAD: 0.011,
        },
        AUD: {
            USD: 0.75,
            EUR: 0.65,
            GBP: 0.57,
            JPY: 82.81,
            CAD: 0.95,
        },
        CAD: {
            USD: 0.79,
            EUR: 0.69,
            GBP: 0.61,
            JPY: 91.32,
            AUD: 1.05,
        }
    };

    selectBaseCurrency.addEventListener("change" , () => {
        baseCurrency = selectBaseCurrency.value;
        selectBaseCurrency.options[0].disabled = true;
        selectCurrency.value = "";
        validateExchange();
        updateCurrencyOptions();
    });

    selectCurrency.addEventListener("change" , () => {
        currency = selectCurrency.value;
        selectCurrency.options[0].disabled = true;
        validateExchange();
    });

    inputAmount.addEventListener("input" , () => {
        amount = inputAmount.value;
        amount = Number(amount);
        validateExchange();
    })
    
    const thanksModule = document.getElementById("thanks-module");

    formulario.addEventListener("submit", (e) => 
    {
        e.preventDefault();
        convertedAmount = amount * tasasDeCambio[baseCurrency][currency];
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
        thanksModule.appendChild(btnCerrarModal);
        thanksModule.appendChild(anchorMail);
        btnCerrarModal.addEventListener("click" , closeModal);
        thanksModule.showModal();
    });

    function closeModal(){
        thanksModule.close();
        location.reload();
    }


});
