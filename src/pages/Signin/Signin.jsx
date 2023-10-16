import { useState } from 'react'
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import "./Signin.style"
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { StyledContainer, StyledContent, StyledLabelError, StyledLabelSignup, StyledStrong } from './Signin.style'
import { BiCameraMovie } from 'react-icons/bi'

const Singin = () => {
  const { signin } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [error, setError] = useState("")

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos")
      return
    }

    const res = signin(email, senha)

    if (res) {
      setError(res)
      return
    }

    navigate("/home")
  }

  return (
    <StyledContainer>
      <h2>
        <Link to="/home">Movies
        <BiCameraMovie />
        </Link>          
      </h2>
        
        <StyledContent>
          <Input
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <Input
            type="password"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
          <StyledLabelError>{error}</StyledLabelError>
          <Button Text="Entrar" onClick={handleLogin} />
          <StyledLabelSignup>
            Não tem conta?
            <StyledStrong>
              <Link to="/signup">&nbsp;Registre-se</Link>
            </StyledStrong>
          </StyledLabelSignup>
        </StyledContent>
    </StyledContainer>
  )
}

export default Singin