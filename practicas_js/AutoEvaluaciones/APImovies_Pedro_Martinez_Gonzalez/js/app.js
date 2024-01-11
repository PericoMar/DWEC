const apiKey = "4fa37e58b6614d137adc5a2de6dc7fc8";
const totalPeliculas = 100; // Cantidad total de películas que deseas obtener
const peliculasPorPagina = 20; // Cantidad de películas por página en TMDb
const contenedor = document.getElementById("contenedor");
const btn = document.getElementById("sig");

async function obtenerPeliculasPopulares() {
  try {
    let peliculas = [];
    let pagina = 1;

    // Realizar solicitudes hasta alcanzar el total deseado de películas
    while (peliculas.length < totalPeliculas) {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${pagina}`);

      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }

      const data = await response.json();
      const peliculasObtenidas = data.results;

      // Agregar las películas de la página actual al listado
      peliculas = peliculas.concat(peliculasObtenidas);

      // Incrementar el número de página para la próxima solicitud
      pagina++;
    }

    // Obtener las primeras 100 películas del listado
    const peliculasMasPopulares = peliculas.slice(0, totalPeliculas);

    // Primero las ordeno por nota:
    peliculasMasPopulares.sort((a, b) => {
      return b.vote_average - a.vote_average;
    })
    
    desplegarCuadroPeliculas(peliculasMasPopulares, 0);
    let page = 0;
    btn.addEventListener("click", () => {
      contenedor.innerHTML = '';
      page++;
      desplegarCuadroPeliculas(peliculasMasPopulares, page % 5);
    })

  } catch (error) {
    // Manejar errores
    console.error('Error:', error);
  }
}

//Función que recorre cada pagina insertando el HTML con su contenido:
function desplegarCuadroPeliculas(peliculasMasPopulares, page) {
  for (let i = page * 20; i < (page + 1) * 20; i++) {
    desplegarPelicula(peliculasMasPopulares[i]);
  }
}

//Función inserta HTML más contenido:
function desplegarPelicula(pelicula) {
  let divPelicula = document.createElement("div");
  divPelicula.classList.add("pelicula");
  contenedor.appendChild(divPelicula);
  let portada = document.createElement("img");
  portada.classList.add("poster");
  portada.src = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`;
  divPelicula.appendChild(portada);
  let titulo = document.createElement("h4");
  titulo.classList.add("titulo");
  titulo.innerHTML = pelicula.title;
  divPelicula.appendChild(titulo);
}

obtenerPeliculasPopulares();



