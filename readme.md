### Paso 2: El DOM — ¿Qué es?

**DOM** significa _Document Object Model_. Es básicamente cómo el navegador "ve" y organiza tu HTML en memoria, como un árbol:

```
document
  └── html
        ├── head
        │     └── title
        └── body
              ├── h1
              └── p

> ### 🟦 Paso 2: El DOM — ¿Qué es?

La forma moderna — querySelector (más flexible, la más usada hoy):

<h1 id="titulo">Hola Mundo</h1>
<p class="texto">Este es un párrafo</p>

// Busca el PRIMER elemento que coincida (igual que CSS)
let titulo = document.querySelector("#titulo");    // por id
let parrafo = document.querySelector(".texto");    // por clase
let encabezado = document.querySelector("h1");     // por etiqueta

💡 querySelector usa la misma sintaxis que CSS: # para ids, . para clases, sin prefijo para etiquetas.

 ### 🟦 Paso 4 : Modificar elementos

Una vez que tienes el elemento, puedes cambiarlo:
let titulo = document.querySelector("#titulo");

// Cambiar el texto
titulo.textContent = "¡Texto cambiado con JS!";

// Cambiar el HTML interno (permite añadir etiquetas)
titulo.innerHTML = "Texto con <strong>negrita</strong>";

// Cambiar estilos
titulo.style.color = "red";
titulo.style.fontSize = "48px";

// Añadir o quitar clases CSS
titulo.classList.add("activo");
titulo.classList.remove("activo");
titulo.classList.toggle("activo"); // Si está, la quita. Si no, la añade.

 ### 🟦 Paso 5: Eventos y Callbacks
Un evento es algo que pasa en la página: el usuario hace clic, mueve el ratón, escribe en un input, etc.
Un callback es la función que se ejecuta cuando ese evento ocurre.

<button id="miBoton">Haz clic aquí</button>

Con arrow function (más moderna y limpia):
javascriptboton.addEventListener("click", () => {
  alert("¡Me hiciste clic!");
});

```
 ### 🟦 ¿Qué es una función?

 Una función es como una receta de cocina: la escribes una vez y la puedes usar cuantas veces quieras. En vez de repetir el mismo código, lo metes dentro de una función y la llamas cuando la necesites.

Forma clasica

// Definimos la función
function saludar() {
  console.log("¡Hola!");
}

// La llamamos (ejecutamos)
saludar(); // → ¡Hola!
saludar(); // → ¡Hola! (podemos usarla las veces que queramos)

// Guardamos la función en una variable
const saludar = function() {
  console.log("¡Hola!");
};

saludar(); // → ¡Hola!

Las mas moderna

// Es una forma más corta de escribir lo mismo
const saludar = () => {
  console.log("¡Hola!");
};

saludar(); // → ¡Hola!

const saludar = () => console.log("¡Hola!");

Parámetros — darle información a la función
Los parámetros son como los ingredientes de la receta. Le permites pasar datos a la función para que trabaje con ellos:

// "nombre" es el parámetro (el ingrediente que espera recibir)
const saludar = (nombre) => {
  console.log("¡Hola, " + nombre + "!");
};

// Al llamarla, le pasamos el "argumento" (el valor real)
saludar("María");  // → ¡Hola, María!
saludar("Carlos"); // → ¡Hola, Carlos!
saludar("Ana");    // → ¡Hola, Ana!

Con varios parámetros:

const sumar = (a, b) => {
  console.log(a + b);
};

sumar(3, 5);  // → 8
sumar(10, 2); // → 12

Return — la función devuelve un resultado
Hasta ahora las funciones solo mostraban cosas. Pero lo más útil es que devuelvan un valor para usarlo después:

const sumar = (a, b) => {
  return a + b; // devuelve el resultado
};

// Guardamos lo que devuelve
let resultado = sumar(3, 5);
console.log(resultado); // → 8

// O lo usamos directamente
console.log(sumar(10, 2)); // → 12

💡 Cuando una función tiene return, es como una fábrica: le metes materiales (parámetros) y te devuelve un producto (el valor).

HOF y Callbacks — funciones que usan otras funciones
Esto es muy importante en JS. Una Higher Order Function (HOF) es una función que recibe otra función como parámetro.
Ya lo usaste antes sin saberlo:

boton.addEventListener("click", () => {
  // Esta función de aquí dentro es un CALLBACK
  // Se la estamos pasando a addEventListener
});

Otro ejemplo más claro:

// Esta función recibe OTRA función como parámetro
const ejecutarDespues = (miFuncion) => {
  console.log("Antes...");
  miFuncion(); // ejecutamos lo que nos pasaron
  console.log("Después.");
};

const decirHola = () => {
  console.log("¡Hola!");
};

ejecutarDespues(decirHola);
// → Antes...
// → ¡Hola!
// → Después.

💡 Nota que pasamos decirHola sin paréntesis. Si escribiéramos decirHola() estaríamos ejecutándola en ese momento. Sin paréntesis, la pasamos como "receta para usar después".