const btn = document.getElementById("enviar")

function dniCorrecto(dni){
    const rgex = /^\d{8}$/;
    return dni !== "" && rgex.test(dni);
}


function calculaLetra(dni){
    const LETRAS = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D",
                        "X", "B", "N", "J","Z", "S", "Q", "V" ,"H", "L", "C", "K" ,"E"]
    letra = LETRAS[dni%23]
    return letra;
}

btn.addEventListener("click", (ev) =>{
    ev.preventDefault();
    let dni = document.getElementById("dni").value;
    let text = document.getElementById("texto")
    if(dniCorrecto(dni)){
        text.innerHTML= "DNI bien escrito: "+dni+calculaLetra(dni);
    } else {
        alert("DNI malo")
    }
})