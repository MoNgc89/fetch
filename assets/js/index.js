let contenido = document.getElementById('info-friki')
// let personajeAleatorio = Math.floor( (Math.random () * (9-1) ) + 1 );
// console.log(personajeAleatorio)

  fetch('https://swapi.co/api/people')
   .then(response => response.json())//transforma los datos a json
    .then(function(data)  {
      contenido.innerHTML = ``
      let personaje = data.results
      return personaje.map(function (persona){
        //no acceder a los parametros de la lista desde la lista si no desde el elemento de la lista
        contenido.innerHTML += `<tr>
          <td>${persona.name}</td>
         <td>${persona.gender}</td>
          <td>${persona.height}</td>
          <td>${persona.mass}</td>
        </tr>`
      })

   })
