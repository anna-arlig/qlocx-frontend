import { Form } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { LoginContainer } from './styled'

const LoginView = () => {
  return (
    <LoginContainer>
      <Form method="post" action="/user">
        <Input type={'text'} placeholder={'Användarnamn'} />
        <Input type={'password'} placeholder={'Lösenord'} />
        <Button />
      </Form>
    </LoginContainer>
  )
}

export default LoginView
