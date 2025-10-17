import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import MovieCard from '../../components/MovieCard/MovieCard'
import { StyledMoviesContainer } from '../Home/Home.style'
import Title from '../../components/Title/Title'


const apiKey = process.env.REACT_APP_API_KEY
const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`


const MoviesByGenre = () => {
    const {genreId} = useParams()                  

    const [genreName, setGenreName] = useState('')
    const [movieListByGenre, setMovieListByGenre] = useState([])

    const getMovieList = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setMovieListByGenre(data.results)
    }

    const getGenreNameById = async (genreId) => {
        const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
        const data = await response.json()
        const genre = data.genres.find((genre) => genre.id === parseInt(genreId))
        return genre.name

      }

    useEffect(() => {
        getGenreNameById(genreId).then((name) => {
        setGenreName(name)
    })

    }, [genreId])      

 
    useEffect(() => {
        const apiUrlWithGenre = `${apiUrl}&with_genres=${genreId}`
        getMovieList(apiUrlWithGenre)        
          
      }, [genreId])    


  return (
    <div>
        <Navbar />
        <Title title={genreName || 'Gênero Desconhecido'} />
        <ul>
            <StyledMoviesContainer>
                {movieListByGenre.length === 0 && <Title title={'Carregando...'} />}
                {movieListByGenre.length > 0 && movieListByGenre.slice(0, 18).map((movie) =>  <MovieCard key={movie.id} movie={movie} />)}
            </StyledMoviesContainer>
        </ul>
    </div>
  )
}



export default MoviesByGenre