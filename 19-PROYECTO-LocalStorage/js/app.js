const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];


eventListers();
function eventListers() {
    //Cuando el usuario agrega un nuevo Tweet
    formulario.addEventListener('submit', agregarTweet);

    //Cuando el documento está listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse( localStorage.getItem('tweets') ) || [];
        crearHTML();
    });
}

function agregarTweet(e) {
    e.preventDefault();
    
    //Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;
    
    //Validación 
    if (tweet === '') {
        mostrarError('Un mensaje no puede ir vacío');
        return;  //Evita que se ejecuten más líneas de código
    }
    const tweetObj = {
        id: Date.now(),
        tweet  //equivale a tweet: tweet
    };

    //Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];
    
    //Una vez agregado creamos el HTML
    crearHTML();

    //reiniciar el formulario
    formulario.reset();
}

//Mostrar Mensaje de error
function mostrarError(error) {
    const mensajeError = document.createElement('P');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //Insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    //Elimina la alerta después de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

function crearHTML() {
    limpiarHTML();
    if (tweets.length > 0) {
        tweets.forEach( tweet => {
            //Agregar un botón de eliminar
            const btnEliminar = document.createElement('A');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            //Añadir la función de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            };

            //Crear el HTML
            const li = document.createElement('LI');
            li.innerText = tweet.tweet;
            li.appendChild(btnEliminar);
            listaTweets.appendChild(li);
        });
    }
    sincronizarStorage();
}

function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function limpiarHTML() {
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

function borrarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);
    crearHTML();
}