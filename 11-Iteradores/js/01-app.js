for (let i = 0; i < 10; i++) {
    console.log(`Número: ${i}`);
}

for (let i = 1; i <= 20; i++) {
    console.log((i % 2 === 0) ? `El número ${i} es par` : `El número ${i} es impar`);
}

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audífonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},
];

for (let i = 0; i < carrito.length; i++) {
    console.log(element = carrito[i]);
}