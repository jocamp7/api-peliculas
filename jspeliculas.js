const API_URL = 'https://api.themoviedb.org/3/search/movie?query=' ///poner la url de las peliculas 
const apiKey='24f48324f7f2a6baa5347579cd716569'
const apiToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGY0ODMyNGY3ZjJhNmJhYTUzNDc1NzljZDcxNjU2OSIsInN1YiI6IjY2NGUyNzkwMzdmZDM0OWE5OGZkMTRjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rxKHqram9pKpGJufk7aMifviHwQllBHSniuSkLhZBvk'

const moviesContainer = document.querySelector('#movie')
const formSearch = document.getElementById('form')
const searchInput = document.getElementById('searchId')



    const showMovies = (movie) => {

      moviesContainer.innerHTML = ''
      
      movie.forEach((movies_container) => {

        moviesContainer.innerHTML += `
        <div>
         <img src="https://image.tmdb.org/t/p/w220_and_h330_face/${movies_container.poster_path}" alt="${movies_container.title}">

          <div>
            <h1>${movies_container.title}</h1>
            <p>${movies_container.overview}</p>
          </div>
        </div>
        `
        })

     }




    //Funcion para enlazar la api con nuestra llame de acceso a las pelis
     const searchMovies = async (event) => {

        event.preventDefault()
        try {
          const search = searchInput.value
          const res = await axios.get(`${API_URL}${search}&api_key=${apiKey}`)
          const movie = res.data.results
          showMovies(movie)

        } catch (error) {
         console.error(error)
        }
    }
      

formSearch.addEventListener('submit', searchMovies)
        

