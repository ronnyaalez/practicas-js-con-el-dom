// Agarra los elementos del Dom
let saludo = document.querySelector('#saludo');
let boton = document.querySelector('#botonCambiar');
// Cuando se haga click en el boton, cambia el texto del h1.

boton.addEventListener('click', () =>{
    saludo.textContent = '¡Hola, programador!'
    saludo.style.color = 'blue';
})

// Una funcion que genere el saludo

const generarSaludo = (nombre,hora) => {
    if(hora < 12){
        return 'Buenos dias' + nombre + "!";
    }
    else if (hora < 20) {
        return 'Buenas tardes'+ nombre +  '!';
    }
    else {return 'Buenas noches'+ nombre +  '!';} };

    console.log(generarSaludo)

    // Obtenmos la hora actual del sistema

    const horaActual = new Date().getHours();

    // Agregamos los  elementos

   

    // Al hacer click, mostramos el saludo segun la hora

    boton.addEventListener('click', () => {
        let mensaje = generarSaludo ('Programador', horaActual)
        saludo.textContent = mensaje ;
        saludo.style.color = 'green'
    })