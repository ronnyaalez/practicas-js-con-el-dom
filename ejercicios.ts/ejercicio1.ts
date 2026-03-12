// Una variable para guardar tu nombre
// Una variable para guardar tu edad
// Una variable para guardar si estás trabajando (true/false)
// Una variable para guardar tu salario (número decimal)
let nombre = "Alex";
let edad = 25;
let trabajando = true;
let salario = 2.202;
// La función debe devolver algo así:
// "Hola, me llamo Ana y tengo 25 años"
function Nombre(name: string, edad: number): string {
  return `Hola, me llamo ${name} y tengo ${edad} años`;
}
console.log(Nombre(nombre, edad));

/*Ejercio 3 
Crea una función que reciba dos números y devuelva el mayor de los dos.
Requisitos:

Anota los parámetros con su tipo
Anota el tipo de retorno
Llámala con console.log para ver el resultado

*/
{
  let number = 50;
  let number2 = 10;
  function Number(number: number, number2: number): number {
    if (number < number2) return number2;
    else return number;
  }
  console.log(Number(number, number2));
}

{
  let Numbers = [15, 20, 30];

  function suma(Numbers: number[]): number {
    let total = 0;
    Numbers.forEach(function (number) {
      total = total + number;
    });
    return total;
  }

  console.log(suma(Numbers));
}

{
  let Numbers = [5, 6, 10];

  function Multiplication(Numbers: number[]): number {
    let total = 1;
    Numbers.forEach(function (number) {
      total = total * number;
    });
    return total;
  }
  console.log(Multiplication(Numbers));
}

{
  let Numbers = [15, 3, 8, 22, 6];

  function smallNumber(Numbers: number[]): number {
    let minimo = Numbers[0];

    Numbers.forEach(function (number) {
      if (number < minimo) {
        minimo = number;
      }
    });
    return minimo;
  }

  console.log(smallNumber(Numbers));
}

//Numero maximo ejercicio.
{
  let numeros = [15, 3, 8, 22, 6];
  // resultado → 22

  function LargeNumber(numeros: number[]): number {
    let maximo = numeros[0];

    numeros.forEach(function (number) {
      if (number > maximo) {
        maximo = number;
      }
     
    })
    return maximo 
  }

  console.log(LargeNumber(numeros))
}


/*

Explicación ejercicio 3 de el numero máximo.
1. Creo un array con números
2. Creo una función que recibe ese array
3. Guardo el primer elemento como máximo (punto de partida)
4. forEach recorre cada número uno por uno
5. En cada vuelta pregunto: ¿este número es MAYOR que mi máximo?
      SÍ → actualizo el máximo
      NO → sigo al siguiente
6. Al final devuelvo el máximo encontrado
*/


/*

 Ejercicio 4
Crea una función que reciba un array de strings y devuelva todos los elementos en mayúsculas.*/
{
    let frutas = ["manzana", "pera", "naranja"]
// resultado → ["MANZANA", "PERA", "NARANJA"]

function Mayusculas (frutas : string[]) : string[] {

    let newArray = frutas.map(function(fruta){

        return fruta.toUpperCase()
    })
{

}
}

}

