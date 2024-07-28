const container = document.querySelector('.container')

const URL = 'https://66631a8c62966e20ef0b668a.mockapi.io/Productos'

fetch(URL)
     .then(res => res.json())
     .then( data => {
        let datos = ' '
        data.forEach(producto => {
            datos += `
                       <h3>${producto.name}</h3>
                       <p>${producto.descripcion}</p>
                       <p>${producto.precio}</p>
                       <img src="${producto.avatar}" alt="${producto.name}">
                       `
        })

        container.innerHTML = datos
     })

     .catch(err => console.log(err))