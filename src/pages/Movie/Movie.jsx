import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BsHourglassSplit, BsFillFileEarmarkTextFill } from 'react-icons/bs';
import MovieCard from '../../components/MovieCard/MovieCard';
import Navbar from '../../components/Navbar/Navbar';
import {
  PageContainer,
  Icon,
  Tagline,
  InfoContainer,
  InfoTitle,
  DescriptionContainer,
  DescriptionText,
} from './Movie.style'; // Importe os componentes estilizados do arquivo Movie.style.jsx

const moviesURL = process.env.REACT_APP_API;
const apiKey = process.env.REACT_APP_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, [id]);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <PageContainer>
        {movie && (
          <>
            <MovieCard movie={movie} showLink={false} />
            <Tagline>{movie.tagline}</Tagline>
            <InfoContainer>
              <InfoTitle>
                <Icon as={BsHourglassSplit} /> Duração:
              </InfoTitle>
              <p>{movie.runtime} minutos</p>
            </InfoContainer>
            <DescriptionContainer>
              <InfoTitle as="h3">
                <Icon as={BsFillFileEarmarkTextFill} /> Descrição:
              </InfoTitle>
              <DescriptionText>{movie.overview}</DescriptionText>
            </DescriptionContainer>
          </>
        )}
      </PageContainer>
    </>
  );
};

export default Movie;
