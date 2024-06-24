console.log("------- ARRAYS-------")

console.log("--------HOMOGENEOS------")

let frutas = ["manzana", "pera", "banana"]

// INDICE         1         2        3      

console.log("la longitud de frutas es: ", frutas.length)
console.log("el ultimo elemento es: ", frutas[2])

console.log("-----HETEROGENEOS-------")

let multipleInfo = [true, 20, "Hola", [1,2,3], {a:1, b:2}]

console.log("la longitud de multipleInfo es: ", multipleInfo.length)
console.log("el valor del tercer elemento es: ", multipleInfo[3][1])

console.log("-------METODOS DE LOS ARRAYS")

let nombres = ["Pedro", "Juan", "Maria", "Jose"]

console.log(nombres)

console.log("------PUSH()------")

nombres.push("Leo")
console.log("el nombre agregado es: ", nombres)
console.log("la longitud de nombres es:", nombres.length)

console.log("-----POP()---------")

let deportes = ["futbol", "tenis", "natacion"]
let deporteEliminado = deportes.pop()
console.log("se elimino el ultimo deporte: ", deporteEliminado)
console.log(deportes)

console.log("-----SHIFT()------")

let colores = ["rojo", "verde", "azul"]
colores.shift()
console.log("el primer elemento eliminado es: ", colores)

console.log("-------SPLICE()-------")

let letras = ["a", "b", "c", "d", "e", "f", "g"]

let resultado = letras.splice(2,2)  // elimina a y b 
console.log("las letras eliminadas son: ", letras)
console.log("resultado")

let resultado2 = letras.splice(2,0,"1")
console.log("el resultado de la inserccion es: ", letras)

letras.splice(2,3,"2")
console.log("el resultado de la inserccion es: ", letras)

console.log("-----JOIN()-----")

let flores =["rosa", "lirio", "orquidea"]
let frases = letras.join(" - ")
console.log("devuelve una cadena ", frases)

console.log("-----SLICE()---------")

let verduras = ["lechuga","papa","tomate", "zanahoria"]
let result = verduras.slice(1,3)
console.log("las verduras selccionadas son: ", result)

console.log("--------REVERSE()--------")

verduras.reverse()
console.log(verduras)

console.log("------CONCAT()--------")

let comidas = ["arroz", "pollo", "pescado"]
let bebidas = ["agua", "cafe", "te"]
let unidos = comidas.concat(bebidas)
console.log("los elementos unidos son ", unidos)

console.log("------SORT()------")

let desordenados = [3, 2, 1, 5, 4]
desordenados.sort()
console.log("los elementos desordenados son: ", desordenados)



