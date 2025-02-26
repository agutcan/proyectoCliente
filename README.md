# ArenaGG

## Descripción

Página para crear/eliminar, registrarse/abandonar torneos de videojuegos y simula inicio/registro de usuario.

# ArenaGG - Página de Inicio

Este archivo describe la estructura y funcionamiento de la página principal de ArenaGG, diseñada para proporcionar acceso a los torneos de diferentes videojuegos.

## Descripción

La página de inicio incluye un encabezado con enlaces a diferentes secciones, un carrusel de imágenes destacadas para los torneos de los juegos disponibles y un pie de página con la información de los autores del proyecto.

### 1. Encabezado (Navegación)

El encabezado es una barra de navegación fija que proporciona acceso a las distintas secciones del sitio:

- **Inicio**: Redirige a la página principal de ArenaGG.
- **Login**: Enlace a la página de inicio de sesión para los usuarios.
- **Valorant**: Enlace a la página de torneos de Valorant.
- **League of Legends**: Enlace a la página de torneos de League of Legends.
- **Counter Strike 2**: Enlace a la página de torneos de Counter Strike 2.
- **Soporte**: Página actual de soporte.

Los botones de la barra de navegación están estilizados con el color rojo característico de ArenaGG (#dd3232).

### 2. Carrusel

El carrusel de imágenes muestra los juegos disponibles con enlaces a las páginas de torneos para cada uno:

- **Valorant**: Imagen con enlace a la página de torneos de Valorant.
- **League of Legends**: Imagen con enlace a la página de torneos de League of Legends.
- **Counter Strike 2**: Imagen con enlace a la página de torneos de Counter Strike 2.

Cada imagen en el carrusel está enlazada a su respectiva página.

### 3. Footer (Pie de Página)

El pie de página contiene la siguiente información:

- **Autores del Proyecto**:
  - Aarón Gutiérrez Caña
  - Alejandro Jiménez Pérez
  - Jesús Carmelo Pérez Robles

- **Derechos de Autor**:
  - © 2025 Arena GG, Inc

El pie de página está estilizado con el color gris oscuro característico de ArenaGG (#424242).

### 4. Funcionalidades Principales

- **Navegación**: Permite el acceso fácil a las secciones del sitio.
- **Carrusel**: Ofrece imágenes interactivas para los torneos de diferentes juegos.
- **Pie de Página**: Proporciona información de los autores y derechos de autor.

### 5. Archivos Externos

- **Bootstrap 5**: Framework CSS para garantizar un diseño moderno y responsivo.
- **Imágenes**: Las imágenes del carrusel están vinculadas a sus respectivas páginas de torneos.

---

# ArenaGG - Página de Inicio de Sesión

Este archivo describe la estructura y funcionamiento de la página de inicio de sesión de ArenaGG, diseñada para que los usuarios puedan iniciar sesión en la plataforma.

## Descripción

La página de inicio de sesión contiene un formulario donde los usuarios pueden ingresar su correo electrónico y contraseña. También ofrece enlaces para los usuarios que no tengan cuenta, para que puedan registrarse. La página está diseñada con Bootstrap 5 para un diseño moderno y responsivo.

### 1. Encabezado (Navegación)

El encabezado es una barra fija en la parte superior de la página que contiene el logo de ArenaGG:

- **Logo**: El logo de ArenaGG actúa como un enlace que redirige a la página de inicio (index.html).

El encabezado tiene un fondo gris oscuro con opacidad (`rgba(66, 66, 66, 0.81)`).

### 2. Formulario de Inicio de Sesión

En el centro de la página, se encuentra el formulario de inicio de sesión que permite a los usuarios ingresar su correo electrónico y contraseña:

- **Correo Electrónico**: Un campo de entrada donde los usuarios deben ingresar su correo electrónico.
- **Contraseña**: Un campo de entrada donde los usuarios deben ingresar su contraseña.
- **Botón de Enviar**: Un botón de inicio de sesión que está inicialmente deshabilitado. Se habilita cuando ambos campos son válidos.

Cada uno de estos campos tiene una validación visual, que muestra un ícono de advertencia 🚫 si el usuario no ingresa datos válidos o si la validación no pasa. Esta validación se maneja mediante JavaScript. Si la validación falla, el formulario no se enviará.

### 3. Enlace de Registro

Debajo del formulario, se ofrece un enlace para que los usuarios puedan registrarse si no tienen una cuenta:

- **¿No tienes cuenta?**: Un enlace que lleva a la página de registro (`registro.html`).

### 4. Footer (Pie de Página)

El pie de página contiene la siguiente información:

- **Autores del Proyecto**:
  - Aarón Gutiérrez Caña
  - Alejandro Jiménez Pérez
  - Jesús Carmelo Pérez Robles

- **Derechos de Autor**:
  - © 2025 Arena GG, Inc

El pie de página tiene el mismo fondo gris oscuro con opacidad (`rgba(66, 66, 66, 0.81)`).

### 5. Funcionalidades Principales

- **Formulario de Login**: Permite a los usuarios iniciar sesión en la plataforma con su correo electrónico y contraseña.
- **Validaciones de Formulario**: Usa JavaScript para validar los campos del formulario antes de enviarlo.
- **Enlace de Registro**: Proporciona un enlace a la página de registro para usuarios nuevos.
  
### 6. Archivos Externos

- **Bootstrap 5**: Framework CSS para un diseño moderno y responsivo.
- **login.js**: Archivo JavaScript que contiene la lógica de validación del formulario.

---
# ArenaGG - Página de Registro

Este archivo describe la estructura y funcionamiento de la página de registro de ArenaGG, donde los nuevos usuarios pueden crear una cuenta.

## Descripción

La página de registro permite a los nuevos usuarios crear una cuenta en ArenaGG. El formulario solicita el nombre de usuario, correo electrónico y contraseña. Se utiliza Bootstrap 5 para un diseño responsivo y moderno.

### 1. Encabezado (Navegación)

El encabezado es una barra fija en la parte superior de la página que contiene el logo de ArenaGG:

- **Logo**: El logo de ArenaGG es un enlace que redirige a la página de inicio (index.html).

El encabezado tiene un fondo gris oscuro con opacidad (`rgba(66, 66, 66, 0.81)`).

### 2. Formulario de Registro

En el centro de la página, se encuentra el formulario de registro donde los usuarios deben ingresar:

- **Nombre de Usuario**: Un campo de entrada donde los usuarios deben escribir su nombre de usuario.
- **Correo Electrónico**: Un campo de entrada para ingresar el correo electrónico.
- **Contraseña**: Un campo de entrada para que los usuarios creen una contraseña.

Cada uno de estos campos tiene una validación visual, que muestra un ícono de advertencia 🚫 si el usuario no ingresa datos válidos o si la validación no pasa. Esta validación se maneja mediante JavaScript. Si la validación falla, el formulario no se enviará.

- **Botón de Enviar**: Un botón de registro que está inicialmente deshabilitado. Se habilita solo cuando los campos son válidos.

### 3. Enlace de Login

Debajo del formulario, los usuarios tienen un enlace para iniciar sesión si ya tienen una cuenta:

- **¿Ya tienes cuenta?**: Un enlace que lleva a la página de inicio de sesión (`login.html`).

### 4. Footer (Pie de Página)

El pie de página contiene la siguiente información:

- **Autores del Proyecto**:
  - Aarón Gutiérrez Caña
  - Alejandro Jiménez Pérez
  - Jesús Carmelo Pérez Robles

- **Derechos de Autor**:
  - © 2025 Arena GG, Inc

El pie de página tiene el mismo fondo gris oscuro con opacidad (`rgba(66, 66, 66, 0.81)`).

### 5. Funcionalidades Principales

- **Formulario de Registro**: Permite a los usuarios crear una cuenta proporcionando su nombre de usuario, correo electrónico y contraseña.
- **Validaciones de Formulario**: Usa JavaScript para verificar que los campos sean válidos antes de enviar el formulario.
- **Enlace de Login**: Proporciona un enlace para usuarios que ya tienen una cuenta y desean iniciar sesión.

### 6. Archivos Externos

- **Bootstrap 5**: Framework CSS para un diseño moderno y responsivo.
- **registro.js**: Archivo JavaScript que contiene la lógica de validación del formulario.

---

# ArenaGG - Página de Torneos de Valorant

Este archivo describe la página de torneos de Valorant de ArenaGG, donde los usuarios pueden registrarse en torneos existentes o crear nuevos.

## Descripción

La página permite a los usuarios ver los torneos existentes, registrarse en ellos o crear nuevos torneos. El diseño se basa en Bootstrap 5, con un esquema de colores rojo y gris.

### 1. Encabezado (Navegación)

El encabezado es una barra fija que contiene los siguientes elementos:

- **Botón de Inicio**: Redirige a la página principal (`index.html`).
- **Botones de Navegación**: Enlaces a otras páginas de torneos de videojuegos:
  - **Valorant**: La página actual.
  - **League of Legends**: Página de torneos de LoL.
  - **Counter Strike 2**: Página de torneos de Counter Strike 2.
- **Botón de Soporte**: Un enlace a la sección de soporte (aún no implementado).

El encabezado tiene un fondo gris oscuro con opacidad (`rgba(66, 66, 66, 0.81)`).

### 2. Banner de Torneos

Un banner en la parte superior de la página resalta la temática de los torneos de Valorant:

- **Texto**: "Torneos de Valorant!" y una breve descripción: "Forma tu equipo y compite contra otros".
- **Fondo**: Rojo (`#dd3232`).

### 3. Sección de Torneos

Esta sección permite a los usuarios interactuar con los torneos de Valorant:

- **Descripción General**: Un mensaje introductorio sobre los torneos disponibles.
- **Botón para Crear Torneo**: Un botón que muestra un formulario para crear un nuevo torneo cuando se hace clic.
  
### 4. Formulario para Crear un Torneo

Un formulario que permite a los usuarios crear un nuevo torneo. Los campos incluyen:

- **Nombre del Torneo**: Campo de texto para ingresar el nombre del torneo.
- **Cantidad de Versus**: Campo de texto para definir cómo se jugarán los enfrentamientos (ej. 1vs1, 2vs2).
- **Descripción**: Campo de texto para ingresar una breve descripción del torneo.

El formulario es validado con JavaScript antes de enviarlo.

### 5. Listado de Torneos

Los torneos disponibles se muestran en tarjetas. Cada tarjeta incluye:

- **Nombre y Descripción del Torneo**: Información básica sobre el torneo.
- **Botones de Acción**:
  - **Registrarse**: Permite que los usuarios se inscriban en el torneo.
  - **Eliminar**: Permite eliminar el torneo si es el creador del mismo.

Se muestran dos torneos de ejemplo (Torneo 1 y Torneo 2).

### 6. Pie de Página

El pie de página incluye la información sobre los creadores de la plataforma:

- **Autores del Proyecto**:
  - Aarón Gutiérrez Caña
  - Alejandro Jiménez Pérez
  - Jesús Carmelo Pérez Robles

- **Derechos de Autor**:
  - © 2025 Arena GG, Inc

El pie de página tiene el mismo fondo gris oscuro con opacidad (`rgba(66, 66, 66, 0.81)`).

### 7. Funcionalidades Principales

- **Creación de Torneos**: Los usuarios pueden crear un nuevo torneo proporcionando el nombre, la cantidad de versus y una breve descripción.
- **Registro en Torneos**: Los usuarios pueden registrarse en los torneos disponibles.
- **Eliminación de Torneos**: Los usuarios pueden eliminar los torneos que han creado.
- **Visualización de Torneos**: Los torneos activos se muestran en una lista interactiva.

### 8. Archivos Externos

- **Bootstrap 5**: Framework CSS para un diseño moderno y responsivo.
- **valorant.js**: Archivo JavaScript que contiene la lógica para el formulario y la interacción con los torneos.

---
# ArenaGG - Página de Counter Strike 2

Este documento describe el funcionamiento y la estructura de la página dedicada a los torneos de Counter Strike 2 en la plataforma ArenaGG.

## Descripción

La página permite a los usuarios visualizar y crear torneos de Counter Strike 2. Cuenta con una interfaz dinámica e interactiva, desarrollada con HTML, CSS (a través de Bootstrap 5) y JavaScript para la lógica de creación e inscripción a torneos.

### 1. Encabezado (Navegación)

El encabezado es una barra de navegación fija que proporciona acceso a distintas secciones del sitio:

- **Inicio**: Redirige a la página principal de ArenaGG.
- **Valorant**: Enlace a la página de torneos de Valorant.
- **League of Legends**: Enlace a la página de torneos de League of Legends.
- **Counter Strike 2**: Página actual.
- **Soporte**: Acceso a la sección de ayuda para los usuarios.

Los botones están estilizados con el color rojo característico de ArenaGG (#dd3232).

### 2. Banner de Torneos de Counter Strike 2

Esta sección presenta un mensaje promocional para los torneos de Counter Strike 2. Se invita a los usuarios a formar equipos y competir contra otros.

### 3. Crear Torneo

Los usuarios pueden crear sus propios torneos rellenando un formulario. Cuando se hace clic en el botón "Crea tu propio Torneo", el formulario se vuelve visible con los siguientes campos:

- **Nombre del Torneo**: El usuario debe proporcionar un nombre.
- **Número de jugadores por equipo**: La cantidad de jugadores que debe tener cada equipo.

El formulario está inicialmente oculto y se muestra cuando el usuario hace clic en el botón correspondiente. Los campos deben completarse antes de enviar el formulario.

### 4. Lista de Torneos

Se muestra una lista de los torneos disponibles. Por defecto, se cargan tres torneos de ejemplo ("Torneo 1", "Torneo 2" y "Torneo 3"). Cada torneo incluye:

- **Nombre del Torneo**
- **Número de jugadores por equipo**

**Botones de Acción**:
- **Registrarse**: Permite a los usuarios inscribirse en el torneo.
- **Eliminar**: Permite a los usuarios eliminar el torneo de la lista.

Cuando el usuario hace clic en "Registrarse", se activa la función correspondiente. Si se hace clic en "Eliminar", el torneo se elimina de la lista.

### 5. Pie de Página (Footer)

El pie de página incluye:

- **Autores del Proyecto**:
  - Aarón Gutiérrez Caña
  - Alejandro Jiménez Pérez
  - Jesús Carmelo Pérez Robles

- **Derechos de Autor**:
  - © 2025 Arena GG, Inc

### 6. Funcionalidades Principales

- **Navegación Interactiva**: Acceso rápido a las distintas secciones del sitio.
- **Creación de Torneos**: Permite a los usuarios crear nuevos torneos con nombre y cantidad de jugadores.
- **Registro a Torneos**: Los usuarios pueden inscribirse a torneos existentes.
- **Eliminación de Torneos**: Los torneos creados pueden eliminarse mediante un botón específico.

### 7. Archivos Externos

- **counter.css**: Hoja de estilos personalizada para la página de Counter Strike 2.
- **counter.js**: Archivo JavaScript que gestiona las funciones de creación, inscripción y eliminación de torneos.
- **Bootstrap 5**: Framework CSS para garantizar un diseño moderno y responsivo.

---
# ArenaGG - Página de League of Legends

Este archivo describe la estructura y funcionamiento de la página dedicada a los torneos de League of Legends en la plataforma ArenaGG.

## Descripción

La página permite a los usuarios visualizar y registrarse en los torneos de League of Legends. También ofrece la posibilidad de crear torneos personalizados. La interfaz está diseñada utilizando HTML, CSS (a través de Bootstrap 5) y JavaScript para mejorar la experiencia del usuario.

### 1. Encabezado (Navegación)

El encabezado es una barra de navegación fija que proporciona acceso a distintas secciones del sitio:

- **Inicio**: Redirige a la página principal de ArenaGG.
- **Valorant**: Enlace a la página de torneos de Valorant.
- **League of Legends**: Página actual.
- **Counter Strike 2**: Enlace a la página de torneos de Counter Strike 2.
- **Soporte**: Acceso a la sección de ayuda para los usuarios.

Los botones de la barra de navegación están estilizados con el color rojo característico de ArenaGG (#dd3232).

### 2. Banner de Torneos de League of Legends

Esta sección muestra un mensaje de bienvenida y promoción para los torneos de League of Legends. Los usuarios son invitados a reunirse con sus amigos y competir en los torneos.

### 3. Crear Torneo

Los usuarios pueden crear sus propios torneos personalizados mediante un botón que activa un formulario de creación de torneos. Este formulario aún no está implementado en el archivo HTML proporcionado, pero el botón está presente con el siguiente texto:

- **Crea tu propio Torneo**: Al hacer clic en este botón, el formulario para crear un torneo personalizado será visible (aunque no está implementado en este código).

### 4. Lista de Torneos

La página muestra una lista de torneos disponibles para los usuarios. Cada torneo tiene los siguientes detalles:

- **Nombre del Torneo**
- **Descripción del Torneo**
- **Botón de Acción**: Un botón de "Registrarse" para permitir que los usuarios se inscriban en el torneo.

Los torneos listados en este ejemplo son:

- **Torneo 1**: 1 vs 1
- **Torneo 2**: 2 vs 2
- **Torneo 3**: 5 vs 5

Cada torneo tiene un estilo visual que se destaca con una sombra y un borde redondeado.

### 5. Pie de Página (Footer)

El pie de página contiene información sobre los autores del proyecto y los derechos de autor:

- **Autores del Proyecto**:
  - Aarón Gutiérrez Caña
  - Alejandro Jiménez Pérez
  - Jesús Carmelo Pérez Robles

- **Derechos de Autor**:
  - © 2025 Arena GG, Inc

### 6. Funcionalidades Principales

- **Navegación Interactiva**: Acceso rápido a las distintas secciones del sitio mediante un menú de navegación.
- **Visualización de Torneos**: Los usuarios pueden ver una lista de torneos disponibles, con la opción de registrarse en ellos.
- **Creación de Torneos**: Los usuarios tienen la opción de crear torneos personalizados, aunque el formulario aún no está implementado.
- **Registro a Torneos**: Los usuarios pueden inscribirse en los torneos existentes.

### 7. Archivos Externos

- **lol.css**: Hoja de estilos personalizada para la página de League of Legends.
- **Bootstrap 5**: Framework CSS para garantizar un diseño moderno y responsivo.

---
# ArenaGG - Página de Soporte

Este archivo describe la estructura y funcionamiento de la página de **Soporte** en ArenaGG, que está diseñada para ayudar a los usuarios con sus dudas o problemas relacionados con los torneos.

## Descripción

La página de soporte ofrece a los usuarios un formulario de contacto para que puedan hacer preguntas o reportar problemas. Además, se incluyen respuestas a algunas **Preguntas Frecuentes** para resolver dudas comunes. La interfaz está diseñada utilizando HTML, CSS (Bootstrap 5) y JavaScript para mejorar la experiencia del usuario.

### 1. Encabezado (Navegación)

El encabezado es una barra de navegación fija que proporciona acceso a las distintas secciones del sitio:

- **Inicio**: Redirige a la página principal de ArenaGG.
- **Valorant**: Enlace a la página de torneos de Valorant.
- **League of Legends**: Enlace a la página de torneos de League of Legends.
- **Counter Strike 2**: Enlace a la página de torneos de Counter Strike 2.
- **Soporte**: Página actual.

Los botones de la barra de navegación están estilizados con el color rojo característico de ArenaGG (#dd3232).

### 2. Banner de Soporte

El banner muestra un mensaje de bienvenida y una invitación para que los usuarios contacten al soporte si necesitan ayuda. El fondo tiene el color rojo característico de ArenaGG (#dd3232).

### 3. Formulario de Contacto

Los usuarios pueden enviar un mensaje al equipo de soporte utilizando un formulario. Este formulario incluye los siguientes campos:

- **Nombre**: El nombre del usuario.
- **Correo Electrónico**: El correo electrónico del usuario.
- **Mensaje**: Un área de texto donde los usuarios pueden escribir su consulta o problema.

El formulario está diseñado con un fondo oscuro para hacer que los campos de entrada sean fácilmente legibles.

### 4. Preguntas Frecuentes (FAQ)

La sección de **Preguntas Frecuentes** responde a las dudas más comunes que los usuarios puedan tener. Actualmente, las preguntas incluyen:

- **¿Cómo puedo crear un torneo?**: Instrucciones sobre cómo crear un torneo personalizado.
- **¿Cómo me registro en un torneo?**: Detalles sobre el registro en los torneos.
- **¿Puedo cancelar mi registro en un torneo?**: Respuesta sobre la posibilidad de cancelar un registro.

### 5. Pie de Página (Footer)

El pie de página contiene información sobre los autores del proyecto y los derechos de autor:

- **Autores del Proyecto**:
  - Aarón Gutiérrez Caña
  - Alejandro Jiménez Pérez
  - Jesús Carmelo Pérez Robles

- **Derechos de Autor**:
  - © 2025 Arena GG, Inc

### 6. Funcionalidades Principales

- **Formulario de Contacto**: Los usuarios pueden enviar consultas al equipo de soporte.
- **Preguntas Frecuentes**: Los usuarios pueden consultar respuestas a dudas comunes sin tener que contactar al soporte.
- **Navegación Interactiva**: Acceso rápido a las distintas secciones del sitio mediante un menú de navegación.

### 7. Archivos Externos

- **Bootstrap 5**: Framework CSS para garantizar un diseño moderno y responsivo.

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

---

# Descripción del Funcionamiento del Script de Registro (registro.js)

Este archivo JavaScript se utiliza para gestionar la validación de un formulario de registro de usuario. El script asegura que los campos de nombre, correo electrónico y contraseña sean válidos antes de permitir el registro.

## Funcionalidad:

### 1. Variables Iniciales:
- **Contadores de Errores**: Se utilizan tres contadores (`contadorErroresNombre`, `contadorErroresEmail`, `contadorErroresPassword`) para llevar un registro de los errores ocurridos en los campos de nombre, correo electrónico y contraseña respectivamente.

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

---


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

---

# Descripción del Funcionamiento del Script para la Creación y Gestión de Torneos (counter.js)

Este archivo JavaScript está diseñado para gestionar la creación, visualización, inscripción y eliminación de torneos. Permite a los usuarios crear torneos mediante un formulario, validar los datos introducidos, y administrar la inscripción o eliminación de los torneos creados.

## Funcionalidad:

### 1. Mostrar y Ocultar el Formulario:
- **Función `anadir_torneo()`**:
  - Muestra el formulario de creación de torneos, cambiando el estilo del contenedor a `block` para hacerlo visible.

- **Función `ocultar_form()`**:
  - Oculta el formulario de creación de torneos, cambiando el estilo del contenedor a `none` para hacerlo invisible.

### 2. Creación de un Torneo:
- **Función `crear_torneo(event, form)`**:
  - Evita el envío del formulario mediante `event.preventDefault()`.
  - Obtiene los valores del nombre del torneo y el número de jugadores por equipo.
  - Valida que:
    - El nombre del torneo tenga entre 3 y 15 caracteres y empiece con una mayúscula.
    - El número de jugadores por equipo sea un número válido.
    - Si la validación es exitosa, oculta el formulario y agrega el torneo al contenedor.

### 3. Agregar un Torneo al Contenedor:
- Cuando los datos son válidos, se crea un nuevo contenedor en el DOM con la información del torneo (nombre y jugadores).
- Se generan dos botones:
  - **Botón de "Registrarse"**: Cambia su texto entre "Registrarse" y "Abandonar" cada vez que se hace clic.
  - **Botón de "Eliminar"**: Elimina el torneo del contenedor cuando se hace clic en el botón.

### 4. Funciones para los Botones:
- **Función `inscribirse(boton)`**:
  - Cambia el texto del botón entre "Registrarse" y "Abandonar" según el estado actual del botón.

- **Función `eliminar(boton)`**:
  - Elimina el torneo correspondiente del contenedor cuando se hace clic en el botón "Eliminar".

### 5. Validación de Datos del Formulario:
- **Validación del Nombre del Torneo**: 
  - El nombre debe empezar con una letra mayúscula y tener entre 3 y 15 caracteres. Si no cumple con estas condiciones, se muestra un mensaje de error.
  
- **Validación del Número de Jugadores**: 
  - El valor debe ser un número válido. Si no cumple con esta condición, se muestra un mensaje de error.

---

# Descripción del Funcionamiento del Script para la Gestión de Torneos (lol.js)

Este script permite crear y gestionar torneos. Los usuarios pueden crear torneos, inscribirse en ellos y cancelar su inscripción. Además, incluye validación de los campos del formulario y una interfaz dinámica para la gestión de los torneos.

## Funcionalidad:

### 1. Mostrar y Ocultar el Formulario:
- **Función `mostrarFormulario()`**:
  - Muestra el formulario para crear un torneo. El formulario incluye campos para el nombre, la descripción y el formato del torneo (1 vs 1, 2 vs 2, 5 vs 5).

- **Función `cerrarFormulario()`**:
  - Cierra el formulario de creación de torneo eliminando el HTML del DOM.

### 2. Creación de un Torneo:
- **Función `crearTorneo()`**:
  - Recupera los valores del nombre, descripción y formato del torneo.
  - Si los campos no están completos, muestra una alerta para completarlos.
  - Si los campos son válidos, crea un torneo con un ID único, el nombre, la descripción, y un botón para inscribirse.
  - El torneo creado se agrega al contenedor de torneos y se cierra el formulario.

### 3. Inscripción y Cancelación de Inscripción:
- **Función `registrarEquipo(button)`**:
  - Cuando un usuario se inscribe en un torneo, se incrementa el contador de equipos registrados.
  - El botón "Registrarse" cambia a "Cancelar registro", y el evento de inscripción se reemplaza por uno que permite cancelar la inscripción.

- **Función `cancelarRegistro(button)`**:
  - Cuando un usuario cancela su inscripción, se decrementa el contador de equipos registrados.
  - El botón "Cancelar registro" vuelve a "Registrarse", y el evento se reemplaza por uno que permite inscribirse nuevamente.

### 4. Manejo de Eventos en los Botones:
- **Evento de Click en el Botón de Inscripción**:
  - Si el botón de inscripción dice "Registrarse", cambia su texto a "Cancelar registro" y cambia el estilo del botón a un color de advertencia.
  - Si el botón dice "Cancelar registro", vuelve a "Registrarse" y cambia el estilo de nuevo a rojo.

## Resumen:
Este script proporciona una forma sencilla de gestionar torneos, permitiendo a los usuarios crear torneos, inscribirse y cancelar su inscripción, todo ello con una interfaz dinámica e interactiva.


## Créditos

- **Realizado por**:
  - Aarón Gutiérrez Caña
  - Alejandro Jiménez Pérez
  - Jesús Carmelo Pérez Robles

**© 2025 Arena GG, Inc**