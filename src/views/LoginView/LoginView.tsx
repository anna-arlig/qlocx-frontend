import { Form } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { LoginContainer } from './styled'
import { useActionData } from 'react-router-dom'
import { ErrorText } from '../../constants/typography'

const LoginView = () => {
  const error = useActionData() as string

  return (
    <LoginContainer>
      {error && <ErrorText>{error}</ErrorText>}
      <Form method="post" action="/" style={{ display: 'Flex', flexDirection: 'column' }}>
        <Input type={'email'} placeholder={'E-post'} name={'email'} />
        <Input type={'password'} placeholder={'Lösenord'} name={'password'} />
        <Button />
      </Form>
    </LoginContainer>
  )
}

export default LoginView
