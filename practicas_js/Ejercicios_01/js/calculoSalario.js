const btn = document.getElementById("enviar")

btn.addEventListener("click", (ev) => {
    ev.preventDefault();
    let nombre = document.getElementById("name").value
    let apellido = document.getElementById("surname").value
    let salario = Number(document.getElementById("salary").value)
    let edad = document.getElementById("age").value

    let h1 = document.getElementById("salaryUpdate")
    let pNombre = document.getElementById("nombre")
    let pApellidos = document.getElementById("apellidos")
    let pSalario = document.getElementById("salario")
    let pEdad = document.getElementById("edad")


    h1.innerHTML="Actualización salarial"
    pNombre.innerHTML = nombre
    pApellidos.innerHTML = apellido
    if(salario >= 1000 && salario <2000){
        if(edad > 45){
            salario = salario + salario/100 * 3
        } else {
            salario = salario + salario/100 * 10
        }
    } else if( salario < 1000){
        if(edad < 30){
            salario = 1100
        }else if(edad > 45){
            salario = salario + salario/100 * 15
        } else {
            salario = salario + salario/100 * 3
        }
    }
    pSalario.innerHTML = salario.toFixed(2)
    pEdad.innerHTML = edad
})