const amigos = []; //inicializa array vacio
const input = document.getElementById("amigo"); //input de nombre
const lista = document.getElementById("listaAmigos"); //lista ul
const resultado = document.getElementById("resultado"); //donde se muestra el resultado
function agregarAmigo() { // Agregar amigo a la lista
    const nombre = input.value.trim();
    if(nombre !== "") { //diferente de vacio
        amigos.push(nombre); //agregar al array con push
        input.value = ""; //limpiar caja 
        mostrarAmigos();
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

// Mostrar lista de amigos
function mostrarAmigos() {
    lista.innerHTML = ""; //limpiar lista
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.innerHTML = amigo;
        lista.appendChild(li);
    });
}
function sortearAmigo() { // Sortear amigo
    if(amigos.length === 0) { 
        alert("No hay amigos para sortear ");
        return;
    }
    const i = Math.floor(Math.random() * amigos.length);
    const nombre = amigos[i];
    resultado.innerHTML = "Tu amigo secreto es: " + nombre + " 🎉";
}

// Reiniciar lista
function reiniciarAmigos() {
    input.value = ""; //limpiar caja
    amigos.length = 0; //inicializa array en 0
    lista.innerHTML = ""; 
    resultado.innerHTML = ""; //vaciar resultado
}


