// DECLARATIVAS

function saludar(){

    console.log("hola martin")

}

saludar()

// EXPRESION

const sumar = function(a, b){
    return a + b 
}
console.log(sumar(2, 3))

// PARAMETRO - DIFERENTE ARGUMENTO

// PARAMETRO ES LO QUE RECIBE LA FUNCION POR EJEMPLO a Y b, VARIABLES
// FUNCTION SUMAR (a, b)

// ARGUMENTO: VALORES REALES QUE LE PASAMOS A LA FUNCION EJEMPLO 2 Y 3
// SUMAR (2, 3)


////// ALCANCE DE UNA VARIABLE EN NUESTRO CODIGO

const varibleGlobal = "soy una variable global"

// console.log('estoy fuera de la funcion, ', variableGlobal)

function mostrarVariable(){
       
    const variableLocal = 'Soy una variable local'
    console.log("estoy dentro de la funcion, ", variableLocal)

   // console.log("Soy la variable global que esta dentro de la funcion, ", variableGlobal)

}

  mostrarVariable()
// console.log("estoy fuera de la funcion, ", variableGlobal)


// FUNCION FLECHA

//MODO 1: SIN PARENTESIS ES APLICABLE A CUANDO USAMOS MAS DE UN PARAMETRO

const multiplicar = a => a * a
console.log(multiplicar(2))

//MODO 2: CON PARENTESIS ES APLICABLE A CUANDO USAMOS MAS DE UN PARAMETRO

const multiplicar2 = (a, b) => a * b
console.log(multiplicar2(2, 3))

//MODO 3: PARA DEVOLVER UN VALOR

const saludar2 = nombre => console.log("hola", nombre)
saludar2("Martin")


// CALLBACK
// DEFINIMOS NUESTRA FUNCION CALLBACK

function mostrarResultado(resultado){
    console.log("Resultado: ", resultado)
}

// DEFINIMOS NUESTRA FUNCION 

function procesarDatos(datos, callback){
    // PROCESAMOS LOS DATOS
    const resultado = datos.map(dato => dato *2)
    //LLAMAMOS NUESTRA FUNCION CALLBACK
    callback(resultado)
}

// ARRAY DE DATOS

const datos = [1, 2, 3, 4, 5]

procesarDatos(datos, mostrarResultado)