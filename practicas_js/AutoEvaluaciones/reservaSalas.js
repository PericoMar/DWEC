/*
Objetos usarios y salas.
Crear objetos salas, cada sala consta de un nombre, un listado determinado de horas libres(int 8-20)
Regsitro reserva pendiente de confirmar, resreva confirmada, reserva cancelada.
Alta de nuevas solicitudes de reserva de sala, cada solicitud consta de 
un indentificador numero, un nombre de solicitante, un nombre de sala y una hora de reserva.
*/

class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }
}

class Sala {
    constructor(nombre, horasLibres) {
        this.nombre = nombre;
        //Comprobar que es un array y que tiene horas de 8 a 20:
        if (horasLibres instanceof Array && horasLibres.length > 0) {
            for (let i = 0; i < horasLibres.length; i++) {
                if (horasLibres[i] < 8 || horasLibres[i] > 20) {
                    throw new Error("Las horas libres deben estar entre 8 y 20");
                }

            }
            this.horasLibres = horasLibres;
        } else {
            throw new Error("El parametro horasLibres debe ser un array con horas de 8 a 20");
        }
        this.reservasPendientes = [];
        this.reservasConfirmadas = [];
        this.reservasCanceladas = [];
    }

    añadirReserva(reserva) {
        if (reserva instanceof SolicitudReserva) {
            if (reserva.getSala() == this.nombre) {
                this.reservasPendientes.push(reserva);
            } else {
                throw new Error("La sala de la reserva no coincide con la sala.");
            }
        } else {
            throw new Error("El objecto no es de tipo Reserva.");
        }

        if (this.reservasPendientes.length > 0) {
            this.gestinarReserva();
        }
    }

    gestinarReserva() {
        for (let reserva of this.reservasPendientes) {
            if (this.horasLibres.includes(reserva.getHora())) {
                this.reservasConfirmadas.push(reserva);
                this.horasLibres.splice(this.horasLibres.indexOf(reserva.getHora()), 1);
            } else {
                this.reservasCanceladas.push(reserva);
            }
        }
    }

    estadoReserva(reserva) {
        if (this.reservasConfirmadas.includes(reserva)) {
            return "Confirmada";
        } else if (this.reservasCanceladas.includes(reserva)) {
            return "Cancelada";
        } else if (this.reservasPendientes.includes(reserva)) {
            return "Pendiente";
        } else {
            return "No existe";
        }
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getHorasLibres() {
        return this.horasLibres;
    }

    setHorasLibres(horasLibres) {
        this.horasLibres = horasLibres;
    }
}

class SolicitudReserva {
    constructor(id, usuario, sala, hora) {
        this.id = id;
        if (usuario instanceof Usuario) {
            this.usuario = usuario;
        } else {
            throw new Error("El parametro usuario debe ser de tipo Usuario.");
        }
        this.sala = sala;
        this.hora = hora;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getSala() {
        return this.sala;
    }

    setSala(sala) {
        this.sala = sala;
    }

    getHora() {
        return this.hora;
    }

    setHora(hora) {
        this.hora = hora;
    }

    getInfo() {
        return "Solicitud de reserva: " + this.getId() + " - " + this.getNombre() + " - " + this.getSala() + " - " + this.getHora();
    }
}

/*
Para probar la aplicación hemos de ser capaces de dar de alta un par de salas
y dar de alta varias solicitudes de uso en distintas horas a distintas salas.
Dichas solicitudes podrán ser aprobadas o canceladas.
Tiene que ser posible ver el estado de nuestra solicitud
*/

const usuario1 = new Usuario("Pepe");
const sala1 = new Sala("Sala 1", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]);

try {
    
    const reserva1 = new SolicitudReserva(1, usuario1, "Sala 1", 8);
    const reserva2 = new SolicitudReserva(1, usuario1, "Sala 1", 8);

    //Probando que se cancelen las reservas a las mismas horas y que se quitan las horasLibres:
    sala1.añadirReserva(reserva1);
    console.log(sala1.estadoReserva(reserva1));
    sala1.añadirReserva(reserva2);
    console.log(sala1.estadoReserva(reserva2));
    console.log(sala1.getHorasLibres());

    //Probando que no se pueden meter horas que no estan entre 8 y 20:
    const sala2 = new Sala("Sala 2", [30]);
    console.log(sala2.getHorasLibres());


} catch (error) {
    console.log(error.message);
}

try {
    //Probando que no se pueden añadir reservas a salas que no existen:
    const reserva3 = new SolicitudReserva(1, usuario1, "Sala 3", 8);
    sala1.añadirReserva(reserva3);
    console.log(sala1.estadoReserva(reserva3));
    console.log(sala1.getHorasLibres());
} catch (error) {
    console.log(error.message);
}
