const body = document.body;
alert("hola")
body.style.backgroundColor = colorRGB();
function generarNumero(numero){
	return (Math.random()*numero).toFixed(0);
}

function colorRGB(){
	return "rgb("+generarNumero(255)+"," + generarNumero(255) + "," + generarNumero(255) +")";
}