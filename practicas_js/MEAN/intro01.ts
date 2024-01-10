let nombreUser : string | number = "Pedro Martinez";

let age : number = 22;

let mensaje : string = `Buenas ${nombreUser}, tienes ${age} años`;

console.log(mensaje);

let caracteristicas : Caracteristicas = {
    saltar : true,
    magia : "Fire ball!!",
    mochila : ["anillo", "abrigo"],
    nivel : 4
}

interface Caracteristicas {
    saltar : boolean,
    magia : string,
    mochila : string[],
    nivel : number,
}