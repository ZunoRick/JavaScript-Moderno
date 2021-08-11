iniciarApp();

function iniciarApp() {
    console.log('Iniciando App');
    segundaFuncion();
}

function segundaFuncion() {
    console.log('Desde la segunda función');
    usuarioAutenticado('Pablo');
}

function usuarioAutenticado(nombre) {
    console.log(`Usuario autenticado exitosamente: ${nombre}`);
}