"use strict";

const producto = {
    nombre: "Monitor Curvo 20 Pulgadas",
    precio: 300,
    disponible: true
}

//Seal permite modificar los atributos de un objeto pero no puede extenderlos o eliminarlos
Object.seal(producto);

// producto.disponible = false;
// producto.imagen = "imagen.jpg";

console.log(Object.isSealed(producto));