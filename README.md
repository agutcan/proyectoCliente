# ArenaGG - Página de Inicio

Este es el proyecto de inicio de **ArenaGG**, una plataforma para torneos de videojuegos como Valorant, League of Legends y Counter Strike 2.

## Descripción

La página de inicio presenta una barra de navegación con enlaces a diferentes secciones del sitio y un carrusel con imágenes representando los juegos destacados. El diseño está basado en **Bootstrap 5** y es completamente responsivo.

## Estructura del Proyecto

### 1. **Header (Encabezado)**
Contiene una barra de navegación con botones de enlaces a diferentes secciones:
- **Inicio**
- **Login**
- **Valorant**
- **League of Legends**
- **Counter Strike 2**
  
La barra de navegación está fija en la parte superior de la página.

### 2. **Contenido Principal**
  
- **Carrusel de Imágenes**: Un carrusel con tres imágenes principales:
  - **Valorant**
  - **League of Legends**
  - **Counter Strike 2**

Cada imagen está enlazada a la página correspondiente del juego, permitiendo al usuario navegar a la página del torneo de su interés.

### 3. **Footer (Pie de Página)**
El pie de página contiene:
- Información sobre los creadores del proyecto.
- Créditos y derechos de autor.

---

# Explicación de la Página de Inicio de Sesión - ArenaGG

Este documento describe el funcionamiento de la página de inicio de sesión del sitio web **ArenaGG**, donde los usuarios pueden ingresar sus credenciales para acceder a su cuenta.

## Estructura

### 1. **Encabezado (Header)**
El encabezado contiene el logo de **ArenaGG** y un enlace a la página principal. Se utiliza una barra de navegación sencilla que se mantiene fija en la parte superior de la página. El logo tiene un tamaño adecuado y al hacer clic en él, se redirige al usuario al inicio.

### 2. **Formulario de Inicio de Sesión**
El cuerpo principal de la página está dedicado a un formulario de inicio de sesión. Este formulario permite a los usuarios ingresar su **correo electrónico** y **contraseña** para acceder a su cuenta.

- **Validación Visual:** Los campos de correo electrónico y contraseña tienen validación visual mediante íconos que se muestran cuando los datos no son correctos. Esta validación se realiza usando JavaScript.
  
- **Deshabilitar el botón de envío:** El botón de envío está inicialmente deshabilitado. Se habilita cuando ambos campos (correo y contraseña) son ingresados correctamente.

- **Enlace a la página de registro:** Si el usuario no tiene cuenta, hay un enlace visible para redirigirlo a la página de registro.

### 3. **Pie de Página (Footer)**
El pie de página contiene información de los creadores del proyecto. Este incluye una lista con los nombres de los autores, seguida de un mensaje de copyright que menciona el año 2025 y el nombre de la empresa, **Arena GG**.

### 4. **Archivos Externos**
- **CSS de Bootstrap:** Se incluye una hoja de estilos de Bootstrap para facilitar la creación de una interfaz moderna y responsiva.
  
- **JavaScript para validación:** Se hace uso de un archivo JavaScript externo (login.js) para realizar la validación de los campos antes de enviar el formulario.

---

# Explicación de la Página de Registro - ArenaGG

Este documento describe cómo funciona la página de registro de **ArenaGG**, donde los nuevos usuarios pueden crear una cuenta proporcionando su información.

## Estructura

### 1. **Encabezado (Header)**
El encabezado contiene el logo de **ArenaGG**. Es un área fija en la parte superior de la página y al hacer clic sobre el logo, se redirige al usuario al inicio del sitio.

### 2. **Formulario de Registro**
La página principal contiene un formulario de registro en el cual el usuario debe ingresar tres tipos de información:

- **Nombre de Usuario:** Un campo de texto donde el usuario debe escribir su nombre de usuario deseado.
  
- **Correo Electrónico:** Un campo de correo electrónico donde el usuario introduce su dirección de correo electrónico.

- **Contraseña:** Un campo de contraseña donde el usuario debe establecer una contraseña.

Cada uno de estos campos tiene una validación visual, que muestra un ícono de advertencia 🚫 si el usuario no ingresa datos válidos o si la validación no pasa. Esta validación se maneja mediante JavaScript.

