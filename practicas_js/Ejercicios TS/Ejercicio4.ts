"use strict";
// Función con parametros obligatorios, opcionales y por
//defecto
// donde NOMBRE = obligatorio
// PODER = opcional
// ARMA = por defecto = "arco"
let getAvenger = function (
    nombre: string,
    poder?: string,
    arma: string = "arco"
): string {
    return poder
    ? nombre + " tiene el poder de: " + poder + " y un arma: " + arma 
    : nombre + " tiene un: " + arma;
};
console.log(getAvenger("Mujer maravilla"));