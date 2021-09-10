//Symbols
const sym = Symbol();
const sym2 = Symbol();

// console.log( Symbol() === Symbol());

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

//Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Ricardo';
persona[apellido] = 'Zuno';
persona.tipoCliente = 'Premium';
persona.saldo = 600;

console.log(persona);
// console.log(persona[nombre]);

//Las propiedades que utilizan un symbol no son iterables
for (let i in persona) {
    console.log(i);
}

//Definir una descripción del symbol
const nombreCliente = Symbol('Nombre del Cliente');
const cliente = {};
cliente[nombreCliente] = 'Pedro';
console.log(cliente);