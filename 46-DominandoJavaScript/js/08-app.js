//window === self
//window.self === self

self.onload = () =>{
    console.log('Ventana Lista');
}

window.nombre = 'Monitor 20 Pulgadas';

const producto = {
    precio: 30,
    disponible: true,
    mostrarInfo: function () {
        return `El produto: ${self.nombre}`
    }
}
console.log(producto.mostrarInfo());