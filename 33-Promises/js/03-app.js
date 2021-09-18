const aplicarDescuento = new Promise( (resolve, reject) => {
    const descuento = true;
    if (descuento) {
        resolve('Descuento aplicado');
    }else{
        reject('No se pudo aplicar el descuento');
    }
});

aplicarDescuento
    .then( resultado => mensaje(resultado))
    .catch( error => mensaje(error));

/*
    Hay 3 valores posibles...
    Fulfilled - El promise se cumplió
    Rejected - El promise no se cumplió
    Pending - No se ha cumplido y tampoco fue rechazado
*/

function mensaje(mensaje) {
    console.log(mensaje);
}