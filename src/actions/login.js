import { redirect } from "react-router-dom"
import { userApi } from "../utils/api"
import { setAuthHeader} from "../utils/api"
import { parseToken } from '../utils/token'

let userInfo

export const loginAction = async ({request}) => {
  const data = await request.formData()
  const email = data.get('email')
  const password = data.get('password')

  try{
    const response = await userApi.auth({
      email,
      password,
    })
    setAuthHeader(response.data.token)
    const tokenId = parseToken(response.data.token)
    const foundUser = await userApi.getUserById(tokenId)
    userInfo = foundUser.data
    return redirect('user')
  }
  
  catch(error) { 
    console.log(error)
    return error.response.data
  }
}

export const userLoader = () => {
  return userInfo
}
