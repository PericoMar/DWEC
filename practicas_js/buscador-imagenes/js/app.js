fetch("https://api.unsplash.com/collections?client_id=nj6BKQ_waiRqB_2UduIIL2b_CehFMzX1UJVgzkNe1lg")
.then(response => response.json())
.then(data => {
    console.log(data);
    resultado = document.getElementById("resultado");
    img = document.createElement("img");
    img.src = data[0].links.html;
    resultado.appendChild(img);  
});

