// Agarra los elementos del Dom
let saludo = document.querySelector("#saludo");
let boton = document.querySelector("#botonCambiar");
// Cuando se haga click en el boton, cambia el texto del h1.

boton.addEventListener("click", () => {
  saludo.textContent = "¡Hola, programador!";
  saludo.style.color = "blue";
});

// Una funcion que genere el saludo

const generarSaludo = (nombre, hora) => {
  if (hora < 12) {
    return "Buenos Dias, " + nombre + "!";
  } else if (hora < 20) {
    return "Buenas tardes " + nombre + "!";
  } else {
    return "Buenas noches " + nombre + "!";
  }
};

console.log(generarSaludo);

// Obtenmos la hora actual del sistema

const horaActual = new Date().getHours();

// Agregamos los  elementos

boton.addEventListener("click", () => {
  saludo.textContent = "¡Hola, programador!";
  saludo.style.color = "blue";
});

// Al hacer click, mostramos el saludo segun la hora

boton.addEventListener("click", () => {
  let mensaje = generarSaludo("Programador", horaActual);
  saludo.textContent = mensaje;
  saludo.style.color = "green";
});

/*Tres cosas que practicaste aquí:

Crear una función con parámetros y return
Usar un if/else dentro de una función
Pasar una arrow function como callback a addEventListener */

//  Objetos
let pelicula = {

    titulo: "El Señor de los Anillos",
    director: "Peter Jackson",
    año : 2001,
    genero : "Fantasía",

}

let botonpelicula = document.querySelector("#botonpelicula");

let tarjeta = document.querySelector("#tarjeta");

botonpelicula.addEventListener('click', () => {
tarjeta.innerHTML =`<h2>${pelicula.titulo}</h2>
        <p>Director: ${pelicula.director}</p>
        <p>Año: ${pelicula.año}</p>
        <p>Género: ${pelicula.genero}</p>`;}
    )

    // Arrays

    let peliculas = [
    { titulo: "El Señor de los Anillos", director: "Peter Jackson",   año: 2001, genero: "Fantasía" },
    { titulo: "Interstellar",            director: "Christopher Nolan", año: 2014, genero: "Ciencia ficción" },
    { titulo: "El Rey León",             director: "Roger Allers",      año: 1994, genero: "Animación" },
    { titulo: "Matrix",                  director: "Las Wachowski",     año: 1999, genero: "Ciencia ficción" },
];

let lasPeliculas = document.querySelector('#lasPeliculas')

let botonMostrar = document.querySelector('#botonMostrar')

botonMostrar.addEventListener('click', () =>{
    peliculas.forEach((pelicula) => {
        lasPeliculas.innerHTML += `
        <div>
                <h3>${pelicula.titulo}</h3>
                <p>Director: ${pelicula.director}</p>
                <p>Año: ${pelicula.año}</p>
                <p>Género: ${pelicula.genero}</p>
            </div>`

    })
    }); 

  
