class Edificio{
    constructor(calle,numero,cp){
        this.calle = calle;
        this.numero = numero;
        this.cp = cp;
        this.nombre = "";
    }

    edificio = [[]];

    agregarPlantasYPuertas(plantas,puertas){
        for (let i = 0; i < plantas; i++) {
            this.edificio.push(new Array(puertas).fill(new Array()));
        }
    }
    modificarNumero(numero){
        this.numero = numero;
    }
    modificarCalle(calle){
        this.calle = calle;
    }
    modificarCodigoPostal(cp){
        this.cp = cp;
    }
    imprimeCalle(){
        return this.calle;
    }
    imprimeNumero(){
        return this.numero;
    }
    imprimeCodigoPostal(){
        return this.cp;
    }
    agregarPropietario(nombre,planta,puerta){
        this.edificio[planta][puerta] = nombre;
    }
    imprimePlantas(){
        for(let i = 0; i<this.edificio.length;i++){
            for(let j=0 ; j<this.edificio[i].length;j++){
                console.log(this.edificio[i][j]);
            }
        }
    }

}

let edificio = new Edificio("Calle 1",1,11111);

edificio.agregarPlantasYPuertas(2,2);
edificio.agregarPropietario("Juan",0,0);
edificio.imprimePlantas();