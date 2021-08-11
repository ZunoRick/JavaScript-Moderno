const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audífonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},
];

carrito.forEach(producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`));

//Crea un nuevo arreglo
const nuevoArreglo2 = carrito.map( producto => `${producto.nombre} - Precio: ${producto.precio}`);

console.log(nuevoArreglo2);