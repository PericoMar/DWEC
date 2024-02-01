fetch("https://api.unsplash.com/photos?page=2?client_id=nj6BKQ_waiRqB_2UduIIL2b_CehFMzX1UJVgzkNe1lg")
.then(response => response.json())
.then(data => {
    console.log(data);
    resultado = document.getElementById("resultado");
    data.forEach(json => {
        var img = document.createElement("img");
        img.src = json.urls.regular;
        img.classList.add("imagen-pequena");  // Agregar una clase para aplicar estilos
        resultado.appendChild(img);
    });
    
});

