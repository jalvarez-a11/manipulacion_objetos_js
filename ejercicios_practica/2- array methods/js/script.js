"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/*
    Deberá utilizar los datos en formato JSON disponible
    en "data.js" para realizar los siguientes enunciados.
/*

/* 1 - Enunciado

- Levantar los datos data.js parseando el JSON, generando
una array de personas.
- Con el array anterior utilice el metodo filter para generar
un array de personas mayores o igual a 18 años.
- Imprimir en consola el array resultante.

*/
const fs = require('fs');

const jsonData = fs.readFileSync('data.js', 'utf8');
const personas = JSON.parse(jsonData);

const personasArray = personas.map(persona => {
    // Convert each person object into a simplified array format
    return {
      nombre: persona.nombre,
      edad: persona.edad
    };
  });
  const personasMayores = personasArray.filter(persona => persona.edad >= 18);
   console.log(personasMayores);
/* 2 - Enunciado

- Con el array de personas filtradas (resultado del enunciado anterior)
utilice le método forEach para en cada iteración con cada persona
renderizar el nombre y edad de esa persona en el HTML.
- Agregue al HTML los elementos que crea necesario e utilice los
mecanismos que prefiera para agregar por cada persona el nombre y edad
en el HTML (es decir, generar el contenido de forma dinámica).

*/
/*const listaPersonas = document.getElementById('listaPersonas');

// Render each person using forEach
personasMayores.forEach(persona => {
  const personaElement = document.createElement('div'); // Create a div element
  personaElement.innerHTML = `<h2>${persona.nombre}</h2><p>Edad: ${persona.edad}</p>`; // Set innerHTML with name and age
  listaPersonas.appendChild(personaElement);
}); */
/* 3 - BONUS TRACK
- Si misión, en caso que decida aceptarla, es que la edad a filtrar
en el primer enunciado no sea un valor escrito en este script, sino
que sea un valor que se toma del HTML (un input).
- Que toda la acción de filtrado (enunciado 1) y renderizado (enunciado 2)
se dispare al presionar un botón en el HTML que usted agregue.

*/
const listaPersonas = document.getElementById('listaPersonas');
const edadMinimaInput = document.getElementById('edadMinima');
const filtrarButton = document.getElementById('filtrar');

filtrarButton.addEventListener('click', () => {
  const edadMinima = parseInt(edadMinimaInput.value); // Get the value from the input
  const personasMayores = personasArray.filter(persona => persona.edad >= edadMinima);
  renderPersonas(personasMayores); // Call the render function
});

function renderPersonas(personas) {
  listaPersonas.innerHTML = '';
  personas.forEach(persona => {

  });
}