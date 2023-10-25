function parImpar(num){
    let string;
    if(num%2 === 0){
        string = "Es par";
    } else {
        string ="Es Impar";
    }
    return string;
}

console.log(parImpar(prompt("Introduzca un numero.")))