import { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Singin from '../pages/Signin/Signin'
import Singup from '../pages/Signup/Signup'
import useAuth from '../hooks/useAuth'
import Movie from '../pages/Movie/Movie'
import Search from '../pages/Search/Search'
import MoviesByGenre from '../pages/MoviesByGenre/MoviesByGenre'

const Private = ({ Item }) => {
    const { signed } = useAuth()

    return signed > 0 ? <Item /> : <Singin />
}

const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Fragment>
            <Routes>
                <Route exact path="/home" element={<Private Item={Home} />} />
                <Route path="/" element={<Singin />} />
                <Route path="/genero/:genreId" element={<MoviesByGenre />} />
                <Route exact path="/signup" element={<Singup />} />
                <Route path="movie/:id" element={<Movie />} />
                <Route path="search" element={<Search />} />                
                <Route path='*' element={<Singin />} />
            </Routes>
        </Fragment>
    </BrowserRouter>
  )
}

export default RoutesApp