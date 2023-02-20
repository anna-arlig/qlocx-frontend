import { InputContainer } from './styled'

type Props = {
  type: string
  placeholder: string
  name: string
}

const Input = ({ type, placeholder, name }: Props) => {
  return <InputContainer type={type} placeholder={placeholder} name={name}></InputContainer>
}

export default Input
