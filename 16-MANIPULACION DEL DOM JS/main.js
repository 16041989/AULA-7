const titulo = document.querySelector('.titulo')
titulo.innerText = "Dom y Eventos desde JS"

 // console.log(titulo.innerText)

// titulo.innerText = "Hola mundo"

// titulo.textContent = "Hola mundo"

let alumnos =[
    {nombre: "Maria", edad: 20, curso: "Matematicas", promedio: 8.5},
    {nombre: "Juan", edad: 22, curso: "Fisica", promedio: 7.9},
    {nombre: "Lucia", edad: 21, curso: "Quimica", promedio: 9.0},
    {nombre: "Carlos", edad: 23, curso: "Biologia", promedio: 7.5},
    {nombre: "Ana", edad: 20, curso: "Historia", promedio: 8.8}
];


const tableBody = document.querySelector(".table-body")

const pintarHtml =(alumnos) => {

    let datos = ' '

    for(let i = 0; i < alumnos.length; i++){
       // console.log(alumnos[i])
        let alumno = alumnos[i]
    
        datos += `  <tr>
                        <td>${alumno.nombre}</td>
                        <td>${alumno.edad}</td>
                        <td>${alumno.curso}</td>
                        <td>${alumno.promedio}</td>
                    </tr>`
        // console.log(datos)
    }
    tableBody.innerHTML = datos

}

pintarHtml(alumnos)

const boton = document.querySelector(".boton")
boton.addEventListener('click', ()=> {
    pintarHtml(alumnos)
})


const productos = [
    {Nombre: "Monitor 27 pulgadas", precio: 500},
    {Nombre: "Televisor de 50 pulgadas", precio: 700},
    {Nombre: "Tablet", precio: 300},
    {Nombre: "Audifonos", precio: 200},
    {Nombre: "Teclado", precio: 50},
    {Nombre: "Celular", precio: 500},

]

const cards = document.querySelector(".container")
let producto = ""

for(let producto of productos){
    console.log(producto)

     producto = <div>

        <h3>${producto.nombre}</h3>
        <p>${producto.precio}</p>

     </div>
     cards.innerHTML += producto
}

