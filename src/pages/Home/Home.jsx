import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import MovieCard from '../../components/MovieCard/MovieCard';
import { StyledContainer, StyledMoviesContainer } from './Home.style';
import Title from '../../components/Title/Title';

const apiKey = process.env.REACT_APP_API_KEY;
console.log('API KEY:', apiKey);

const Home = () => {
  const [releases, setReleases] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setReleases(data.results);
  };

  useEffect(() => {
    const getTopRatedUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
    getTopRatedMovies(getTopRatedUrl);
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <StyledContainer>
        <Title title={'Lançamentos'}/>
        <StyledMoviesContainer>
          {releases.length === 0 && <Title title={'Carregando...'} />}
          {releases.length > 0 && releases.slice(0, 18).map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </StyledMoviesContainer>
      </StyledContainer>
    </>
  );
};

export default Home



