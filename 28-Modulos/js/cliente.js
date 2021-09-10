export const nombreCliente = 'Ricardo';
export const ahorro = 200;

export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

export function tieneSaldo(ahorro) {
    if (ahorro > 0) {
        console.log('Sí tiene saldo');
    } else{
        console.log('El cliente no tiene saldo');
    }
}

export class Cliente{
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}

//Puede ir con o sin nombre el export default
// export default function nuevaFuncion() 
export default function () {
    console.log('Esto es un export default');
}