import { Citas } from "../js/classes/Citas";

describe('Probar la clase de Citas', () => {
    const citas = new Citas();
    const id = Date.now();

    test('Agregar una nueva cita', () =>{
        const citaObj = {
            id,
            mascota: 'Hook',
            propietario: 'Ricardo',
            telefono: '5541566135',
            fecha: '10-10-2021',
            hora: '13:30',
            sintomas: 'Solo duerme'
        };
        citas.agregarCita(citaObj);

        //prueba
        expect(citas).toMatchSnapshot();
    });

    test('Actualizar cita', () => {
        const citaASctualizada = {
            id,
            mascota: 'Nuevo Nombre',
            propietario: 'Ricardo',
            telefono: '5541566135',
            fecha: '10-10-2021',
            hora: '13:30',
            sintomas: 'Solo duerme'
        };

        citas.editarCita(citaASctualizada);

        expect(citas).toMatchSnapshot();
    });

    test('Eliminar Cita', () => {
        citas.eliminarCita(id);
        expect(citas).toMatchSnapshot();
    });
});