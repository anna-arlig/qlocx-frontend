import axios from 'axios'
import {userRoutes} from './user.routes'
 
const baseURL = 'http://localhost:3030/api'
 
export {
    baseURL,
}

export const axiosClient = axios.create({
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })

  export const setAuthHeader = (token) => {
    axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`
   }

  export const userApi = {
    ...userRoutes(axiosClient),
  }