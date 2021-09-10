import funcionAlias, { nombreCliente as clienteNombre, ahorro, mostrarInformacion, tieneSaldo, Cliente } from "./cliente.js";
import { Empresa } from './empresa.js';

funcionAlias();

console.log(clienteNombre);
console.log(ahorro);

console.log(mostrarInformacion(clienteNombre, ahorro));

tieneSaldo(ahorro);

const cliente = new Cliente(clienteNombre, ahorro);
console.log(cliente.mostrarInformacion());

const empresa = new Empresa('Código con Juan', 100, 'Aprendizaje en Línea');
console.log(empresa.mostrarInformacion());