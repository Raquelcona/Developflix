import peliculas from './peliculas.js'

/*console.log(peliculas)

const peliculas1 = import('./peliculas.json');

const contenedoresGenero = document.querySelectorAll('.genero');

const urlBaseImagenes = 'https://image.tmdb.org/t/p/w200';

function filtrarPeliculasPorGenero(idGenero) {
  const peliculasFiltradas = peliculas.filter(pelicula => pelicula.genre_ids.includes(idGenero));
  return peliculasFiltradas;
}

function mostrarPeliculas(peliculas, contenedor) {
  contenedor.innerHTML = '';

  peliculas.forEach(pelicula => {
    const elementoPelicula = document.createElement('div');
    elementoPelicula.classList.add('pelicula');

    const imagenPelicula = document.createElement('img');
    imagenPelicula.src = `${urlBaseImagenes}${pelicula.poster_path}`;

    const tituloPelicula = document.createElement('h3');
    tituloPelicula.textContent = pelicula.title;

    elementoPelicula.appendChild(imagenPelicula);
    elementoPelicula.appendChild(tituloPelicula);

    contenedor.appendChild(elementoPelicula);
  });
}

contenedoresGenero.forEach(contenedor => {
  const idGenero = parseInt(contenedor.id.split('-')[1]);

  const peliculasFiltradas = filtrarPeliculasPorGenero(idGenero);

  mostrarPeliculas(peliculasFiltradas, contenedor);
});
*/

const accion = [];
const thriller = [];
const aventura = [];

peliculas.forEach(pelicula => {
  pelicula.genre_ids.forEach (genreid => {
    if (genreid === 28) accion.push (pelicula);
    if (genreid === 53) thriller.push (pelicula);
    if (genreid === 12) aventura.push (pelicula);
  })
})

const divAccion = document.getElementById (`genero-28`); 

accion.forEach(pelicula => {
    divAccion.innerHTML += `<div>
      <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt="${pelicula.title}">
      <h3>${pelicula.title}</h3>
    </div>`
  })


const divThriller = document.getElementById (`genero-53`);
  thriller.forEach(pelicula => {
    divThriller.innerHTML += `<div>
      <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt="${pelicula.title}">
      <h3>${pelicula.title}</h3>
    </div>`
  })


const divAventura = document.getElementById (`genero-12`);
  aventura.forEach(pelicula => {
    divAventura.innerHTML += `<div>
      <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt="${pelicula.title}">
      <h3>${pelicula.title}</h3>
    </div>`
  })
