let num, n;
let s = false;
let v;
do {
    ct = 0;
    num = parseInt(Math.random() * 1000) + 1;
    do {
        do {
            v = false;
            n = prompt("¿Adivina el número");
            if (n == null) s = true;
            else if (isNaN(num) || n < 0 || n > 1000) {
                alert("No válido");
                v = true;
            }
        } while (s == false && v == true);

        ct++;

        if (s == false) {
            if (num > n) {
                alert("Mi numero es mayor");
            }
            else if(num < n) {
                alert("Mi numero es menor");
            }
        }
    } while (s == false && n != num);

    if (s == false) {
        alert("¡Acertaste! Intentos: " + ct);
    }
} while (s == false && confirm("¿jugar?"));

if (s) {
    document.write("<h1>Cancelado</h1>");
}
else {
    document.write("<h1>Fin</h1>");
}