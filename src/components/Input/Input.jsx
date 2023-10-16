import { StyledInput } from "./Input.style"

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  )
}

export default Input

