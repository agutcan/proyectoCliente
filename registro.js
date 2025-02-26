// Trabajo realizado por Aarón Gutiérrez Caña

// Contadores de errores para cada campo de entrada
let contadorErroresNombre = 1;
let contadorErroresEmail = 1;
let contadorErroresPassword = 1;

// Función para validar el nombre de usuario
function validateName() {
    let name = document.getElementById('registerName').value; // Obtiene el valor del campo de nombre
    let spanName = document.getElementById("spanName"); // Obtiene el elemento donde se mostrará el mensaje de error

    // Expresión regular para validar el formato del nombre (permitiendo letras, números, guiones y guiones bajos)
    let expRegNombre = /^[a-zA-Z0-9-_]{3,20}$/;
    // Expresión regular para verificar si hay solo espacios
    let expRegEspacio = /^\s+$/;

    // Validación del nombre de usuario
    if (!expRegNombre.test(name) || name == null || name == "" || expRegEspacio.test(name)) {
        spanName.style.display = "contents"; // Muestra el mensaje de error si el nombre no es válido
        if (contadorErroresNombre != 1) { // Si ya hay errores, incrementa el contador de errores
            contadorErroresNombre++;
        }
    } else {
        spanName.style.display = "none"; // Oculta el mensaje de error si el nombre es válido
        if (contadorErroresNombre > 0) { // Decrementa el contador de errores si el nombre es válido
            contadorErroresNombre--;
        }
    }

    // Llama a la función para habilitar o deshabilitar el botón de registro
    toggleButtonState();
}

// Función para validar el correo electrónico
function validateEmail() {
    let email = document.getElementById('registerEmail').value; // Obtiene el valor del campo de correo
    let spanEmail = document.getElementById("spanEmail"); // Obtiene el elemento donde se mostrará el mensaje de error

    // Expresión regular para validar el formato del correo electrónico
    let expRegEmail = /^[\w.-]+@[\w.-]+\.\w+$/;
    // Expresión regular para verificar si hay solo espacios
    let expRegEspacio = /^\s+$/;

    // Validación del correo electrónico
    if (!expRegEmail.test(email) || email == null || email == "" || expRegEspacio.test(email)) {
        spanEmail.style.display = "contents"; // Muestra el mensaje de error si el correo no es válido
        if (contadorErroresEmail != 1) { // Si ya hay errores, incrementa el contador de errores
            contadorErroresEmail++;
        }
    } else {
        spanEmail.style.display = "none"; // Oculta el mensaje de error si el correo es válido
        if (contadorErroresEmail > 0) { // Decrementa el contador de errores si el correo es válido
            contadorErroresEmail--;
        }
    }

    // Llama a la función para habilitar o deshabilitar el botón de registro
    toggleButtonState();
}

// Función para validar la contraseña
function validatePassword() {
    let password = document.getElementById('registerPassword').value; // Obtiene el valor del campo de la contraseña
    let spanPassword = document.getElementById("spanPassword"); // Obtiene el elemento donde se mostrará el mensaje de error

    // Expresión regular para validar que la contraseña tenga al menos 8 caracteres
    let expRegPassword = /^.{8,}$/;
    // Expresión regular para verificar si hay solo espacios
    let expRegEspacio = /^\s+$/;

    // Validación de la contraseña
    if (!expRegPassword.test(password) || password == null || password == "" || expRegEspacio.test(password)) {
        spanPassword.style.display = "contents"; // Muestra el mensaje de error si la contraseña no es válida
        if (contadorErroresPassword != 1) { // Si ya hay errores, incrementa el contador de errores
            contadorErroresPassword++;
        }
    } else {
        spanPassword.style.display = "none"; // Oculta el mensaje de error si la contraseña es válida
        if (contadorErroresPassword > 0) { // Decrementa el contador de errores si la contraseña es válida
            contadorErroresPassword--;
        }
    }

    // Llama a la función para habilitar o deshabilitar el botón de registro
    toggleButtonState();
}

// Función para habilitar o deshabilitar el botón de registro según los errores
function toggleButtonState() {
    let registerBtn = document.getElementById("botonRegistrarse"); // Obtiene el botón de registro
    // Si hay errores en alguno de los campos, deshabilita el botón
    if (contadorErroresNombre > 0 || contadorErroresEmail > 0 || contadorErroresPassword > 0) {
        registerBtn.disabled = true; // Deshabilita el botón
    } else {
        registerBtn.disabled = false; // Habilita el botón si no hay errores
    }
}

// Se añaden eventos de "blur" para validar los campos cuando el usuario deja el campo
document.getElementById('registerName').addEventListener('blur', validateName); // Llama a la función de validación del nombre al salir del campo
document.getElementById('registerEmail').addEventListener('blur', validateEmail); // Llama a la función de validación del correo al salir del campo
document.getElementById('registerPassword').addEventListener('blur', validatePassword); // Llama a la función de validación de la contraseña al salir del campo
