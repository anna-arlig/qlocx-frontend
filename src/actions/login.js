import { redirect } from "react-router-dom"

export const loginAction = async ({request}) => {

  const data = await request.formData()

  const formData = {
    email: data.get('email'), 
    password: data.get('password')
  }



  return redirect('user')


}