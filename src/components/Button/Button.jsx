import { StyledButton } from "./Button.style"

const Button = ( { Text, onClick, Type = "button" } ) => {
  return (
    <StyledButton type={Type} onClick={onClick}>        
        {Text}
    </StyledButton>
  )
}

export default Button