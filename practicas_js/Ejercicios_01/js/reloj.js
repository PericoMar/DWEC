function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    horaImprimible = "Hora: " + hora + " : " + minuto + " : " + segundo

    document.getElementById("hora").innerHTML = horaImprimible
    setTimeout("mueveReloj()" , 100)
}

mueveReloj()