//Variables
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn')
const formulario = document.querySelector('#enviar-mail');

const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners();
function eventListeners() {
	//Cuando la app arranca
	document.addEventListener('DOMContentLoaded', iniciarApp);

	//Campos del formulario
	email.addEventListener('blur', validarFormulario);
	asunto.addEventListener('blur', validarFormulario);
	mensaje.addEventListener('blur', validarFormulario);

    //Reinicia el formulario
    btnReset.addEventListener('click', resetearFormulario);

    //Emviar email
    formulario.addEventListener('submit', enviarEmail);
}

//Funciones
function iniciarApp() {
	btnEnviar.disabled = true;
	btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
    email.classList.remove('border', 'border-green-500');
    asunto.classList.remove('border', 'border-green-500');
    mensaje.classList.remove('border', 'border-green-500');
}

function validarFormulario(e) {
	if (e.target.value.length > 0) {
		//Elimina los errores
		const error = document.querySelector('p.error');
		if (error) {
			error.remove();
		}
		e.target.classList.remove('border', 'border-red-500');
		e.target.classList.add('border', 'border-green-500');
	} else {
		e.target.classList.remove('border', 'border-green-500');
		e.target.classList.add('border', 'border-red-500');
		mostrarError('Todos los campos son obligatorios');
	}

	if (e.target.type === 'email') {
		// const resultado = e.target.value.indexOf('@');

		if (er.test(e.target.value)) {
			const error = document.querySelector('p.error');
			if (error) {
				error.remove();
			}
			e.target.classList.remove('border', 'border-red-500');
			e.target.classList.add('border', 'border-green-500');
		} else {
			e.target.classList.add('border', 'border-red-500');
			mostrarError('El email no es v??lido');
		}
	}

    if (er.test(email.value) && asunto.value !== '' && mensaje.value !== '') {
        btnEnviar.disabled = false;
	    btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }
}

function mostrarError(mensaje) {
	const mensajeError = document.createElement('P');
	mensajeError.textContent = mensaje;
	mensajeError.classList.add(
		'border',
		'border-red-500',
		'background-red-100',
		'text-red-500',
		'p-3',
		'mt-5',
		'text-center',
		'error'
	);
	const errores = document.querySelectorAll('.error');

	if (errores.length === 0) {
		formulario.insertBefore(mensajeError, document.querySelector('#spinner'));
	}
}

function enviarEmail(e) {
    e.preventDefault();
    const spiner = document.querySelector('#spinner');
    spiner.style.display = 'flex';

    //Despu??s de 3 segundos ocultar el spinner y mostrar el mensaje
    setTimeout(() => {
        spiner.style.display = 'none';

        //Mensaje de enviado correctamente
        const parrafo = document.createElement('p');
        parrafo.textContent = 'El mensaje se envi?? correctamente';
        parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');
        formulario.insertBefore(parrafo, document.querySelector('#spinner'));

        setTimeout(() => {
            parrafo.remove(); //Eliminar el mensaje de ??xito
            resetearFormulario();
        }, 5000);
    }, 3000);
}

//Funci??n que resetea el formulario
function resetearFormulario() {
    formulario.reset();
    iniciarApp();
}