let DB;
const formulario = document.querySelector('#formulario');

function conectarDB() {
    const abrirConexion = window.indexedDB.open('crm', 1);

    abrirConexion.onerror = () => {
        console.log('Hubo un error');
    };
    
    abrirConexion.onsuccess = () =>{
        DB = abrirConexion.result;
    };
}

function imprimirAlerta(mensaje, tipo) {
    const alerta = document.querySelector('.alerta');

    if (!alerta) {
        //Crear la alerta
    const divAlerta = document.createElement('DIV');
    divAlerta.className = 'px-4 py-3 rounded max-w-lg mx-auto mt-6 text-center border alerta';

    if (tipo === 'error') {
        divAlerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
    }
    else{
        divAlerta.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
    }

    divAlerta.textContent = mensaje;
    formulario.appendChild(divAlerta);

    setTimeout(() => {
        divAlerta.remove();
    }, 2000);
    }
}