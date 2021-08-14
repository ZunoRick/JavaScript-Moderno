const nav = document.querySelector('.navegacion');

//Registar un evento
nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegación');
    nav.style.backgroundColor = 'transparent';
});

nav.addEventListener('mouseenter', () => {
    console.log('Entrando a la navegación');
    nav.style.backgroundColor = 'white';
});

//mousedown - similar al click
//mouseup - soltar el click del mouse
//dblclick = doble click
