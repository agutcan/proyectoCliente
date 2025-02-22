// Trabajo realizado por Aarón Gutiérrez Caña

let contadorErroresNombre = 1;
let contadorErroresEmail = 1;
let contadorErroresPassword = 1;

let email_validos = ["valido@valido.com", "valido2@valido.com"];
let password_min_length = 8;

function validateName() {
    let name = document.getElementById('registerName').value;
    let spanName = document.getElementById("spanName");

    let expRegNombre = /^[a-zA-Z0-9-_]{3,20}$/;
    let expRegEspacio = /^\s+$/;


    // Validación del nombre de usuario
    if (!expRegNombre.test(name) || name == null || name == "" || expRegEspacio.test(name)) {
        spanName.style.display = "contents";
        if (contadorErroresNombre != 1) {
            contadorErroresNombre++;
        }
    } else {
        spanName.style.display = "none";
        if (contadorErroresNombre > 0) {
            contadorErroresNombre--;
        }
    }

    toggleButtonState();
}

function validateEmail() {
    let email = document.getElementById('registerEmail').value;
    let spanEmail = document.getElementById("spanEmail");

    let expRegEmail = /^[\w.-]+@[\w.-]+\.\w+$/;
    let expRegEspacio = /^\s+$/;

    // Validación del correo electrónico
    if (!expRegEmail.test(email) || email == null || email == "" || expRegEspacio.test(email)) {
        spanEmail.style.display = "contents";
        if (contadorErroresEmail != 1) {
            contadorErroresEmail++;
        }
    } else {
        spanEmail.style.display = "none";
        if (contadorErroresEmail > 0) {
            contadorErroresEmail--;
        }
    }

    toggleButtonState();
}

function validatePassword() {
    let password = document.getElementById('registerPassword').value;
    let spanPassword = document.getElementById("spanPassword");

    let expRegPassword = /^.{8,}$/;
    let expRegEspacio = /^\s+$/;


    // Validación de la contraseña
    if (!expRegPassword.test(password) || password == null || password == "" || expRegEspacio.test(password)) {
        spanPassword.style.display = "contents";
        if (contadorErroresPassword != 1) {
            contadorErroresPassword++;
        }
    } else {
        spanPassword.style.display = "none";
        if (contadorErroresPassword > 0) {
            contadorErroresPassword--;
        }
    }

    toggleButtonState();
}

function toggleButtonState() {
    let registerBtn = document.getElementById("botonRegistrarse");
    // Si hay errores, deshabilitar el botón
    if (contadorErroresNombre > 0 || contadorErroresEmail > 0 || contadorErroresPassword > 0) {
        registerBtn.disabled = true;
    } else {
        registerBtn.disabled = false; // Habilitar el botón si no hay errores
    }
}

// Eventos para validar los campos al salir de ellos (blur)
document.getElementById('registerName').addEventListener('blur', validateName);
document.getElementById('registerEmail').addEventListener('blur', validateEmail);
document.getElementById('registerPassword').addEventListener('blur', validatePassword);