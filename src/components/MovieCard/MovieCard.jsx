import { Link } from 'react-router-dom'
import {FaStar} from 'react-icons/fa'
import { StyledIcon, StyledImg, StyledTitle } from './MovieCard.style'



const imageUrl = process.env.REACT_APP_IMG


const MovieCard = ({ movie, showLink = true}) => {
  return (
    <div>
        <StyledImg src={imageUrl + movie.poster_path} alt={movie.title} />
        <StyledTitle>{movie.title}</StyledTitle>
        <p>
            <StyledIcon as={FaStar}/> {movie.vote_average.toFixed(1)}
        </p>
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  )
}

export default MovieCard