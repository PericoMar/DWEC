let paleta = document.getElementById("paleta")
let lienzo = document.getElementById("lienzo")

const COLORES = ["blue", "green", "yellow", "pink", "red"];

for(i = 0 ; i < COLORES.length ; i++){
    let divColor = document.createElement("div")
    divColor.innerHTML = COLORES[i];
    divColor.style.backgroundColor = COLORES[i];
    divColor.id = COLORES[i];
    paleta.appendChild(divColor);
}

for(i = 1 ; i <= 4 ; i++){
    let fila = document.createElement("div");
    lienzo.appendChild(fila);
    fila.id = "fila" + i;
    for(j = 1 ; j <= 5 ; j++){
        let divPintar = document.createElement("div");
        divPintar.id = "casilla" + i + j;
        divPintar.innerHTML = "casilla" + i + j;
        divPintar.style.height = "100px";
        divPintar.style.width = "100px";
        divPintar.style.border = "5px solid black"
        fila.appendChild(divPintar);
    }
    fila.style.display = "flex";
    fila.style.justifyContent = "space-evenly";
}

const selected = document.getElementById("selected");
let color;
let arrayDivs = Array.from(paleta.getElementsByTagName("div"));
arrayDivs.forEach(div => {
    div.addEventListener("click", () => {
        selected.style.backgroundColor = div.style.backgroundColor;
    })
})

let arrayDivsPintar = Array.form