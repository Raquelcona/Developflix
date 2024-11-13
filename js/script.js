import peliculas from './peliculas.js'

console.log(peliculas)

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