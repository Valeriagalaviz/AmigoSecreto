//Declarar variables globales para acceder a los elementos del DOM
const inputNombre = document.getElementById('amigo');
const btnAgregar = document.querySelector('.button-add');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

//Array para almacenar los nombres de los amigos
const amigos = [];

//Función para agregar un amigo a la lista
function agregarAmigo() {
    //Comprobar que no se ingrese un nombre vacío y que no se ingrese un número o caracteres especiales
    if (inputNombre.value !== '' && isNaN(inputNombre.value) && !/[^a-zA-Z\s]/.test(inputNombre.value)) {
        //Obtener el valor del input
        const amigo = inputNombre.value;
        //Agregar el amigo al array
        amigos.push(amigo);
        //Limpiar el input
        inputNombre.value = '';
        //Mostrar array en la consola
        console.log(amigos);
        //Mostrar la lista de amigos
        MostrarAmigos();
    }else{
        alert('Por favor, ingrese un nombre válido.');
        //Limpiar el input
        inputNombre.value = '';
    } 
}

//Función para mostrar la lista de amigos
function MostrarAmigos(){
    //Limpiar la lista de amigos
    listaAmigos.innerHTML = '';
    //Recorrer el array de amigos
    amigos.forEach(amigo => {
        //Agregar el amigo al final de la lista
        listaAmigos.innerHTML += `<li>${amigo}</li>`;
    });
}

//Función para sortear el amigo secreto
function sortearAmigo() {
    //Comprobar que la lista de amigos tenga al menos 3 amigos
    if (amigos.length > 2) {
        //Obtener un número aleatorio entre 0 y el número de amigos
        const amigoSecreto = Math.floor(Math.random() * amigos.length);
        //Mostrar el amigo secreto
        resultado.innerHTML = `El amigo secreto es: ${amigos[amigoSecreto]}`;
    }else{
        alert('Ingrese al menos 3 amigos.');
    }
}

