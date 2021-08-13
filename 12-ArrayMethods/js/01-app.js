const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//Comprobar si un valor existe en un arreglo
console.log(meses.includes('Enero'));

//En un arreglo de objetos se utiliza .some
console.log(carrito.some( producto =>{
    return producto.nombre === 'Teclado';
}));

//En un arreglo tradicional con .some
console.log( meses.some( mes => mes ==='Febrero'));