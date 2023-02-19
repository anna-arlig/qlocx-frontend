import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { LoginContainer } from './styled'

const LoginView = () => {
  return (
    <LoginContainer>
      <Input type={'text'} placeholder={'Användarnamn'} />
      <Input type={'password'} placeholder={'Lösenord'} />
      <Button />
    </LoginContainer>
  )
}

export default LoginView
