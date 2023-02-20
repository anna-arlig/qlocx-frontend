import { redirect } from "react-router-dom"
import axios from "axios"

axios.defaults.baseURL = 'http://localhost:3030/api/user'



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
    const userInfo = await axios.get('/find/1337')
    console.log(userInfo)
    return redirect('user')
  }
  catch { 
    console.log('403 - Unauthorized')
  }



  return redirect('/')


}