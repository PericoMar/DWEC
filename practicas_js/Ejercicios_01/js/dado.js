const btn = document.getElementById("dado")

btn.addEventListener("click", (ev)=>{

    ev.preventDefault();
    const SRC = ["img/dado1.jpg", "img/dado2.jpg", "img/dado3.jpg",
                "img/dado4.png" , "img/dado5.jpg", "img/dado6.jpg"]
    document.getElementById("img").src = SRC[(Math.ceil(Math.random() * 6))-1]
})