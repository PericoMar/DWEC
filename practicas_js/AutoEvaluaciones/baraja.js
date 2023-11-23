function Carta(valor, palo){
    this.valor = valor;
    this.palo = palo;
    Carta.OROS = 1;
    Carta.COPAS = 2;
    Carta.ESPADAS = 3;
    Carta.BASTOS = 4;

    Carta.traducirValor = function (valor) {
        if(valor === 1) return "As";
        else if(valor === 8) return "Sota";
        else if(valor === 9) return "Caballo";
        else if(valor === 10) return "Rey";
        else return valor;
    };

    Carta.traducirPalo = function (palo) {
        if(palo == Carta.OROS) return "Oros";
        else if(palo == Carta.ESPADAS) return "Copas";
        else if(palo == Carta.COPAS) return "Espadas";
        else if(palo == Carta.BASTOS) return "Bastos";
        else return false;
    };

    this.darValor = function (valor,palo) {
        if(palo != Carta.OROS && palo != Carta.ESPADAS && palo != Carta.COPAS && palo != Carta.BASTOS) return false;
        else if (parseInt(valor) < 1 || parseInt(valor) > 10) return false;
        else {
            this.valor = parseInt(valor);
            this.palo = palo;
        }
    }

    this.toString = function () {
        return Carta.traducirValor(this.valor) + " de " + Carta.traducirPalo(this.palo) + "--";
    }

    if(this.darValor(valor,palo) === false) return null;
    else return this;
}

function Baraja(){
    const N_CARTAS = 40;
    let palo = 1;
    let valor = 1;

    var _baraja = new Array(N_CARTAS);
    for(let i = 0; i < N_CARTAS; i++){
        _baraja[i] = new Carta(valor,palo);
        if(valor == 10){
            valor = 1;
            palo++;
        }
        else valor++;
    }

    // this.barajar = function () {
    //     let aux;
    //     for(let i = 0; i < N_CARTAS; i++){
    //         let pos = Math.floor(Math.random() * N_CARTAS);
    //         aux = _baraja[i];
    //         _baraja[i] = _baraja[pos];
    //         _baraja[pos] = aux;
    //     }
    // }

    this.barajar = function () {
        for(let c = 1; c <= 100 ; c++){
            i = parseInt(Math.random() * N_CARTAS);
            j = parseInt(Math.random() * N_CARTAS);
            [_baraja[i], _baraja[j]] = [_baraja[j], _baraja[i]];
        }
    }

    this.toString = function () {
        let cadena = "";
        for(let i = 0; i < N_CARTAS; i++){
            cadena += _baraja[i].toString()+ "\n";
        }
        return cadena;
    }

    this.barajar();
}


let b = new Baraja();
document.write(b.toString());
document.write("<br>");
b.barajar();
document.write(b.toString());