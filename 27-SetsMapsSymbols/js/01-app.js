const carrito = new Set();

carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Camisa'); //Los duplicados no se agregan en el set

console.log(carrito.delete('Guitarra'));
console.log(carrito.has('Guitarra'));

console.log(carrito.size);
// carrito.clear();
carrito.forEach( (producto, index) => {
    console.log(producto);
    console.log(index);
});
console.log(carrito);

//Del siguiente arreglo, aliminar los duplicados
const numeros = [10, 20, 30, 40, 50, 10, 20];
const noDuplicados = new Set(numeros);
console.log(noDuplicados);