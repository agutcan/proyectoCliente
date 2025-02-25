// Trabajo realizado por Aarón Gutiérrez Caña

// Función para mostrar el formulario de torneo
function mostrarFormulario() {
    let div = document.getElementById("formularioTorneo"); // Obtiene el elemento del formulario por su ID
    div.style.display = "block"; // Muestra el formulario al cambiar su estilo a "block"
}

// Función para ocultar el formulario de torneo
function ocultarFormulario() {
    let div = document.getElementById("formularioTorneo"); // Obtiene el elemento del formulario por su ID
    div.style.display = "none"; // Oculta el formulario al cambiar su estilo a "none"
}

// Función para crear un torneo a partir de los datos ingresados en el formulario
function crearTorneo(form) {
    // Obtiene los valores de los campos del formulario
    let nombreTorneo = form.tournamentName.value;
    let versusTorneo = form.tournamentVersus.value;
    let descripcionTorneo = form.description.value;

    // Obtiene los elementos <span> para mostrar errores de validación
    let spanNombre = document.getElementById("spanNombreTorneo");
    let spanVersus = document.getElementById("spanVersusTorneo");
    let spanDescripcion = document.getElementById("spanDescripcionTorneo");

    // Expresiones regulares para validar los campos
    let expRegNombre = /^[A-Z][a-z]{3,15}$/; // Nombre debe empezar con mayúscula y tener entre 3 y 15 caracteres
    let expRegVersus = /^\dvs\d$/; // El valor de versus debe ser un número, seguido de "vs", seguido de otro número
    let expRegDescripcion = /^.{1,200}$/; // La descripción debe tener entre 1 y 200 caracteres
    let expRegEspacio = /^\s+$/; // Verifica si una cadena está compuesta solo por espacios

    let contadorErrores = 0; // Inicializa el contador de errores en cero

    // Validación del nombre del torneo
    if (expRegNombre.test(nombreTorneo) == false || nombreTorneo == null || nombreTorneo == "" || expRegEspacio.test(nombreTorneo)) {
        spanNombre.style.display = "contents"; // Muestra el mensaje de error si la validación falla
        contadorErrores++; // Incrementa el contador de errores
    } else {
        if (contadorErrores != 0) {
            contadorErrores--; // Decrementa si el campo es válido
        }
        spanNombre.style.display = "none"; // Oculta el mensaje de error si el nombre es válido
    }

    // Validación del campo "versus"
    if (!expRegVersus.test(versusTorneo) || versusTorneo == null || versusTorneo == "" || expRegEspacio.test(versusTorneo)) {
        spanVersus.style.display = "contents"; // Muestra el mensaje de error si la validación falla
        contadorErrores++; // Incrementa el contador de errores
    } else {
        if (contadorErrores != 0) {
            contadorErrores--; // Decrementa si el campo es válido
        }
        spanVersus.style.display = "none"; // Oculta el mensaje de error si el campo "versus" es válido
    }

    // Validación de la descripción del torneo
    if (!expRegDescripcion.test(descripcionTorneo) || descripcionTorneo == null || descripcionTorneo == "" || expRegEspacio.test(descripcionTorneo)) {
        spanDescripcion.style.display = "contents"; // Muestra el mensaje de error si la validación falla
        contadorErrores++; // Incrementa el contador de errores
    } else {
        if (contadorErrores != 0) {
            contadorErrores--; // Decrementa si el campo es válido
        }
        spanDescripcion.style.display = "none"; // Oculta el mensaje de error si la descripción es válida
    }

    // Si no hay errores, oculta el formulario y crea el nuevo torneo
    if (contadorErrores == 0) {
        ocultarFormulario(); // Llama a la función para ocultar el formulario
    } else {
        return false; // Previene que el formulario se envíe de forma tradicional
    }

    // Obtiene el contenedor donde se agregarán los torneos creados
    let contenedor = document.getElementById("containerTorneos");

    // Crea un nuevo contenedor para el torneo
    let div = document.createElement("div");
    div.setAttribute("id", nombreTorneo); // Asigna un ID único al torneo basado en su nombre
    div.setAttribute("class", "row mt-4 p-3 rounded torneo"); // Asigna clases BT5
    div.setAttribute("style", "box-shadow: 0 0 20px rgba(128, 128, 128, 0.5); width: 70%;"); // Añade estilos de sombra y ancho

    // Crea un contenedor interno para el contenido del torneo
    let div2 = document.createElement("div");
    div2.setAttribute("class", "col-9"); // Establece un ancho de columna

    // Crea y configura el título del torneo
    let h3 = document.createElement("h3");
    h3.setAttribute("class", "text-white"); // Asigna clases BT5
    h3.appendChild(document.createTextNode("Torneo " + nombreTorneo)); // Añade el nombre del torneo como texto

    // Crea y configura el párrafo con el enfrentamiento del torneo
    let p = document.createElement("p");
    p.setAttribute("class", "text-white"); // Asigna clases BT5
    p.appendChild(document.createTextNode("Torneo valorant " + versusTorneo)); // Añade el enfrentamiento como texto

    // Crea y configura el párrafo con la descripción del torneo
    let p2 = document.createElement("p");
    p2.setAttribute("class", "text-white"); // Asigna clases BT5
    p2.appendChild(document.createTextNode(descripcionTorneo)); // Añade la descripción del torneo

    // Crea un contenedor para los botones
    let div3 = document.createElement("div");
    div3.setAttribute("class", "col m-auto"); // Centra el contenido del contenedor

    // Crea el botón de "Registrarse"
    let boton = document.createElement("button");
    boton.setAttribute("type", "submit"); // Establece el tipo de botón
    boton.setAttribute("class", "rounded btn text-white mb-1 me-1"); // Asigna clases BT5
    boton.setAttribute("style", "background-color: #dd3232;"); // Asigna un color de fondo al botón
    boton.appendChild(document.createTextNode("Registrarse")); // Añade el texto "Registrarse" al botón
    boton.addEventListener("click", () => {
        registrarse(boton); // Llama a la función registrarse cuando se hace clic en el botón
    });

    // Crea el botón de "Eliminar"
    let boton2 = document.createElement("button");
    boton2.setAttribute("type", "submit"); // Establece el tipo de botón
    boton2.setAttribute("class", "rounded btn text-white mb-1"); // Asigna clases BT5
    boton2.setAttribute("style", "background-color: #dd3232;"); // Asigna un color de fondo al botón
    boton2.setAttribute("value", nombreTorneo); // Establece un valor único para el botón, basado en el nombre del torneo
    boton2.appendChild(document.createTextNode("Eliminar")); // Añade el texto "Eliminar" al botón
    boton2.addEventListener("click", () => {
        eliminar(boton2); // Llama a la función eliminar cuando se hace clic en el botón
    });

    // Añade los elementos creados al contenedor principal
    div2.appendChild(h3);
    div2.appendChild(p);
    div2.appendChild(p2);
    div.appendChild(div2);
    div3.appendChild(boton);
    div3.appendChild(boton2);
    div.appendChild(div3);
    contenedor.appendChild(div); // Añade el nuevo torneo al contenedor de torneos

    return false; // Previene que el formulario se envíe de forma tradicional
    
}

// Función para cambiar el texto del botón de registro entre "Registrarse" y "Abandonar"
function registrarse(element) {
    if (element.innerText == "Registrarse") {
        element.innerText = "Abandonar"; // Cambia el texto a "Abandonar" si era "Registrarse"
    } else {
        element.innerText = "Registrarse"; // Cambia el texto de vuelta a "Registrarse"
    }
}

// Función para eliminar un torneo
function eliminar(element) {
    let div = document.getElementById("containerTorneos"); // Obtiene el contenedor de torneos
    div.removeChild(document.getElementById(element.value)); // Elimina el torneo correspondiente del DOM
}
