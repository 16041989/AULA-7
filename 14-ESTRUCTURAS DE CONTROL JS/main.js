// &&  ||  ! 

let booleana = true;
console.log(!booleana)

// if else

const usuario = "admin"
const password = "1234"

const usuarioIngresado = prompt("ingrese el usuario")
const passwordIngresada = prompt("ingrese la contraseña")

//console.log(usuarioIngresado, passwordIngresada)

if(usuarioIngresado === usuario && passwordIngresada === password){
    console.log("Login exitoso, !Bienvenido!") // true
}else if(usuarioIngresado !== usuario && passwordIngresada === password){
    console.log("Usuario incorrecto")
}else if(usuarioIngresado === usuario && passwordIngresada !== password){
    console.log("Contraseña incorrecta")
}else{
    console.log("Usuario y contraseña incorrectos")
} 


///////////////////////////////////


let edad1 = 18
let edad2 = 65
let ejemplo = (edad1 < 18 || edad2 >= 65)//true
const tieneUnDescuento = true

if( (edad1 < 18 || edad2 >=65) && tieneUnDescuento){
    console.log("tiene un descuento")
}

console.log(ejemplo)

let ejemplo2 = 10 < 30
console.log(ejemplo2)