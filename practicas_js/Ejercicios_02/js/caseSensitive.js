let cadena = "Hola que pasa"

cadena = cadena.replaceAll(" ","");
console.log(cadena)

cadenaArray = cadena.split("")
console.log(cadenaArray)

function todasMayusculas(){
    let todasMayusculas = true;
    cadenaArray.forEach(caracter => {
        if(caracter === caracter.toLowerCase()){
            todasMayusculas = false;
        }
    });
    return todasMayusculas;
}

function todasMinusculas(){
    let todasMinusculas = true;
    cadenaArray.forEach(caracter => {
        if(caracter === caracter.toUpperCase()){
            todasMinusculas = false;
        }
    });
    return todasMinusculas;
}
if(todasMinusculas()){
    console.log("Son todos minusculas")
} else if(todasMayusculas()){
    console.log("Son todas mayusculas")
} else {
    console.log("Hay mezcla de mayusculas y minusculas")
}