- **Deshabilitar el botón de registro:** El botón de registro está inicialmente deshabilitado y solo se habilita una vez que todos los campos han sido completados correctamente.

### 3. **Enlace a Iniciar Sesión**
Si el usuario ya tiene una cuenta, hay un enlace visible que lo redirige a la página de inicio de sesión.

### 4. **Pie de Página (Footer)**
En el pie de página se incluye la siguiente información:

- **Autores del Proyecto:** Los nombres de los creadores del sitio.
  
- **Copyright:** Un mensaje de copyright que menciona el año 2025 y el nombre de la empresa, **Arena GG**.

### 5. **Archivos Externos**
- **CSS de Bootstrap:** Se incluye una hoja de estilos de Bootstrap para ayudar en la creación de una interfaz moderna y responsiva.

- **Hoja de Estilos Personalizada (indexRegistro.css):** Un archivo CSS personalizado para ajustar el diseño y los estilos del formulario a las necesidades del proyecto.

- **JavaScript para Validación:** Un archivo JavaScript externo (`registro.js`) se utiliza para manejar la validación de los campos del formulario antes de enviarlo.

---

# ArenaGG - Página de Torneos de Valorant

Este repositorio contiene la página para **ArenaGG**, específicamente para los torneos de **Valorant**. La página permite a los usuarios crear, registrarse y gestionar torneos. A continuación se presenta un resumen de la estructura y funcionalidades de la página.

## 1. Encabezado (Navegación)
El encabezado contiene un menú de navegación con los siguientes botones:

- **Inicio:** Redirige a la página de inicio.
- **Valorant:** Enlace a la página de torneos de **Valorant**.
- **League of Legends:** Enlace a la página de torneos de **League of Legends**.
- **Counter Strike 2:** Enlace a la página de torneos de **Counter Strike 2**.
- **Soporte:** Un botón para soporte, aunque la página de destino no está definida.

Los botones están estilizados con el color rojo característico de ArenaGG (`#dd3232`).

## 2. Banner de Torneo de Valorant
Esta sección presenta un mensaje promocional para los torneos de **Valorant**. Se invita a los usuarios a formar equipos y competir contra otros.

## 3. Crear Torneo
Los usuarios pueden crear sus propios torneos rellenando un formulario. Cuando se hace clic en el botón "Crea tu propio Torneo", el formulario se vuelve visible con los siguientes campos:

- **Nombre del Torneo:** El usuario debe proporcionar un nombre.
- **Cantidad de versus:** El formato de los enfrentamientos (por ejemplo, 1v1, 2v2, etc.).
- **Descripción:** Una breve descripción del torneo.

El formulario está inicialmente oculto y se muestra cuando el usuario hace clic en el botón correspondiente. Los campos deben completarse antes de enviar el formulario.

## 4. Lista de Torneos
Se muestra una lista de los torneos disponibles. Se cargan dos torneos de ejemplo ("Torneo 1" y "Torneo 2"). Cada torneo incluye:
- **Nombre del Torneo**
- **Descripción**
- **Botones de Acción:**
  - **Registrarse:** Permite a los usuarios inscribirse en el torneo.
  - **Eliminar:** Permite a los usuarios eliminar el torneo de la lista.

Cuando el usuario hace clic en "Registrarse", se activa la función correspondiente. Si se hace clic en "Eliminar", el torneo se elimina de la lista.

---

# Descripción del Funcionamiento del Script de Validación de Login (login.js)

Este archivo JavaScript está diseñado para gestionar la validación de un formulario de login en una página web, asegurando que los campos de correo electrónico y contraseña sean correctos antes de permitir el acceso.

## Funcionalidad:

### 1. Variables Iniciales:
- **`email_validos`**: Lista de correos electrónicos válidos permitidos para el login. En este caso, contiene dos correos válidos: `"valido@valido.com"` y `"valido2@valido.com"`.
- **`password_valida`**: Contraseña válida predefinida, en este caso, `"12345678"`.
- **Contadores de Errores**: Se utilizan dos contadores (`contadorErroresEmail` y `contadorErroresPassword`) para rastrear cuántos errores se han producido en los campos de correo electrónico y contraseña, respectivamente.

