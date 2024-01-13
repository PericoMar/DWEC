document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formRegistro");
    const pasos = document.querySelectorAll(".paso");
    const botonesSiguiente = document.querySelectorAll(".btn-siguiente");
    const progressBar = document.querySelector(".progress-bar")
    const botonesAnterior = document.querySelectorAll(".btn-anterior");

    //Control del formulario:
    const inputNombre = document.getElementById("input-nom");
    const inputApe = document.getElementById("input-ape");
    const botonNombre = document.getElementById("btn-nombre");
    const REGEXNOMBRE = /^[A-Za-z]+(?: [A-Za-z]+)*$/;

    const selectGenero = document.getElementById("select-gen");
    const botonGenero = document.getElementById("btn-gen");


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
    let nom, ape;
    let gen;

    function validarNomApe() {
        if(REGEXNOMBRE.test(nom) && REGEXNOMBRE.test(ape)){
            botonNombre.disabled = false;
        } else {
            botonNombre.disabled = true;
        }
    }

    function validarGenero() {
        if(gen){
            botonGenero.disabled = false;
        } else {
            botonGenero.disabled = true;
        }
    }

    // Botones desactivados con los campos vacios:
    botonNombre.disabled = true;
    botonGenero.disabled = true;

    // Controlamos el evento input para saber lo que pone cada vez que hace un cambio,
    // no pongo change porque en change tiene que perder el foco y lo normal en un formulario
    // es que tu vayas a clickar el boton justo despues de escribir.

    
    inputNombre.addEventListener("input" , () => {
        nom = inputNombre.value;
        validarNomApe();
    })

    inputApe.addEventListener("input" , () => {
        ape = inputApe.value;
        validarNomApe();
    })


    selectGenero.addEventListener("change" , () => {
        gen = selectGenero.value;
        validarGenero();
    })
    

    formulario.addEventListener("submit", (e) => e.preventDefault());


});
