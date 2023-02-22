import jwt from 'jwt-decode'

export const parseToken = (token) => {
  const tokenId = jwt(token)
  const id = tokenId.id
  return id
}