### 2. Validación del Correo Electrónico:
- **Función `validateEmail()`**:
  - Se obtiene el valor del campo de correo electrónico.
  - Se valida el formato del correo utilizando una expresión regular, además de verificar que no haya espacios en blanco y que el correo esté en la lista de correos válidos.
  - Si el correo es inválido o no se encuentra en la lista de correos permitidos, se muestra un mensaje de error.
  - Si el correo es válido, se oculta el mensaje de error.
  - Se actualiza el contador de errores según sea necesario.
  - La función también llama a `toggleButtonState()` para habilitar o deshabilitar el botón de login dependiendo de los errores.

### 3. Validación de la Contraseña:
- **Función `validatePassword()`**:
  - Se obtiene el valor del campo de la contraseña.
  - Se valida que la contraseña tenga al menos 8 caracteres, no contenga espacios en blanco y sea igual a la contraseña predefinida (`"12345678"`).
  - Si la contraseña es inválida, se muestra un mensaje de error.
  - Si la contraseña es válida, se oculta el mensaje de error.
  - Se actualiza el contador de errores según sea necesario.
  - Al igual que en la validación del correo, la función llama a `toggleButtonState()` para habilitar o deshabilitar el botón de login.

### 4. Habilitar o Deshabilitar el Botón de Login:
- **Función `toggleButtonState()`**:
  - Se obtiene el botón de login y se comprueba si existen errores en los campos de correo o contraseña.
  - Si hay errores, el botón de login se deshabilita. Si no hay errores, se habilita.

### 5. Eventos de Validación al Perder el Foco:
- Se añaden eventos `blur` a los campos de correo electrónico y contraseña. Esto significa que cada vez que el usuario salga de uno de estos campos, se ejecutará la función de validación correspondiente (`validateEmail` para el correo y `validatePassword` para la contraseña).

## Resumen:
Este script gestiona la validación de los campos de correo electrónico y contraseña de un formulario de login. Si alguno de los campos tiene errores, se muestra un mensaje de error y se deshabilita el botón de login. El botón se habilita solo cuando ambos campos son válidos.

# Descripción del Funcionamiento del Script de Registro (registro.js)

Este archivo JavaScript se utiliza para gestionar la validación de un formulario de registro de usuario. El script asegura que los campos de nombre, correo electrónico y contraseña sean válidos antes de permitir el registro.

## Funcionalidad:

### 1. Variables Iniciales:
- **Contadores de Errores**: Se utilizan tres contadores (`contadorErroresNombre`, `contadorErroresEmail`, `contadorErroresPassword`) para llevar un registro de los errores ocurridos en los campos de nombre, correo electrónico y contraseña respectivamente.
- **Lista de Correos Válidos**: Se define una lista `email_validos` que contiene los correos electrónicos válidos permitidos para el registro.

### 2. Validación del Nombre de Usuario:
- **Función `validateName()`**:
  - Obtiene el valor ingresado en el campo de nombre de usuario.
  - Se valida que el nombre tenga entre 3 y 20 caracteres y que solo contenga letras, números, guiones y guiones bajos mediante una expresión regular.
  - Si el nombre es inválido, se muestra un mensaje de error.
  - Si el nombre es válido, se oculta el mensaje de error.
  - Se actualiza el contador de errores y se llama a `toggleButtonState()` para habilitar o deshabilitar el botón de registro.

### 3. Validación del Correo Electrónico:
- **Función `validateEmail()`**:
  - Obtiene el valor del campo de correo electrónico.
  - Se valida que el correo tenga un formato válido (con una expresión regular) y que no esté vacío o contenga solo espacios.
  - Si el correo es inválido, se muestra un mensaje de error.
  - Si el correo es válido, se oculta el mensaje de error.
  - Se actualiza el contador de errores y se llama a `toggleButtonState()` para habilitar o deshabilitar el botón de registro.

### 4. Validación de la Contraseña:
- **Función `validatePassword()`**:
  - Obtiene el valor del campo de la contraseña.
  - Se valida que la contraseña tenga al menos 8 caracteres y no contenga solo espacios mediante una expresión regular.
  - Si la contraseña es inválida, se muestra un mensaje de error.
  - Si la contraseña es válida, se oculta el mensaje de error.
  - Se actualiza el contador de errores y se llama a `toggleButtonState()` para habilitar o deshabilitar el botón de registro.

