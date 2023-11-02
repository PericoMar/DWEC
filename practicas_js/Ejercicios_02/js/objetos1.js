function Persona (nombre,edad,genero){
    this.nombre = nombre || "";
    this.edad = edad
    this.genero = genero || "Masculino"
}

Persona.prototype.obtDetalles = function (){
    console.log(this.nombre)
    console.log(this.edad)
    console.log(this.genero)
}

function Estudiante(nombre,edad,genero,curso,grupo){
    this.base = Persona;
    this.base(nombre,edad,genero);
    this.curso = curso;
    this.grupo = grupo;
}

Estudiante.prototype = new Persona;
Estudiante.prototype.registrar = function(){
    console.log(this.nombre + "esta en " + this.curso + " y en el grupo " + this.grupo)
}

function Profesor(nombre,edad,genero,asignatura,nivel){
    this.base = Persona;
    this.base(nombre,edad,genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
}

Profesor.prototype = new Persona;
Profesor.prototype.asignar = function(){
    console.log(this.nombre + "da esta asingatura " + this.asignatura);
}

let persona = new Persona("Pedro" , "22")

persona.obtDetalles();

let estudiante = new Estudiante("Pedro", "22", "Masculino", 4, 5);

estudiante.obtDetalles();