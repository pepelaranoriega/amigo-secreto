//Declaración de variables.
let listaDeAmigos = []; //Array donde guaradamos los nombres.
let nombreAmigo = document.getElementById ("amigo"); //Ligado al input del HTML.
let lista; //Variable para guardar el <ul>.
let listaTemporal; //Para cada dato del forEach.
let nombreGanador;



//Funciones
function asignarTexto(selector, texto) {
  let elementoHTML = document.querySelector(selector); //Busca el primer DOM que coincida con el selector recibido.
  elementoHTML.innerHTML = texto; //Asigna el texto al elemento indicado.
}

function agregarAmigo () {
    if (nombreAmigo.value === "") {
        alert ("Debes ingresar un nombre"); //Si el nombre está en blanco, arrojará alerta.
    }else{
        if (listaDeAmigos.includes(nombreAmigo.value)){
            alert ("Ese nombre ya existe en la lista");
            return;
        }
        if (listaDeAmigos.length < 10) {
        listaDeAmigos.push(nombreAmigo.value); //Asigné un número máximo de 10 amigos para hacer la rifa.
        nombreAmigo.value = "";
        listadoEnPantalla();
        console.log (listaDeAmigos);
            }else{
            alert ("Haz asignado todos espacios disponibles para el sorteo"); //Si se intenta agregar el amigo numero "11", arroja esta alerta.
        }
    }
}

function listadoEnPantalla() {
    lista = document.getElementById("listaAmigos"); //Se guarda en la variable lista el elemento HTML con id="listadoEnPantalla".
    lista.innerHTML = ""; //Limpiamos el contenido para evitar datos duplicados.
    listaDeAmigos.forEach(function(temporal) { //Recorremos cada elemento del array listaAmigos, y guardamos el valor en la variable temporal.
        listaTemporal = document.createElement("li"); //Se crea un "List Item" en la variable listaTemporal
        listaTemporal.textContent = temporal; //Asignamos como texto dentro del "List Item" listaTemporal el valor obtenido en la vuelta del forEach temporal.
        lista.appendChild(listaTemporal); //Agregamos el valor de lista temporal a la variable lista que esta ligada al id=listadoEnPantalla.
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) { //Verificamos que array no esté vacio.
        alert ("No tenemos amigos para sortear."); //Alerta en caso de estar vacío.
    } else {
    let nombreANumero = Math.floor(Math.random() * listaDeAmigos.length); /*Generamos un número aleatorio entre 0 y .999 dandonos
    un resultado decimal ejemplo 0.15 y ese se multiplica por la cantidad de entradas que tenemos en el arreglo, 
    ejemplo calculando que haya 10 registros: 
    .15 x 10= 1.5, Mathfloor lo baja a su numero entero mas cercano que es 1, y 1 sería nuestro indice del array ganador, o sea el nombre 2 */
    nombreGanador = listaDeAmigos[nombreANumero]; /*Le pedimos a listaDeAmigos que nos de el valor en la posicion del indice nombreANumero
    y lo almacena en la variable nombreGanador*/
    console.log (listaDeAmigos); //Visualizamos nuevamente el array.
    console.log (nombreANumero); //Visualizamos el numero del array ganador.
    console.log (nombreGanador); //Para visualizar el nombre ganador en consola.
    asignarTexto("p", `El ganador es ${nombreGanador}`);  
    }
}