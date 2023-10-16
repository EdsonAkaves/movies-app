import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi' 

import { StyledNavbar } from './Navbar.style'
import Genre from '../Genre/Genre'
import Button from '../Button/Button'
import useAuth from '../../hooks/useAuth'
import Input from '../Input/Input'

const Navbar = () => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()
  const { signout } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!search) return

    navigate(`/search?q=${search}`)
    setSearch("")
  }

    return (
      <StyledNavbar>
          <h2>
            <Link to="/home">Movies
            <BiCameraMovie />
            </Link>          
          </h2>
          <Genre />       

          <form onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder='Busque um filme'
                onChange={ (e) => setSearch(e.target.value)}
                value={search}
              />
            
              <button type='submit'>
                  <BiSearchAlt2 />
              </button>
          </form>
          <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        </Button>
        </StyledNavbar>
    )
}

export default Navbar