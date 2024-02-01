const API_KEY = 'nj6BKQ_waiRqB_2UduIIL2b_CehFMzX1UJVgzkNe1lg';

const resultado = document.getElementById("resultado");

cargarImagenes();

const btnNext = document.getElementById("btn-next");
const btnBack = document.getElementById("btn-back");
btnBack.disabled = true;
const searchForm = document.getElementById("formulario");
let page = 1;
let query = "";

searchForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const termino = document.getElementById("termino");
    query = termino.value;
    resultado.innerHTML = "";
    page = 1;
    if(!query){
        cargarImagenes(page);
    } else {
        cargarImagenesConQuery(page,query);
    }
});

btnNext.addEventListener("click", () => {
    page++;
    resultado.innerHTML = "";
    if(!query){
        cargarImagenes(page,query);
    } else {
        cargarImagenesConQuery(page,query);
    }
    btnBack.disabled = false;
});

btnBack.addEventListener("click", () => {
    page--;
    resultado.innerHTML = "";
    if(!query){
        cargarImagenes(page,query);
    } else {
        cargarImagenesConQuery(page,query);
    }
    if (page === 1) {
        btnBack.disabled = true;
    }
});

async function cargarImagenes(page = 1) {
    try {
        const response = await fetch(`https://api.unsplash.com/photos?per_page=6&page=${page}&client_id=${API_KEY}`);

        if (!response.ok) {
            throw new Error(`Error al cargar las imágenes. Estado: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        for (const json of data) {
            const img = document.createElement("img");
            img.src = json.urls.regular;
            img.classList.add("imagen");  // Agregar una clase para aplicar estilos
            resultado.appendChild(img);
        }
    } catch (error) {
        console.error("Error al cargar imágenes:", error);
    }
}

async function cargarImagenesConQuery(page = 1, query) {
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?per_page=6&page=${page}&query=${query}&client_id=${API_KEY}`);

        if (!response.ok) {
            throw new Error(`Error al cargar las imágenes. Estado: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        for (const json of data.results) {
            const img = document.createElement("img");
            img.src = json.urls.regular;
            img.classList.add("imagen");  // Agregar una clase para aplicar estilos
            resultado.appendChild(img);
        }
    } catch (error) {
        console.error("Error al cargar imágenes:", error);
    }
}

