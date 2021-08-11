//Switch case
const metodoPago = 'efectivo';

switch (metodoPago) {
    case 'efectivo':
        console.log('Pagaste con efectivo');
        pagar();
        break;

    case 'cheque':
        console.log('Pagaste con cheque');
        break;

    default:
        console.log('Método de pago no soportado');
        break;
}

function pagar() {
    console.log('Pagando...');
}