import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { StyledGenre } from './Genre.style'



const apiKey = process.env.REACT_APP_API_KEY


const Genre = () => {
    const [genres, setGenres] = useState([])

    const getGenreMovie = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        setGenres(data.genres)
    }

    useEffect(() => {
        const getGenres = `https://api.themoviedb.org/3/genre/movie/list?${apiKey}` 
        

        getGenreMovie(getGenres)


    }, [])

    
  return (
    <StyledGenre>        
        <div>           
            <ul>               
                {genres.length === 0 && <p>Carregando...</p>}
                {genres.length > 0 && genres.map((genre) => (
                    <li key={genre.id}><Link to={`/genero/${genre.id}`}>{genre.name}</Link>               
                    </li>
))}
               
            </ul>
        </div>
    </StyledGenre>
  )
}



export default Genre



