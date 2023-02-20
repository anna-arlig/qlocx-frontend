import { Form } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { LoginContainer } from './styled'

const LoginView = () => {
  return (
    <LoginContainer>
      <Form method="post" action="/" style={{ display: 'Flex', flexDirection: 'column' }}>
        <Input type={'email'} placeholder={'E-post'} name={'email'} />
        <Input type={'password'} placeholder={'Lösenord'} name={'password'} />
        <Button />
      </Form>
    </LoginContainer>
  )
}

export default LoginView
