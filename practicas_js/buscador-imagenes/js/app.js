fetch("https://api.unsplash.com/photos?per_page=6&page=1&client_id=nj6BKQ_waiRqB_2UduIIL2b_CehFMzX1UJVgzkNe1lg")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        resultado = document.getElementById("resultado");
        data.forEach(json => {
            const img = document.createElement("img");
            img.src = json.urls.regular;
            img.classList.add("imagen");  // Agregar una clase para aplicar estilos
            resultado.appendChild(img);
        });

    });


const searchForm = document.getElementById("formulario");

searchForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const termino = document.getElementById("termino");
    resultado.innerHTML = "";
    let page = 1;
    fetch(`https://api.unsplash.com/photos?per_page=6&page=${page}&query=${termino.value}&client_id=nj6BKQ_waiRqB_2UduIIL2b_CehFMzX1UJVgzkNe1lg`)
        .then(response => response.json())
        .then(data => {
            data.forEach(json => {
                const img = document.createElement("img");
                img.src = json.urls.regular;
                img.classList.add("imagen");  // Agregar una clase para aplicar estilos
                resultado.appendChild(img);
            });
        });
})


