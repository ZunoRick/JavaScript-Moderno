const cargarJsonArrayBtn = document.querySelector('#cargarJSONArray');

cargarJsonArrayBtn.addEventListener('click', cargarDatos);

function cargarDatos(params) {
	const url = 'data/empleados.json';
	fetch(url)
		.then((respuesta) => respuesta.json())
		.then((resultado) => mostrarHTML(resultado));
}

function mostrarHTML(empleados) {
	const contenido = document.querySelector('.contenido');
	let html = '';
	empleados.forEach( empleado => {
		const { empresa, id, nombre, trabajo } = empleado;
		html += `
        <p>Empleado: ${nombre}</p>
        <p>Id: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
        `;
	});
    contenido.innerHTML = html;
}
