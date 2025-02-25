let formulario = document.getElementById("caja_formulario");

function anadir_torneo() {
    formulario.style.display="block";
}

function ocultar_form() {
    formulario.style.display="none";
}

function crear_torneo(event, form) {
    // Evitar el envío del formulario
    event.preventDefault();

    // Valores del torneo
    let nombre = form.nombre.value;
    let jugadores = form.jugadores.value;

    // Obtiene los elementos <span> para mostrar errores de validación
    let spanNombre = document.getElementById("spanNombreTorneo");
    let spanVersus = document.getElementById("spanVersusTorneo");

    // Expresiones regulares para validar los campos
    let expRegNombre = /^[A-Z][a-z]{3,15}$/; // Nombre debe empezar con mayúscula y tener entre 3 y 15 caracteres
    let expRegVersus = /^\d$/; // El valor de versus debe ser un número
    let expRegEspacio = /^\s+$/; // Verifica si una cadena está compuesta solo por espacios

    let contadorErrores = 0; // Inicializa el contador de errores en cero

    // Validación del nombre del torneo
    if (expRegNombre.test(nombre) == false || nombre == null || nombre == "" || expRegEspacio.test(nombre)) {
        spanNombre.style.display = "contents"; // Muestra el mensaje de error si la validación falla
        contadorErrores++; // Incrementa el contador de errores
    } else {
        if (contadorErrores != 0) {
            contadorErrores--; // Decrementa si el campo es válido
        }
        spanNombre.style.display = "none"; // Oculta el mensaje de error si el nombre es válido
    }

    // Validación del campo "versus"
    if (!expRegVersus.test(jugadores) || jugadores == null || jugadores == "" || expRegEspacio.test(jugadores)) {
        spanVersus.style.display = "contents"; // Muestra el mensaje de error si la validación falla
        contadorErrores++; // Incrementa el contador de errores
    } else {
        if (contadorErrores != 0) {
            contadorErrores--; // Decrementa si el campo es válido
        }
        spanVersus.style.display = "none"; // Oculta el mensaje de error si el campo "versus" es válido
    }

    // Si no hay errores, oculta el formulario y crea el nuevo torneo
    if (contadorErrores == 0) {
        ocultar_form(); // Llama a la función para ocultar el formulario
    }

    // Contenedor al que se añaden los torneos
    let contenedor = document.getElementById("torneos");

    // Fila
    let row = document.createElement("div");
    row.setAttribute("class", "row justify-content-center");
    row.setAttribute("id", nombre);

    // Columna
    let col = document.createElement("div");
    col.setAttribute("class", "col-6 rounded text-start my-3 torneo");

    // Elementos que va a contener el torneo
    let titulo = document.createElement("h3");
    titulo.setAttribute("class", "mt-3");
    titulo.appendChild(document.createTextNode(nombre));

    let num_jug = document.createElement("p");
    num_jug.appendChild(document.createTextNode("Jugadores por equipo " + jugadores));

    let btn_inscripcion = document.createElement("button");
    btn_inscripcion.setAttribute("type", "submit");
    btn_inscripcion.setAttribute("style", "background-color: #dd3232;");
    btn_inscripcion.setAttribute("class", "rounded btn text-white mb-3 mx-1");
    btn_inscripcion.appendChild(document.createTextNode("Registrarse"));
    btn_inscripcion.addEventListener("click", () => {
        inscribirse(btn_inscripcion);
    });

    let btn_borrar = document.createElement("button");
    btn_borrar.setAttribute("type", "submit");
    btn_borrar.setAttribute("style", "background-color: #dd3232;");
    btn_borrar.setAttribute("class", "rounded btn text-white mb-3");
    btn_borrar.setAttribute("value", nombre);
    btn_borrar.appendChild(document.createTextNode("Eliminar"));
    btn_borrar.addEventListener("click", () => {
        eliminar(btn_borrar);
    });

    // Añadimos los elementos a la columna
    col.appendChild(titulo);
    col.appendChild(num_jug);
    col.appendChild(btn_inscripcion);
    col.appendChild(btn_borrar);

    // Añadimos la columna a la fila
    row.appendChild(col);

    // Añadimos la fila al contenedor
    contenedor.appendChild(row);

    return false;
}

// Cambiar el texto del botón al hacer click
function inscribirse(boton) {
    if (boton.innerText == "Registrarse") {
        boton.innerText = "Abandonar";
    } else {
        boton.innerText = "Registrarse";
    }
}

function eliminar(boton) {
    let div = document.getElementById("torneos");
    div.removeChild(document.getElementById(boton.value));
}