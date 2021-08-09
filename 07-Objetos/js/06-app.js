const producto = {
    nombre: "Monitor Curvo 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: "1kg",
            medida: "20 pulgadas"
        },
        fabricacion: {
            pais: 'China'
        }
    }
}

const {nombre, informacion: { fabricacion: { pais } }} = producto;

console.log(pais);