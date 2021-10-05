//Explicit Binding

function persona(el1, el2) {
    console.log(`Mi nombre es ${this.nombre} y Escucho ${el1} y ${el2}`);
}

const informacion = {
    nombre: 'Ricardo'
}

const musicaFavorita = ['Rock', 'Metal'];
persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);

persona.apply(informacion, musicaFavorita);

const nuevaFuncion = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);
nuevaFuncion();