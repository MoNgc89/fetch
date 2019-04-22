function crearNodo(element){
  return document.createElement(element)
}

function append(parent, el){
  return parent.appendChild(el)
}

let personajeAleatorio = Math.floor( (Math.random () * (9-1) ) + 1 );

const ul = document.getElementById('authors')

fetch('https://randomuser.me/api/?results=10')
  .then((resp) => resp.json())
  .then(function (data){
    let authors = data.results
    return authors.map(function(author){
      let li = crearNodo('li')
          img = crearNodo('img')
          span = crearNodo('span')
      img.src = author.picture.medium
      span.innerHTML = `${authors.name.first} ${authors.name.last}`
      append(li, img)
      append(li, span)
      append(ul, li)
    })
  })
