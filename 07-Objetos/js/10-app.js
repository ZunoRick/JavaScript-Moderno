const producto = {
    nombre: "Monitor Curvo 20 Pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '2kg',
    medida:'1m'
}

const resultado = Object.assign(producto, medidas);

//Spread Operator o Rest Operator
const resultado2 = { ...producto, ...medidas}

console.log(resultado2);