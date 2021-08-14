const busqueda = document.querySelector('.busqueda');
busqueda.addEventListener('input', (e) => {
    if(e.target.value === '')
        console.log('Fallo la validación');
}); 

//input cubre las siguientes funciones exepto blur
//copy
//paste
//blur - funciona en formularios se ejecuta al salir del campo
//keydown - keyup
//cut