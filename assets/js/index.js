let contenido = document.getElementById('info-friki')
// let personajeAleatorio = Math.floor( (Math.random () * (9-1) ) + 1 );
// console.log(personajeAleatorio)

  fetch('https://swapi.co/api/people')
   .then(response => response.json())//transforma los datos a json
    .then(function(data)  {
      let personaje = data.results
      return personaje.map(function (persona){
        contenido.innerHTML += `<tr>
          <td>${personaje.name}</td>
         <td>${personaje.gender}</td>
          <td>${personaje.height}</td>
          <td>${personaje.mass}</td>
        </tr>`
      })

   })
