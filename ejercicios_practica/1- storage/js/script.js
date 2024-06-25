"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/*
    Deberá realizar los siguientes enunciados todos en este
    script de javascript. Cada enunciado agrega una funcionalidad
    extra al programa.
/*

/* 1 - Enunciado

- Debera capturar el evento "onclick" del boton "Ingresar"
y leer los datos ingresados en "usuario" y "email".
- Tome esos datos y almacenelo en memoria permanente del explorador.
- Deberá completar las etiquetas <p> de id "usuarioLogeado" y "emailLogeado"
con los datos almacenados en memoria, a fin de darle la bienvenida al usuario logeado.

*/

/*localStorage.setItem('bienvenida', '¡Hola Inove!');
let mensaje =  localStorage.getItem('bienvenida');

const usuarioInput = document.getElementById("usuario");
const emailInput = document.getElementById("email");
const usuarioLogeado = document.getElementById("usuarioLogeado");
const emailLogeado = document.getElementById("emailLogeado");
const botonIngresar = document.getElementById("Ingresar");

// Almaceno datos

function guardarDatos (usuario, email) {
 localStorage.setItem("usuario", usuario);
 localStorage.setItem("email", email);
}

function recuperarDatos() {
    const usuarioAlmacenado = localStorage.getItem("usuario");
    const emailAlmacenado = localStorage.getItem("email");
  
    if (usuarioAlmacenado && emailAlmacenado) {
      usuarioLogeado.textContent = `Bienvenido, ${usuarioAlmacenado}`;
      emailLogeado.textContent = `Su correo electrónico es: ${emailAlmacenado}`;
    } else {
      console.log("no se encuentra el usuario")
    }
  }
  botonIngresar.onclick = () => {
    const usuario = usuarioInput.value;
    const email = emailInput.value;
  
    if (usuario && email) {
      guardarDatos(usuario, email);
      recuperarDatos(); // Actualizar los párrafos con los datos guardados
      usuarioInput.value = "";
      emailInput.value = "";
    } else {
      console.log("faltan datos");
    }
  }; */

/* 2 - Enunciado

- Al comenzar el script se debe verificar si en memoria se encuentran
almacenados los datos de "usuario" y "email".
- En caso de que hubiera datos almacenados se debe completar los elementos
"usuarioLogeado" y "emailLogeado".
- Se debe ocultar la sección "login" (puede usar la clase CSS hidden ya creada)
y deberá revelar la sección "logout" (quitar la clase hidden).

*/
/*const usuarioInput = document.getElementById("usuario");
const emailInput = document.getElementById("email");
const usuarioLogeado = document.getElementById("usuarioLogeado");
const emailLogeado = document.getElementById("emailLogeado");
const botonIngresar = document.getElementById("ingresar");
const seccionLogin = document.getElementById("seccionLogin");
const seccionLogout = document.getElementById("seccionLogout");

function checkStoredData() {
  const usuarioAlmacenado = localStorage.getItem("usuario");
  const emailAlmacenado = localStorage.getItem("email");

  if (usuarioAlmacenado && emailAlmacenado) {
    usuarioLogeado.textContent = `Bienvenido, ${usuarioAlmacenado}`;
    emailLogeado.textContent = `Su correo electrónico es: ${emailAlmacenado}`;

    seccionLogin.classList.add("hidden");
    seccionLogout.classList.remove("hidden");
  }
}

// Event listener for the "Ingresar" button (remains the same)
botonIngresar.addEventListener("click", () => {
  const usuario = usuarioInput.value;
  const email = emailInput.value;

  if (usuario && email) {
    guardarDatos(usuario, email);
    recuperarDatos(); // Actualizar los párrafos con los datos guardados
    usuarioInput.value = "";
    emailInput.value = "";
  } else {
    console.log("faltan datos");
  }
});
checkStoredData();*/
/* 3 - Enunciado

- Debera capturar el evento "onclick" del boton "Salir". Cuando este
botón sea presionado deberá borrar de memoria las variables de este programa.
- Luego deberá refrescar la página (desde javascript, con window.location.reload()) y al
volverse a cargar debería aparecer nuevamente la sección de bienvenida
ya que no debería haber más datos en memoria cargados.

*/
const usuarioInput = document.getElementById("usuario");
const emailInput = document.getElementById("email");
const usuarioLogeado = document.getElementById("usuarioLogeado");
const emailLogeado = document.getElementById("emailLogeado");
const botonIngresar = document.getElementById("ingresar");
const botonSalir = document.getElementById("salir"); // Assuming there's a "Salir" button
const seccionLogin = document.getElementById("seccionLogin");
const seccionLogout = document.getElementById("seccionLogout");

function guardarDatos (usuario, email) {
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("email", email);
   }
   
   function recuperarDatos() {
       const usuarioAlmacenado = localStorage.getItem("usuario");
       const emailAlmacenado = localStorage.getItem("email");
     
       if (usuarioAlmacenado && emailAlmacenado) {
         usuarioLogeado.textContent = `Bienvenido, ${usuarioAlmacenado}`;
         emailLogeado.textContent = `Su correo electrónico es: ${emailAlmacenado}`;
       } else {
         console.log("no se encuentra el usuario")
       }
     }
     botonIngresar.onclick = () => {
       const usuario = usuarioInput.value;
       const email = emailInput.value;
     
       if (usuario && email) {
         guardarDatos(usuario, email);
         recuperarDatos(); // Actualizar los párrafos con los datos guardados
         usuarioInput.value = "";
         emailInput.value = "";
       } else {
         console.log("faltan datos");
       }
     }; 

// Event listener for the "Salir" button
botonSalir.addEventListener("click", () => {
  localStorage.clear();
  window.location.reload();
});
