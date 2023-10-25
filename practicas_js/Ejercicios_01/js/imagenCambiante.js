const img = document.getElementById("perro")
img.addEventListener("mouseover", (ev)=>{
    ev.preventDefault();
    img.src= "img/perro2.jpg"
})

img.addEventListener("mouseout", (ev)=>{
    ev.preventDefault();
    img.src="img/perro1.jpg"
})