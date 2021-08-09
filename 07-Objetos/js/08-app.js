"use strict";

const producto = {
    nombre: "Monitor Curvo 20 Pulgadas",
    precio: 300,
    disponible: true
}

//Freeze no permite modificar nada de los atributos de un objeto
Object.freeze(producto);

// producto.disponible = false;
// producto.imagen = "imagen.jpg";

console.log(Object.isFrozen(producto));