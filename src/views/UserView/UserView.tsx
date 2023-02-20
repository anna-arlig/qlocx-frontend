import { useLoaderData } from 'react-router-dom'
import { Body, WelcomeText } from '../../constants/typography'
import { UserContainer } from './styled'

type User = {
  email: string
  name: string
  phone: string
}

const UserView = () => {
  const user = useLoaderData() as User

  return (
    <UserContainer>
      <WelcomeText>Välkommen, {user.name}!</WelcomeText>
      <Body>Epost: {user.email}</Body>
      <Body>Telefonnummer: {user.phone}</Body>
    </UserContainer>
  )
}

export default UserView
