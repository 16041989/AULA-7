const form = document.querySelector('form')
const nombreInput = document.querySelector('.nombre')
const emailInput = document.querySelector('.email')

const btn = document.querySelector('.boton')

const tabla = document.querySelector('.tabla-usuarios')

// let arrayUsuarios = []

cargarYMostrarUsuarios()

form.addEventListener('submit', function(event) {
        
        event.preventDefault()   

        const usuariosObjeto = {
                nombre: nombreInput.value,
                email: emailInput.value
        }
        // console.log(usuariosObjeto)

       // arrayUsuarios.push(usuariosObjeto)
       // console.log(arrayUsuarios)

       mostrarUsuarios(usuariosObjeto)

       guardarUsuarios(usuariosObjeto)

       form.reset()

})

function mostrarUsuarios(usuariosObjeto){

        tabla.innerHTML += `<tr>
                                 <td>${usuariosObjeto.nombre}</td>
                                 <td>${usuariosObjeto.email}</td>
                          </tr>`
}

function guardarUsuarios(usuariosObjeto){
        let usuarios = JSON.parse(localStorage.getItem("usuarios"))
        usuarios.push(usuariosObjeto)

        localStorage.setItem("usuarios", JSON.stringify(usuarios))
}

function cargarYMostrarUsuarios(){
        if(localStorage.getItem("usuarios") === null){
                localStorage.setItem('usuarios', JSON.stringify([]))
        }

        let usuarios = JSON.parse(localStorage.getItem("usuarios"))
        for(let usuario of usuarios){
                mostrarUsuarios(usuario)
        }
}