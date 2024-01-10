let nombre :string = "Manolo el del bombo";
let edad : number = 23;

interface Personaje {
    nombre : string,
    edad : number
}

const PERSONAJE : Personaje = {
nombre: nombre,
edad: edad
};

console.log(nombre);
console.log(edad);
console.log(PERSONAJE.nombre);
console.log(PERSONAJE.edad);