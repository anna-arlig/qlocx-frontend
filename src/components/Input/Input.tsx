import { InputContainer } from './styled'

type Props = {
  type: string
  placeholder: string
}

const Input = ({ type, placeholder }: Props) => {
  return <InputContainer type={type} placeholder={placeholder}></InputContainer>
}

export default Input
