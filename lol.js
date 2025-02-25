document.addEventListener("DOMContentLoaded", function () {
    const crearTorneoBtn = document.querySelector("button[style*='rgba(66, 66, 66, 0.81)']");
    
    if (crearTorneoBtn) {
        crearTorneoBtn.addEventListener("click", function () {
            mostrarFormulario();
        });
    }

    document.body.addEventListener("click", function (event) {
        if (event.target.classList.contains("registrarse-btn")) {
            registrarEquipo(event.target);
        } else if (event.target.classList.contains("cancelar-registro")) {
            cancelarRegistro(event.target);
        }
    });
});

let torneoId = 0;

function mostrarFormulario() {
    const formHTML = `
        <div id="torneoForm" class="position-fixed top-50 start-50 translate-middle p-4 rounded shadow-lg text-white" style="background-color: #333; z-index: 1050; width: 300px;">
            <h4 class="text-center">Crear Torneo</h4>
            <label class="mt-2">Nombre:</label>
            <input type="text" id="nombreTorneo" class="form-control">
            <label class="mt-2">Descripción:</label>
            <input type="text" id="descripcionTorneo" class="form-control">
            <label class="mt-2">Formato:</label>
            <select id="formatoTorneo" class="form-control">
                <option>1 vs 1</option>
                <option>2 vs 2</option>
                <option>5 vs 5</option>
            </select>
            <div class="text-center mt-3">
                <button class="btn btn-success" onclick="crearTorneo()">Crear</button>
                <button class="btn btn-danger" onclick="cerrarFormulario()">Cancelar</button>
            </div>
        </div>
    `;
    
    const div = document.createElement("div");
    div.innerHTML = formHTML;
    document.body.appendChild(div);
}

function cerrarFormulario() {
    const form = document.getElementById("torneoForm");
    if (form) {
        form.remove();
    }
}

function crearTorneo() {
    const nombre = document.getElementById("nombreTorneo").value;
    const descripcion = document.getElementById("descripcionTorneo").value;
    const formato = document.getElementById("formatoTorneo").value;
    
    if (!nombre || !descripcion) {
        alert("Por favor, completa todos los campos");
        return;
    }
    
    torneoId++;
    const torneoHTML = `
        <div class="row mt-3" id="torneo-${torneoId}">
            <div class="col-lg-11 rounded" style="box-shadow: 0 0 20px rgba(128, 128, 128, 0.5);">
                <h3 class="text-white">${nombre}</h3>
                <p class="text-white">${descripcion}</p>
                <p class="text-white">Formato: ${formato}</p>
                <p class="text-white equipo-contador">Equipos registrados: 0</p>
                <button id="registrarse-${torneoId}" type="button" class="rounded btn text-white registrarse-btn" style="background-color: #dd3232;">Registrarse</button>
            </div>
        </div>
    `;
    
    document.querySelector(".container.mt-5").insertAdjacentHTML("beforeend", torneoHTML);
    cerrarFormulario();
}

function registrarEquipo(button) {
    const torneoDiv = button.closest(".row");
    let contadorElem = torneoDiv.querySelector(".equipo-contador");
    let equipos = parseInt(contadorElem.textContent.split(": ")[1]) + 1;
    contadorElem.textContent = `Equipos registrados: ${equipos}`;
    
    // Cambiar el texto y estilo del botón
    const torneoId = torneoDiv.id;
    button.outerHTML = `<button id="cancelar-${torneoId}" class="btn btn-danger cancelar-registro" aria-label="Cancelar registro en el torneo">Cancelar registro</button>`;

    // Agregar el evento para cancelar registro
    const btnCancelar = torneoDiv.querySelector(`#cancelar-${torneoId}`);
    btnCancelar.addEventListener("click", function() {
        cancelarRegistro(btnCancelar);
    });
}

function cancelarRegistro(button) {
    const torneoDiv = button.closest(".row");
    let contadorElem = torneoDiv.querySelector(".equipo-contador");
    let equipos = parseInt(contadorElem.textContent.split(": ")[1]) - 1;
    contadorElem.textContent = `Equipos registrados: ${equipos}`;

    // Cambiar el texto y estilo del botón
    const torneoId = torneoDiv.id;
    button.outerHTML = `<button id="registrarse-${torneoId}" type="button" class="rounded btn text-white registrarse-btn" style="background-color: #dd3232;" aria-label="Registrarse en el torneo">Registrarse</button>`;

    // Agregar el evento para registrar nuevamente
    const btnRegistrarse = torneoDiv.querySelector(`#registrarse-${torneoId}`);
    btnRegistrarse.addEventListener("click", function() {
        registrarEquipo(btnRegistrarse);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // Escuchamos los clics en los botones "Registrarse"
    const botonesRegistro = document.querySelectorAll(".rounded.btn.text-white.bg-danger");

    botonesRegistro.forEach(function (boton) {
        boton.addEventListener("click", function () {
            // Si el botón es de "Registrarse", lo cambiamos a "Cancelar registro"
            if (boton.textContent === "Registrarse") {
                boton.textContent = "Cancelar registro";
                boton.classList.remove("btn-danger");
                boton.classList.add("btn-warning");
            } else {
                // Si el botón es de "Cancelar registro", lo cambiamos a "Registrarse"
                boton.textContent = "Registrarse";
                boton.classList.remove("btn-warning");
                boton.classList.add("btn-danger");
            }
        });
    });
});
