function mostrarFormulario() {
    let div = document.getElementById("formularioTorneo");
    div.style.display = "block";
}
function ocultarFormulario() {
    let div = document.getElementById("formularioTorneo");
    div.style.display = "none";
}

function crearTorneo(form) {
    let nombreTorneo = form.tournamentName.value
    let versusTorneo = form.tournamentVersus.value
    let descripcionTorneo = form.description.value

    let spanNombre = document.getElementById("spanNombreTorneo");
    let spanVersus = document.getElementById("spanVersusTorneo");
    let spanDescripcion = document.getElementById("spanDescripcionTorneo");

    let expRegNombre = /^[A-Z][a-z]{3,15}$/; // Comprueba si una cadena empieza por una mayuscula y contiene entre 3 y 15 letras
    let expRegVersus = /^\dvs\d$/; // Comprueba si una cadena empieza por un número seguido por "vs" y por otro número
    let expRegDescripcion = /^.{1,200}$/; // Comprueba si una cadena empieza con un caracter y contiene como máximo 200 letras
    let expRegEspacio = /^\s+$/; // Comprueba si una cadena esta compuesta por espacios

    let contadorErrores = 0;
    // Validación del nombre
    if (expRegNombre.test(nombreTorneo) == false || nombreTorneo == null || nombreTorneo == "" || expRegEspacio.test(nombreTorneo)) {
        spanNombre.style.display = "contents";
        contadorErrores++;
    } else {
        if (contadorErrores != 0) {
            contadorErrores--;
        }
        spanNombre.style.display = "none";
    };

    // Validación del primer apellido
    if (expRegVersus.test(versusTorneo) == false || versusTorneo == null || versusTorneo == "" || expRegEspacio.test(versusTorneo)) {
        spanVersus.style.display = "contents";
        contadorErrores++;
    } else {
        if (contadorErrores != 0) {
            contadorErrores--
        }
        spanVersus.style.display = "none";
    };

    // Validación del segundo apellido
    if (expRegDescripcion.test(descripcionTorneo) == false || descripcionTorneo == null || descripcionTorneo == "" || expRegEspacio.test(descripcionTorneo)) {
        spanDescripcion.style.display = "contents";
        contadorErrores++;
    } else {
        if (contadorErrores != 0) {
            contadorErrores--;
        }
        spanDescripcion.style.display = "none";
    };

    if (contadorErrores == 0) {
        ocultarFormulario();
    }   
        
        let contenedor = document.getElementById("containerTorneos");
        
        let div = document.createElement("div");
        div.setAttribute("id", nombreTorneo);
        div.setAttribute("class", "row mt-4 p-3 rounded torneo");
        div.setAttribute("style", "box-shadow: 0 0 20px rgba(128, 128, 128, 0.5); width: 70%;");

        let div2 = document.createElement("div");
        div2.setAttribute("class", "col-9");

        let h3 = document.createElement("h3");
        h3.setAttribute("class", "text-white");
        h3.appendChild(document.createTextNode("Torneo " + nombreTorneo))

        let p = document.createElement("p");
        p.setAttribute("class", "text-white");
        p.appendChild(document.createTextNode("Torneo valorant " + versusTorneo))

        let p2 = document.createElement("p");
        p2.setAttribute("class", "text-white");
        p2.appendChild(document.createTextNode(descripcionTorneo))

        let div3 = document.createElement("div");
        div3.setAttribute("class", "col m-auto");

        let boton = document.createElement("button");
        boton.setAttribute("type", "submit");
        boton.setAttribute("class", "rounded btn text-white mb-1");
        boton.setAttribute("style", "background-color: #dd3232;");
        boton.appendChild(document.createTextNode("Registrarse"));
        boton.addEventListener("click", () => {
            registrarse(boton);
        })

        let boton2 = document.createElement("button");
        boton2.setAttribute("type", "submit");
        boton2.setAttribute("class", "rounded btn text-white mb-1");
        boton2.setAttribute("style", "background-color: #dd3232;");
        boton2.setAttribute("value", nombreTorneo)
        boton2.appendChild(document.createTextNode("Eliminar"));
        boton2.addEventListener("click", () => {
            eliminar(boton2);
        })

        div2.appendChild(h3);
        div2.appendChild(p);
        div2.appendChild(p2);
        div.appendChild(div2);
        div3.appendChild(boton);
        div3.appendChild(boton2);
        div.appendChild(div3);
        contenedor.appendChild(div);

        return false;
}

function registrarse(element) {
    console.log(element)
    if (element.innerText == "Registrarse") {
        element.innerText = "Abandonar";
    } else {
        element.innerText = "Registrarse";
    }
}

function eliminar(element) {
    let div = document.getElementById("containerTorneos");
    console.log(document.getElementById(element.value))
    div.removeChild(document.getElementById(element.value));
}