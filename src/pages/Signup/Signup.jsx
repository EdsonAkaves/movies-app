import {useState} from 'react'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import "./Signup.style"
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { StyledContainer, StyledContent, StyledLabel, StyledLabelError, StyledLabelSignin, StyledStrong } from './Signup.style'
import { BiCameraMovie } from 'react-icons/bi'

const Singup = () => {
  const [email, setEmail] = useState("")
  const [emailConf, setEmailConf] = useState("")
  const [senha, setSenha] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const { signup } = useAuth()

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos")
      return
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais")
      return
    }

    const res = signup(email, senha)

    if (res) {
      setError(res)
      return
    }

    alert("Usuário cadastrado com sucesso!")
    navigate("/")
  }


  return (
    <StyledContainer>
      <h2>
        <Link to="/home">Movies
        <BiCameraMovie />
        </Link>          
      </h2>
       <StyledLabel>Registre-se</StyledLabel>
        <StyledContent>
          <Input
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <Input
            type="email"
            placeholder="Confirme seu E-mail"
            value={emailConf}
            onChange={(e) => [setEmailConf(e.target.value), setError("")]}
          />       
          <Input
            type="password"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
          <StyledLabelError>{error}</StyledLabelError>
          <Button Text="Criar" onClick={handleSignup} />
          <StyledLabelSignin>
            Já tem conta?
            <StyledStrong>
              <Link to="/">&nbsp;Entre</Link>
            </StyledStrong>
          </StyledLabelSignin>
      </StyledContent>
     </StyledContainer>
  )
}

export default Singup