const cliente = {
    nombre: 'Ricardo Z',
    balance: 500, 
    tipo: 'Premium'
}

describe('Testing al cliente', () =>{
    test('Es Ricardo', () =>{
        expect(cliente).toMatchSnapshot();
    });
});