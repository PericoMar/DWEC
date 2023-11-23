// class Persona {
//     constructor(nombre, edad, genero) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.genero = genero;
//     }
// }

// let personal = new Persona("Juan", 35, "Hombre");


function Persona(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
}

let personal = new Persona("Juan", 35, "Hombre");
//Uso de __proto__ para acceder al prototipo
console.log(personal.__proto__);
