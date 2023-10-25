const btn = document.getElementById("enviar")

btn.addEventListener("click", (ev)=>{
    ev.preventDefault();
    let num = document.getElementById("num").value
    let p = document.getElementById("mensaje")
    if(Number(num) || num==0){
        if(num >=1 && num <= 100){
            p.innerHTML = "<bold>Correcto</bold>"
        } else {
            p.innerHTML = "Incorrecto"
        }
    } else {
        p.innerHTML = "NaN"
    }
})