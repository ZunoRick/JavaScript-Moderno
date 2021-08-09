const producto = {
    nombre: "Monitor Curvo 20 Pulgadas",
    precio: 300,
    disponible: true
}

const {nombre, precio, disponible} = producto;
console.log(`${nombre} con un precio de ${precio}`);

//Destructuring con arreglos
const numeros = [10, 20, 30, 40, 50];
// let  [ , , tercero] = numeros;
// console.log(tercero);

let  [primero, segundo, ...tercero] = numeros;
console.log(tercero);

