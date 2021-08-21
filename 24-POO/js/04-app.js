class Cliente{
    #nombre; //Atributo privado

    constructor(nombre, saldo){
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida(){
        return 'Bienvenido al cajero';
    }
}

const ricardo = new Cliente('Ricardo', 500);
console.log(ricardo.mostrarInformacion());
// console.log(ricardo.#nombre);