// Declarando las Variables

let amigos = [];

// Función necesaria para al final agregar el texto del amigo elegido.

function asignarTextoElemento(id,texto) {
    let elementoHTML = document.getElementById(id);
    elementoHTML.innerHTML = texto;
}

// Se crea una función para limpiar la "caja" del click.

function limpiarCaja() {
    let valorCaja = document.querySelector("#amigo");
    valorCaja.value = "";
}

// Función principal, para ir añadiendo amigos a la lista, al mismo tiempo que en la misma página.

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value; // Captura el valor del input
        
    if (nombreAmigo == "") {
        alert("Ingrese un nombre válido.");

    } else {
    
        amigos.push(nombreAmigo);
        limpiarCaja();
        let amigoEnLista = document.getElementById("listaAmigos");
        amigoEnLista.insertAdjacentHTML("beforeend", `<li> ${nombreAmigo}</li>`); 
        // Función insertAdjacentHTML encontrada en la web; añadirá un texto str en una etiqueta, definirá la posición, en este caso, el elemento es la lista, un elemento hijo sería
        // en este caso cada amigo ingresado, en este caso lo irá añadiendo justo después de su último elemento hijo.
    }
}

// Función que sortea al amigo en base a elegir u índice con el largo de la lista amigos.

function sortearAmigo(){
    let indiceDelElegido = Math.floor((Math.random()*amigos.length));
    amigoSecreto = amigos[indiceDelElegido];
    asignarTextoElemento("listaAmigos","")
    asignarTextoElemento("resultado", `El amigo secreto sorteado es: ${amigoSecreto}`);
}
