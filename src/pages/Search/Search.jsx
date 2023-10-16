import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../../components/MovieCard/MovieCard';
import Navbar from '../../components/Navbar/Navbar';
import { StyledMoviesContainer, StyledContainer } from '../Home/Home.style';
import Title from '../../components/Title/Title';

const searchURL = process.env.REACT_APP_SEARCH;
const apiKey = process.env.REACT_APP_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get('q');

  const getSearchMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;

    getSearchMovies(searchWithQueryURL);
  }, [query]);

  return (
    <>
      <Navbar />
      <StyledContainer>
        <Title title={'Resultados'} />
        <StyledMoviesContainer>
          {movies === undefined && <p>Filmes não encontrados</p>}
          {movies.length === 0 && <Title title={'Carregando...'} />}
          {movies.length > 0 && movies.slice(0, 18).map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </StyledMoviesContainer>
      </StyledContainer>
    </>
  );
};

export default Search;