### 5. Habilitar o Deshabilitar el Botón de Registro:
- **Función `toggleButtonState()`**:
  - Obtiene el botón de registro y comprueba si hay errores en alguno de los campos de nombre, correo o contraseña.
  - Si hay errores en cualquiera de los campos, el botón de registro se deshabilita. Si no hay errores, el botón se habilita.

### 6. Eventos de Validación al Perder el Foco:
- Se añaden eventos `blur` a los campos de nombre, correo electrónico y contraseña. Cada vez que el usuario sale de uno de estos campos, se ejecuta la función de validación correspondiente (`validateName` para el nombre, `validateEmail` para el correo y `validatePassword` para la contraseña).

## Resumen:
Este script maneja la validación de los campos de un formulario de registro. Se valida que el nombre de usuario, correo electrónico y contraseña cumplan con las reglas establecidas. Si alguno de los campos tiene errores, el botón de registro se deshabilita hasta que todos los campos sean válidos.

# Descripción del Funcionamiento del Script para la Creación y Gestión de Torneos (valorant.js)

Este archivo JavaScript se utiliza para gestionar la creación, visualización, registro y eliminación de torneos. Permite a los usuarios crear un torneo a través de un formulario, con validación de datos y la posibilidad de registrarse en el torneo o eliminarlo.

## Funcionalidad:

### 1. Mostrar y Ocultar el Formulario:
- **Función `mostrarFormulario()`**:
  - Muestra el formulario de creación de torneos al cambiar el estilo del contenedor a `block`.

- **Función `ocultarFormulario()`**:
  - Oculta el formulario de creación de torneos al cambiar el estilo del contenedor a `none`.

### 2. Creación de un Torneo:
- **Función `crearTorneo(form)`**:
  - Obtiene los datos ingresados en el formulario (nombre, enfrentamiento "versus", y descripción).
  - Se valida que:
    - El nombre del torneo tenga entre 3 y 15 caracteres y empiece con mayúscula.
    - El enfrentamiento siga el formato de "número vs número".
    - La descripción tenga entre 1 y 200 caracteres.
  - Si los campos son válidos, se oculta el formulario y se agrega el torneo a la lista.
  - Si algún campo es inválido, se muestra un mensaje de error correspondiente.

### 3. Agregar un Torneo al Contenedor:
- Cuando los datos son válidos, se crea un nuevo contenedor en el DOM con la información del torneo (nombre, enfrentamiento y descripción).
- Se generan dos botones: uno para registrarse en el torneo y otro para eliminarlo.
  - **Botón de "Registrarse"**: Cambia su texto entre "Registrarse" y "Abandonar" cada vez que se hace clic.
  - **Botón de "Eliminar"**: Elimina el torneo del DOM cuando se hace clic en el botón.

### 4. Funciones para los Botones:
- **Función `registrarse(element)`**:
  - Cambia el texto del botón entre "Registrarse" y "Abandonar" según el estado actual del botón.

- **Función `eliminar(element)`**:
  - Elimina el torneo correspondiente del contenedor de torneos cuando se hace clic en el botón "Eliminar".

### 5. Validación de Datos del Formulario:
- **Validación del Nombre del Torneo**: 
  - El nombre debe empezar con una letra mayúscula y tener entre 3 y 15 caracteres. Si no cumple con estas condiciones, se muestra un mensaje de error.
  
- **Validación del Enfrentamiento**: 
  - El formato "versus" debe ser de tipo `nvsn`, donde "n" es un número. Si no cumple con el formato, se muestra un mensaje de error.
  
- **Validación de la Descripción**: 
  - La descripción debe tener entre 1 y 200 caracteres. Si el campo no cumple con esta longitud o contiene solo espacios, se muestra un mensaje de error.

## Resumen:
Este script permite a los usuarios crear, visualizar y eliminar torneos. Se validan los datos del formulario antes de agregar el torneo al contenedor. Los usuarios también pueden registrarse en un torneo o abandonarlo, y los torneos pueden ser eliminados del contenedor.

## Créditos

- **Realizado por**:
  - Aarón Gutiérrez Caña
  - Alejandro Jiménez Pérez
  - Jesús Carmelo Pérez Robles

**© 2025 Arena GG, Inc**