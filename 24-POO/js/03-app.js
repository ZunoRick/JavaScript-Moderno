//Class declaration
class Cliente{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida(){
        return 'Bienvenido al cajero';
    }
}

//Herencia
class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida(){
        return 'Bienvenido al cajero de empresas';
    }
}

const ricardo = new Cliente('Ricardo', 500);
const empresa = new Empresa('Código con Juan', 1500, 1321548, 'Cursos en Línea');
console.log(empresa);
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());