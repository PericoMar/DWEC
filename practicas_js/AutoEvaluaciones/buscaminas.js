let filas = parseInt(prompt("Inserte filas: "));
while(filas < 2){
    filas = prompt("Inserte filas: ");
}
let columnas = parseInt(prompt("Inserte columnas: "));
while(columnas < 2){
    columnas = prompt("Inserte columnas: ");
}
let minas = parseInt(prompt("Inserte numero de minas: "));
while(minas > columnas*filas/3){
    minas = prompt("Inserte numero de minas: ");
}

function creaTablero(){
    let tablero = Array.from({ length: filas }, () => Array.from({ length: columnas }, () => 0));
    // for (i = 0; i < filas ; i++){
    //     tablero[i] = [];
    //     for(j  = 0; j < columnas ; j++){
    //         tablero[i][j]=0;        
    //     }
    // }
    return tablero;
}

function insertaMina(tablero){
    let filaRandom = Math.floor(Math.random() * (filas));
    let columnaRandom = Math.floor(Math.random() * (columnas));
    if(tablero[filaRandom][columnaRandom] === "*"){
        insertaMina(tablero);
    } else {
        tablero[filaRandom][columnaRandom] = "*";
    }
}

let tablero = creaTablero();

for(let i = 0; i < minas ; i++){
    insertaMina(tablero);
}

console.table(tablero);  