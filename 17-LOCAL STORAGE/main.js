const form = document.querySelector('form')
const nombreInput = document.querySelector('.nombre')
const emailInput = document.querySelector('.email')

const btn = document.querySelector('.boton')

const tabla = document.querySelector('.tabla-usuarios')

// let arrayUsuarios = []

form.addEventListener('submit', function(event) {
        
        event.preventDefault()   

        const usuariosObjeto = {
                nombre: nombreInput.value,
                email: emailInput.value
        }
        // console.log(usuariosObjeto)

       // arrayUsuarios.push(usuariosObjeto)
       // console.log(arrayUsuarios)

       guardarUsuarios(usuariosObjeto)
})

function mostrarUsuarios(usuariosObjeto){

        tabla.innerHTML += `<tr>`
}

function guardarUsuarios(usuariosObjeto){

        localStorage.setItem("usuarios", JSON.stringify(usuariosObjeto))
}