
/* Hoisting: En la primer etapa, JS registra las funciones
* En la segunda etapa manda llamar las funciones
*/

//Function declaretion
obtenerCliente('Ricardo');
function obtenerCliente(nombre) {
    console.log(`El nombre del cliente es: ${nombre}`);
}

//Function expression
obtenerCliente2('Pedro');
const obtenerCliente2 = function (nombre) {
    console.log(`El nombre del cliente es: ${nombre}`);
}