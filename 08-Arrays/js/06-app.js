const meses = ['Enero', 'Febrero', 'Marzo'];
const carrito = [];

meses.push('Abril');
meses.push('Mayo');

console.log(meses);

meses.pop();
meses.pop();
console.log(meses);

const producto = {
    nombre: 'Monitor 32 Pulgadas',
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

let resultado;
//Resultado guarda una copia del array carrito, el arreglo original no se modifica
resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];

// console.table(carrito);
console.table(resultado);