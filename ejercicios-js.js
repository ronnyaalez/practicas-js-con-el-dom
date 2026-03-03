// EJ 1

let ciudad = 'Madrid'
console.log(ciudad,typeof ciudad)

// EJ 2

const pi = 3.14159

try{
pi = 3.1416
}

catch(error) {
    console.error(error.message)

}

console.log(typeof(pi))

// EJ3
 let dato 

 dato = 'Hola'
 console.log(dato,typeof dato)
 

 dato = 42
 console.log(dato,typeof dato)

 dato = true
console.log(dato,typeof dato)
 dato = null

console.log(dato,typeof dato)


console.log(typeof null)

try{
    null.nombre = 'pepe'
}
catch(error) {
console.error(error.name)
console.error(error.message)
}

let precio = 19.99
let descuento = '5'

let suma = (precio + descuento)

console.log(suma)

let sumaReal = precio + Number(descuento)
console.log(sumaReal)

let gato = {
    nombre: 'pepe',
    edad: 15
}

 let gato2 = gato

gato2.nombre = 'noelia'

console.log(gato)
console.log(gato2)

 let gato3 = {...gato}
 gato.nombre = 'carlos'
 console.log(gato3)
console.log(gato)

const alumno = {
    nombre: 'Ana',
    notas : [8,9,7],
    direccion: {ciudad: 'Madrid'}
}
const alumno2 = structuredClone(alumno)
alumno.notas[2] = 3
alumno.direccion.ciudad = 'Malaga'

console.log(alumno2)
console.log(alumno)

const config = {
    debug: true,
    version: 1
}

Object.freeze(config)
config.debug = false

console.log(config)