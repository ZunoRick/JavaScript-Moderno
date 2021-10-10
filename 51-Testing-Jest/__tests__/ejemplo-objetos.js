const cliente = {
    nombre: 'Ricardo',
    balance: 500
}

describe('Testing al Cliente', () => {
    test('El cliente es Premium', () =>{
        expect(cliente.balance).toBeGreaterThan(400);
    });

    test('Es Ricardo', () => {
        expect(cliente.nombre).toBe('Ricardo');
    });

    test('No es otro cliente', ()=>{
        expect(cliente.nombre).not.toBe('Pedro');
    });

    test('No tiene 500', () =>{
        expect(cliente.balance).not.toBe(400);
    });
});