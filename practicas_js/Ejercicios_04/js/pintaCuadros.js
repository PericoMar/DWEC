let paleta = document.getElementById("paleta")
let lienzo = document.getElementById("lienzo")
const EJEX_LIENZO = 30;
const EJEY_LIENZO = 40;

const COLORES = ["blue", "green", "yellow", "pink", "red"];

for(i = 0 ; i < COLORES.length ; i++){
    let divColor = document.createElement("div")
    divColor.style.backgroundColor = COLORES[i];
    divColor.id = COLORES[i];
    paleta.appendChild(divColor);
}

for(i = 1 ; i <= EJEX_LIENZO ; i++){
    let fila = document.createElement("div");
    lienzo.appendChild(fila);
    fila.id = "fila" + i;
    for(j = 1 ; j <= EJEY_LIENZO ; j++){
        let divPintar = document.createElement("div");
        divPintar.id = "casilla" + i + j;
        divPintar.style.height = "40px";
        divPintar.style.width = "40px";
        divPintar.style.border = "1px solid black"
        fila.appendChild(divPintar);
    }
    fila.style.display = "flex";
    fila.style.justifyContent = "center";
}

const selected = document.getElementById("selected");
selected.style.border= "1px solid black";
let color;
let arrayDivs = Array.from(paleta.getElementsByTagName("div"));
arrayDivs.forEach(div => {
    div.addEventListener("click", () => {
        selected.style.backgroundColor = div.style.backgroundColor;
    })
})

let arrayDivsPintar = Array.from(lienzo.getElementsByTagName("div"));
arrayDivsPintar.forEach(div => {
    casillasPintar = Array.from(div.getElementsByTagName("div"));
    casillasPintar.forEach(casilla => {
        casilla.addEventListener("click", () => {
            casilla.style.backgroundColor = selected.style.backgroundColor;
        })
    })
})