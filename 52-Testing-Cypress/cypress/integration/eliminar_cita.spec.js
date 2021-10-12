/// <reference types="cypress"/>

describe('Llena los campos para una nueva cita y la elimina', () => {
	it('Campos nueva cita', () => {
		cy.visit('/index.html');
		cy.get('[data-cy="mascota-input"]').type('Hook');
		cy.get('[data-cy="propietario-input"]').type('Ricardo');
		cy.get('[data-cy="telefono-input"]').type('55884466');
		cy.get('[data-cy="fecha-input"]').type('2021-10-11');
		cy.get('[data-cy="hora-input"]').type('15:00');
		cy.get('[data-cy="sintomas-textarea"]').type('El gato solo come y duerme');
		cy.get('[data-cy="submit-cita"]').click();

		cy.get('[data-cy="citas-heading"]')
			.invoke('text')
			.should('equal', 'Administra tus Citas');

		//Seleccionar la alerta
		cy.get('[data-cy="alerta"]')
			.invoke('text')
			.should('equal', 'Se agregó correctamente');

		cy.get('[data-cy="alerta"]').should('have.class', 'alert-success');
	});

	it('Elimina una cita', () => {
		cy.get('[data-cy="btn-eliminar"]').click();
		cy.get('[data-cy="citas-heading"]')
			.invoke('text')
			.should('equal', 'No hay Citas, comienza creando una');
	});
});
