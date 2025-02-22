// Trabajo realizado por Aarón Gutiérrez Caña

email_validos = ["valido@valido.com", "valido2@valido.com"]; 
password_valida = "12345678";
let contadorErroresEmail = 1;
let contadorErroresPassword = 1;
function validateEmail() {
    let email = document.getElementById('loginEmail').value;
    let spanEmail = document.getElementById("spanEmail");

    let expRegEmail = /^[\w.-]+@[\w.-]+\.\w+$/;
    let expRegEspacio = /^\s+$/;

    // Validación del correo
    if (!expRegEmail.test(email) || email == null || email == "" || expRegEspacio.test(email) || !(email_validos.includes(email))) {
        spanEmail.style.display = "contents";
        if (contadorErroresEmail != 1) {
            contadorErroresEmail++;
        }
    } else {
        spanEmail.style.display = "none";
        contadorErroresEmail--;
    }

    // Habilitar o deshabilitar el botón según la validación
    toggleButtonState();
}

function validatePassword() {
    let password = document.getElementById('loginPassword').value;
    let spanPassword = document.getElementById("spanPassword");

    let expRegPassword = /^[A-Za-z0-9@#$%^&+=!]{8,}$/;
    let expRegEspacio = /^\s+$/;

    // Validación de la contraseña
    if (!expRegPassword.test(password) || password == null || password == "" || expRegEspacio.test(password) || password != password_valida) {
        spanPassword.style.display = "contents";
        if(contadorErroresPassword != 1) {
            contadorErroresPassword++;    
        }
    } else {
        spanPassword.style.display = "none";
        if (contadorErroresPassword > 0) {
            contadorErroresPassword--;
        }

    }

    // Habilitar o deshabilitar el botón según la validación
    toggleButtonState();
}

function toggleButtonState() {
    let loginBtn = document.getElementById("loginBtn");
    // Si hay errores, deshabilitar el botón
    if (contadorErroresEmail > 0 || contadorErroresPassword > 0) {
        loginBtn.disabled = true;
    } else {
        loginBtn.disabled = false; // Habilitar el botón si no hay errores
    }
}

// Eventos para validar los campos al salir de ellos (blur)
document.getElementById('loginEmail').addEventListener('blur', validateEmail);
document.getElementById('loginPassword').addEventListener('blur', validatePassword); 