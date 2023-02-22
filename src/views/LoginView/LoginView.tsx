import { Form } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { LoginContainer, StyledForm } from './styled'
import { useActionData } from 'react-router-dom'
import { ErrorText } from '../../constants/typography'

const LoginView = () => {
  const error = useActionData() as string

  return (
    <LoginContainer>
      {error && <ErrorText>{error}</ErrorText>}
      <StyledForm method="post" action="/">
        <Input type={'email'} placeholder={'E-post'} name={'email'} />
        <Input type={'password'} placeholder={'Lösenord'} name={'password'} />
        <Button />
      </StyledForm>
    </LoginContainer>
  )
}

export default LoginView
