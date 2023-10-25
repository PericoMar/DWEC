var valores = [true, 5, false, "hola", "adios", 2];
let strings = valores.filter((valor)=>{
    return typeof valor === 'string'
})

strings.sort()
console.log(strings[strings.length-1])

let booleanos = []
booleanos = valores.filter((valor)=>{
    return valor === true || valor === false
})
console.log(booleanos)

let numbers = valores.filter((valor)=>{
    return typeof valor === 'number'
})
console.log(numbers)

function suma(numbers){
    let sum = 0;
    numbers.forEach(num => {
        sum += num
    });
    return sum;
}

function resta(numbers){
    let resta = 0;
    numbers.forEach(num => {
        resta -= num
    });
    return resta;
}

function multiplicacion(numbers){
    let multi = numbers[0];
    for(i = 1 ; i < numbers.length ; i++){
        multi *= numbers[i]
    }
    return multi;
}

function division(numbers){
    let division = numbers[0];
    for(i = 1 ; i < numbers.length ; i++){
        division /= numbers[i]
    }
    return division;
}

function resto(numbers){
    let resto = numbers[0];
    for(i = 1 ; i < numbers.length ; i++){
        resto %= numbers[i]
    }
    return resto;
}
console.log(suma(numbers))
console.log(resta(numbers))
console.log(multiplicacion(numbers))
console.log(division(numbers))
console.log(resto(numbers))

