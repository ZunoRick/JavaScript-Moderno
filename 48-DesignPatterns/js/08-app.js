function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente articulo: ${articulo}, iniciamos con un precio de ${precio}`);
    },
    vendido: comprador =>{
        console.log(`Vendido a: ${comprador}`);
    }
}

function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    oferta: (cantidad, comprador) =>{
        console.log(`${comprador.nombre}: ${cantidad}`);
    }
}

function Subasta() {
    let compradores = {};
    return{
        registrar: usuario =>{
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}

//Crear objetos
const ricardo = new Comprador('Ricardo');
const pedro = new Comprador('Pedro');
const vendedor = new Vendedor('Vendedor de autos');
const subasta = new Subasta();

//Tienes que registrarlos:
subasta.registrar(ricardo);
subasta.registrar(pedro);
subasta.registrar(vendedor);

vendedor.oferta('Mustang 66', 300);

ricardo.oferta(350, ricardo);
pedro.oferta(450, pedro);
ricardo.oferta(500, ricardo);
pedro.oferta(700, pedro);


vendedor.vendido('Pedro')