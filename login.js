// Trabajo realizado por Aarón Gutiérrez Caña

// Lista de correos válidos permitidos
email_validos = ["valido@valido.com", "valido2@valido.com"]; 
// Contraseña válida predefinida
password_valida = "12345678";

// Contadores para errores en cada campo
let contadorErroresEmail = 1;
let contadorErroresPassword = 1;

// Función para validar el correo electrónico
function validateEmail() {
    let email = document.getElementById('loginEmail').value; // Obtiene el valor del campo de correo
    let spanEmail = document.getElementById("spanEmail"); // Obtiene el elemento donde se mostrará el mensaje de error

    // Expresiones regulares para validar el formato del correo y verificar si hay espacios
    let expRegEmail = /^[\w.-]+@[\w.-]+\.\w+$/; // Expresión regular para validar el formato del correo
    let expRegEspacio = /^\s+$/; // Expresión regular para verificar si hay solo espacios

    // Validación del correo
    if (!expRegEmail.test(email) || email == null || email == "" || expRegEspacio.test(email) || !(email_validos.includes(email))) {
        spanEmail.style.display = "contents"; // Muestra el mensaje de error si el correo no es válido
        if (contadorErroresEmail != 1) { // Si ya hay errores, incrementa el contador de errores
            contadorErroresEmail++;
        }
    } else {
        spanEmail.style.display = "none"; // Oculta el mensaje de error si el correo es válido
        contadorErroresEmail--; // Decrementa el contador de errores
    }

    // Llama a la función para habilitar o deshabilitar el botón
    toggleButtonState();
}

// Función para validar la contraseña
function validatePassword() {
    let password = document.getElementById('loginPassword').value; // Obtiene el valor del campo de la contraseña
    let spanPassword = document.getElementById("spanPassword"); // Obtiene el elemento donde se mostrará el mensaje de error

    // Expresiones regulares para validar el formato de la contraseña y verificar si hay espacios
    let expRegPassword = /^[A-Za-z0-9@#$%^&+=!]{8,}$/; // Expresión regular para validar la contraseña (mínimo 8 caracteres)
    let expRegEspacio = /^\s+$/; // Expresión regular para verificar si hay solo espacios

    // Validación de la contraseña
    if (!expRegPassword.test(password) || password == null || password == "" || expRegEspacio.test(password) || password != password_valida) {
        spanPassword.style.display = "contents"; // Muestra el mensaje de error si la contraseña no es válida
        if(contadorErroresPassword != 1) { // Si ya hay errores, incrementa el contador de errores
            contadorErroresPassword++;    
        }
    } else {
        spanPassword.style.display = "none"; // Oculta el mensaje de error si la contraseña es válida
        if (contadorErroresPassword > 0) { // Decrementa el contador de errores si la contraseña es válida
            contadorErroresPassword--;
        }
    }

    // Llama a la función para habilitar o deshabilitar el botón
    toggleButtonState();
}

// Función para habilitar o deshabilitar el botón de login según los errores
function toggleButtonState() {
    let loginBtn = document.getElementById("loginBtn"); // Obtiene el botón de login
    // Si hay errores en alguno de los campos, deshabilita el botón
    if (contadorErroresEmail > 0 || contadorErroresPassword > 0) {
        loginBtn.disabled = true; // Deshabilita el botón
    } else {
        loginBtn.disabled = false; // Habilita el botón si no hay errores
    }
}

// Se añaden eventos de "blur" para validar los campos cuando el usuario deja el campo
document.getElementById('loginEmail').addEventListener('blur', validateEmail); // Llama a la función de validación de correo al salir del campo
document.getElementById('loginPassword').addEventListener('blur', validatePassword); // Llama a la función de validación de contraseña al salir del campo
