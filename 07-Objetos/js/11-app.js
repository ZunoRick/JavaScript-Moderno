const producto = {
    nombre: "Monitor Curvo 20 Pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

producto.mostrarInfo();