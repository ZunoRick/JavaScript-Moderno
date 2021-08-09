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

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);
console.table(carrito);


//Eliminar del inicio del arreglo
carrito.shift();
console.table(carrito);

//
carrito.splice(1,1);
console.table(carrito);
