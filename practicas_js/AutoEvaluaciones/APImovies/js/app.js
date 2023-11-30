const apiKey = "4fa37e58b6614d137adc5a2de6dc7fc8";
const totalPeliculas = 100; // Cantidad total de películas que deseas obtener
const peliculasPorPagina = 20; // Cantidad de películas por página en TMDb

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
    // Hacer algo con las películas obtenidas
    console.log(peliculasMasPopulares);
    
  } catch (error) {
    // Manejar errores
    console.error('Error:', error);
  }
}

obtenerPeliculasPopulares();



