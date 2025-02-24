let formulario = document.getElementById("caja_formulario");

function anadir_torneo() {
    formulario.style.display="block";
}

function crear_torneo() {
    formulario.style.display="none";

    // Contenedor al que se añaden los torneos
    let row = document.getElementById("row");

    // Valores del torneo
    nombre = formulario.nombre.value;
    jugadores = formulario.jugadores.value;

    // Contenedor del torneo
    let col = document.createElement("div");
    col.setAttribute("class", "col-6 rounded text-start my-3 torneo");

    // Elementos que va a contener el torneo
    // Título
    let titulo = document.createElement("h3");
    titulo.value = nombre;
    titulo.setAttribute("class", "mt-3");
    // Número de jugadores en cada equipo
    let num_jug = document.createElement("p");
    num_jug.value = "Jugadores por equipo: " + jugadores;

}

function inscribirse(boton) {
    if (boton.innerText == "Registrarse") {
        boton.innerText = "Abandonar";
    } else {
        boton.innerText = "Registrarse";
    }
}

function eliminar() {

}