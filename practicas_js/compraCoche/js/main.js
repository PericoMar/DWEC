//Create data base:
const db = {
    "blanco": {
        src: "img/cocheBlanco.png",
        alt: "Coche-Blanco",
        title: "Coche Blanco",
        description: "Coche blanco ultimo modelo. Diesel puro. Empieza a ahorrar para pagar el combustible",
        small: "Disponible hasta fin de existencias",
        msgCompra: "Comprado!! Te gusta la gasoliinaaaa... mmm",
        color: "white",
    },
    "rojo": {
        src: "img/cocheRojo.png",
        alt: "Coche-Rojo",
        title: "Coche Rojo",
        description: "Modelo hibrido enchufable. Cuidado con los cortocircuitos.",
        small: "Funciona con tres pilas AAA",
        msgCompra: "Felicidades por la compra!! Tu compañia electrica te quiere...",
        color: "red",
    },
    "verde": {
        src: "img/cocheVerde.png",
        alt: "Coche-Verde",
        title: "Coche Rojo",
        description: "Ecológico a más no poder. Funciona con vegetales de hoja verde.",
        small: "Cuidado con los gases...",
        msgCompra: "Comprado!! Verde que te quiero verde...",
        color: "green",
    }
}

//Obtain all the DOM elements needed:
const imgCoche = document.getElementById("imgCoche");
const title = document.getElementById("title");
const description = document.getElementById("descrip");
const smallDesc = document.getElementById("smallDesc");
const select = document.getElementById("select");
const msgCompra = document.getElementById("compra");
let cocheSeleccionado;
var colorSelected;

select.addEventListener('change', () => {
    let indice = select.selectedIndex;
    if (indice > 0) {
        cocheSeleccionado = select.options[indice].value;
        imgCoche.src = db[cocheSeleccionado].src;
        title.innerHTML = db[cocheSeleccionado].title;
        description.innerHTML = db[cocheSeleccionado].description;
        smallDesc.innerHTML = db[cocheSeleccionado].small;
        colorSelected = db[cocheSeleccionado].color;
        console.log(colorSelected);
    }
    msgCompra.innerHTML = "Comprar";
    msgCompra.style.backgroundColor = "blue";
    msgCompra.style.color = "white";
})

const btn = document.getElementById("compra");

btn.addEventListener("click", () => {
    msgCompra.innerHTML = db[cocheSeleccionado].msgCompra;
    msgCompra.style.backgroundColor = colorSelected;
    if (colorSelected != "white") {
        msgCompra.style.color = "white";
    } else {
        msgCompra.style.color = "black";
    }

})