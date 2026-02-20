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

const lanzar = (cohete) => {
    console.log('Antes..!')
    cohete(); 
    console.log('Despues')
};
 const lanzarCohete = () => {
    console.log('🚀 ¡¡¡IGNICIÓN Y DESPEGUE!!!'  )
 };

 lanzar(lanzarCohete)


const generarSaludo = (nombre,saludo) => {
    if(hora < 12){
        return 'Buenos dias', '+ nombre +', "!";
    }
    else if (hora< 20) {
        return 'Buenas tardes', '+ nombre +', '!'
    }
    else {return 'Buenas noches', '+ nombre +', '!'} };

    console.log(generarSaludo)