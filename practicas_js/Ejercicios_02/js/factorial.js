let num = prompt("introduzca un numero");

while(typeof num !== 'number' && num < 0 && !num.isInteger()){
    num = prompt("introduzca un numero")
}
let factorial = num;
for(i=num-1 ; i > 0 ; i--){
    factorial *= i;
}

console.log(factorial)

