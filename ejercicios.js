// ============================================================
// EJERCICIOS DE JAVASCRIPT - Practica en VS Code
// Ejecuta con: node ejercicios-js.js
// Escribe tu solución debajo de cada comentario // 👉
// ============================================================
//   node 'c:/Users/Alexito/Desktop/Practicas js con el dom/practicas-js-con-el-dom/ejercicios-js.js'

// ============================================================
// BLOQUE 1 - TIPOS Y VARIABLES
// ============================================================

// EJ 1: Declara una variable con let llamada "ciudad" y asígnale tu ciudad.
// Luego muéstrala por consola junto con su tipo usando typeof.
// 👉


// EJ 2: Declara una constante PI con valor 3.14159.
// Intenta reasignarla y captura el error con try/catch, mostrando el mensaje.
// 👉


// EJ 3: Declara una variable "dato" sin asignarle valor.
// Muestra su valor y tipo. Luego asígnale: un string, un número, un boolean y null.
// Muestra el tipo en cada paso.
// 👉


// EJ 4: ¿Qué devuelve typeof null? Escribe un console.log que demuestre
// que null NO es un objeto (intenta asignarle una propiedad y captura el error).
// 👉


// EJ 5: Crea una variable "precio" = 19.99 y otra "descuento" = "5".
// Suma ambas con + y luego con Number(). ¿Qué diferencia hay? Explícalo en un comentario.
// 👉


// ============================================================
// BLOQUE 2 - MUTABILIDAD Y REFERENCIAS
// ============================================================

// EJ 6: Crea un objeto "gato" con nombre y edad.
// Crea "gato2" apuntando al mismo objeto (sin copiar).
// Cambia el nombre desde gato2 y muestra ambos. ¿Qué ocurre?
// 👉


// EJ 7: Haz una copia SUPERFICIAL (shallow copy) del objeto anterior con spread.
// Cambia el nombre en el original y comprueba que la copia no cambia.
// 👉


// EJ 8: Crea este objeto y haz una copia PROFUNDA con structuredClone:
const alumno = {
    nombre: "Ana",
    notas: [8, 9, 7],
    direccion: { ciudad: "Madrid" }
};
// Modifica alumno.notas y alumno.direccion.ciudad en el original.
// Comprueba que la copia NO se ha modificado.
// 👉


// EJ 9: Crea un objeto "config" con { debug: true, version: 1 }.
// Congélalo con Object.freeze. Intenta cambiar "debug" y muestra el resultado.
// 👉


// ============================================================
// BLOQUE 3 - FUNCIONES Y SCOPE
// ============================================================

// EJ 10: Escribe una función declarada "saludar" que reciba un nombre
// y devuelva el string "Hola, [nombre]!". Llámala y muestra el resultado.
// 👉


// EJ 11: Escribe la misma función como arrow function con parámetro por defecto
// (si no se pasa nombre, que diga "Hola, desconocido!").
// 👉


// EJ 12: Escribe una función "duplicar" que reciba un número y lo devuelva multiplicado x2.
// IMPORTANTE: comprueba que el original fuera de la función NO cambia (paso por valor).
// 👉


// EJ 13: Escribe una función "agregarRol" que reciba un objeto usuario
// y le añada la propiedad rol: "admin". Hazlo de forma que el objeto ORIGINAL
// no se modifique (usa structuredClone o spread).
// 👉


// EJ 14: ¿Qué hace este código? Escribe debajo qué imprimirá y por qué (en comentarios):
{
    let x = 10;
    {
        let x = 20;
        console.log(x); // ??
    }
    console.log(x); // ??
}
// 👉 Explicación:


// ============================================================
// BLOQUE 4 - ERRORES (try/catch)
// ============================================================

// EJ 15: Escribe una función "dividir(a, b)" que lance un Error
// si b es 0 con el mensaje "División por cero no permitida".
// Llámala dentro de un try/catch y muestra el error por consola.
// 👉


// EJ 16: Escribe una función "obtenerNombre(obj)" que devuelva obj.nombre.
// Si obj es null o undefined, lanza un Error con mensaje descriptivo.
// Pruébala con un objeto válido y con null.
// 👉


// EJ 17: Usa el operador optional chaining (?.) para acceder de forma segura
// a "usuario.direccion.ciudad" en un objeto que NO tiene la propiedad "direccion".
// Muestra el resultado (no debe lanzar error).
// 👉


// ============================================================
// BLOQUE 5 - ARRAYS Y OBJETOS
// ============================================================

// EJ 18: Dado este array, usa map para devolver un nuevo array con cada número al cuadrado.
const nums = [1, 2, 3, 4, 5];
// 👉


// EJ 19: Del mismo array, usa filter para quedarte solo con los números pares.
// 👉


// EJ 20: Usa reduce sobre el array nums para calcular la suma total.
// 👉


// EJ 21: Dado este array de objetos, usa filter + map para obtener
// solo los nombres de los usuarios activos.
const usuarios = [
    { nombre: "Pepe", activo: true },
    { nombre: "Ana", activo: false },
    { nombre: "Luis", activo: true },
    { nombre: "Sara", activo: false },
];
// Resultado esperado: ["Pepe", "Luis"]
// 👉


// EJ 22: Elimina los duplicados de este array usando Set.
const conDuplicados = [3, 1, 4, 1, 5, 3, 2, 5];
// Resultado esperado: [3, 1, 4, 5, 2]
// 👉


// EJ 23: Dado el objeto "usuario" de abajo, muestra por consola
// sus claves, sus valores y sus entradas usando Object.keys / values / entries.
const usuario = { nombre: "Carlos", edad: 30, rol: "admin" };
// 👉


// EJ 24 (RETO FINAL): Escribe una función "resumen(arr)" que reciba
// un array de números y devuelva un objeto con:
// { total: suma, maximo: el más alto, minimo: el más bajo, media: promedio }
// Pruébala con [10, 3, 7, 25, 1].
// Resultado esperado: { total: 46, maximo: 25, minimo: 1, media: 9.2 }
// 👉
