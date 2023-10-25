let texto = "holaaloh"

let izq = 0;
let der = texto.length - 1
let esPalindromo = true;
while(izq < der && esPalindromo){
    if(texto.charAt(izq) !== texto.charAt(der)){
        esPalindromo = false;
    }
    izq++;
    der--;
}

if(esPalindromo){
    console.log("Es palindromo");
} else {
    console.log("No es palindromo");
}