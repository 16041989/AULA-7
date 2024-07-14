// CALLBACK ES UNA FUNCION QUE SE PASA COMO ARGUMENTO A OTRA FUNCION

// function mayusculas(palabra, callback) {
   // let palabraRetornada = callback(palabra)

    // console.log(palabraRetornada)
// }

// function manipularPalabra(palabra) {

    // return palabra.toUpperCase()
// }

// mayusculas("hola", manipularPalabra)

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//    i        0  1  2  3  4  5  6  7  8   9

// for(let i = 0; i < numeros.length; i++) {
   // console.log(numeros[i])
// }

// let sumar = numeros.forEach(numero => numero + 1)
// console.log(sumar)

// MAP

const cuadrados = numeros.map(num => num * num)
console.log(cuadrados)

// FILTER

const pares = numeros.filter(num => num % 2 === 0)
console.log(pares)

// REDUCE
// ACUMULADOR = 0 + VALORACTUAL = 1

const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0)
console.log(suma)

///////OBJETOS

const persona = {
    nombre:"Juan",
    apellido:"Perez",
    edad:20
}

console.log(Object.keys(persona))

console.log(Object.values(persona))

console.log(Object.entries(persona))

const obj1 = { a:1, b:2 }
const obj2 = { c:3, d:4 }

console.log(Object.assign(obj1, obj2))