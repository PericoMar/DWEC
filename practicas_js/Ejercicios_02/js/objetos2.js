class Persona{
    constructor(nombre,edad,genero){
        this.nombre = nombre || "";
        this.edad = edad
        this.genero = genero || "Masculino"
    }
    obtDetalles(){
        console.log(this.nombre)
        console.log(this.edad)
        console.log(this.genero)
    }
}

class Estudiante extends Persona{
    constructor(nombre,edad,genero,curso,grupo){
        super(nombre,edad,genero);
        this.curso = curso;
        this.grupo = grupo;
    }
    registrar(){
        console.log(this.nombre + "esta en " + this.curso + " y en el grupo " + this.grupo);
    }
}

class Profesor extends Persona{
    constructor(nombre,edad,genero,curso,grupo){
        super(nombre,edad,genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar(){
        console.log(this.nombre + "da esta asingatura " + this.asignatura);
    }
}

let persona = new Persona("Pedro" , "22")

persona.obtDetalles();

let estudiante = new Estudiante("Pedro", "22", "Masculino", 4, 5);

estudiante.obtDetalles();