//Closures

const obtenerCliente = () =>{
    const nombre = 'Ricardo';

    function muestraNombre() {
        console.log(nombre);
    }
    return muestraNombre;
}

const cliente = obtenerCliente();
cliente();