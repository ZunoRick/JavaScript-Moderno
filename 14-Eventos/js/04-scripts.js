const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', e => {
    //Evita que el formulario se envie por default
    //Detiene la acción por default
    e.preventDefault();
    console.log('Buscando...');
    console.log(e.target.action);
    console.log(e.target.method);
});

