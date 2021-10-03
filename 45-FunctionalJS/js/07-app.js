//Funciones que retornan una función

const obtenerCliente = () => () => console.log('Ricardo Z');

const fn = obtenerCliente();
fn();