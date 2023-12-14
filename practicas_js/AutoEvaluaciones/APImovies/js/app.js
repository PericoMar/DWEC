const apiKey = "4fa37e58b6614d137adc5a2de6dc7fc8";
const totalPeliculas = 100; // Cantidad total de películas que deseas obtener
const peliculasPorPagina = 20; // Cantidad de películas por página en TMDb
const contenedor = document.getElementById("contenedor");

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
    peliculasMasPopulares.sort((a,b)=>{
        return b.vote_average - a.vote_average;
    })
    console.log(peliculasMasPopulares);
    desplegarCuadroPeliculas(peliculasMasPopulares);


  } catch (error) {
    // Manejar errores
    console.error('Error:', error);
  }
}

function desplegarCuadroPeliculas(peliculasMasPopulares){
    for(let i = 20; i < 40 ; i++){
        desplegarPelicula(peliculasMasPopulares[i]);
    }
}

function desplegarPelicula(pelicula){
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

