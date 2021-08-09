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

console.log(producto.informacion.fabricacion.pais);