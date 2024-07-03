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


const tableBody = document.querySelector(".tableBody")

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


