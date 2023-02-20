import { redirect } from "react-router-dom"
import axios from "axios"

axios.defaults.baseURL = 'http://localhost:3030/api/user'

let userInfo

export const loginAction = async ({request}) => {
  const data = await request.formData()
  const email = data.get('email')
  const password = data.get('password')

  try{
    const response = await axios
      .post("/auth/", {
        email,
        password,
      })
    const token = response.data.token
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    const foundUser = await axios.get('/find/1337')
    userInfo = foundUser.data
    userLoader()
    return redirect('user')
  }
  catch { 
    const error = 'Ogiltiga inloggningsuppgifter'
    console.log('403 - Unauthorized')
    return error

  }
}



export const userLoader = () => {
  return userInfo
}