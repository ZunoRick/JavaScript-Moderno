const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

document.addEventListener('DOMContentLoaded', () => {
    formulario.addEventListener('submit', validarBusqueda);
});

function validarBusqueda(e) {
    e.preventDefault();

    const busqueda = document.querySelector('#busqueda').value;
    
    if (busqueda.length < 2) {
        mostrarMensaje('Búsqueda muy corta, añade más información.');
        return;
    }

    consultarAPI(busqueda);
}

function consultarAPI(busqueda) {
    const githubURL = `https://www.freetogame.com/api/games?category=${busqueda}`;

    axios.get(githubURL)
        .then( respuesta => console.log(respuesta))
}

function mostrarMensaje(mensaje) {
    const existeAlerta = document.querySelector('.alerta');

    if (!existeAlerta) {
        const alerta = document.createElement('DIV');
        alerta.className = 'bg-gray-100 p-3 text-center mt-3 alerta';
        alerta.textContent = mensaje;
    
        formulario.appendChild(alerta);
    
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}