// function coords(ev){
//     let x = ev.clientX;
//     let y = ev.clientY;
//     document.getElementById("x").textContent = x;
//     document.getElementById("y").textContent = y;
// }

// document.addEventListener("mousemove", coords(ev));

document.addEventListener("mousemove", (ev) => {
    let x = ev.clientX;
    let y = ev.clientY;
    document.getElementById("x").textContent = "X: "+x;
    document.getElementById("y").textContent = "Y: "+y;
});