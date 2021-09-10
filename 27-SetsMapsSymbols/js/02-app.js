//WeakSet
//Se le puede pasar solo objetos
const weakset = new WeakSet();
const cliente = {
    nombre: 'Ricardo',
    saldo: 300
};

weakset.add(cliente);
// console.log(weakset.has(cliente));
// weakset.delete(cliente);

console.log(weakset);