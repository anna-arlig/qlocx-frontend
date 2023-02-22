import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { loginAction, userLoader } from '../actions/login'
import LoginView from '../views/LoginView/LoginView'
import UserView from '../views/UserView/UserView'


export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index path="/" element={<LoginView />} action={loginAction} />
      <Route path="user" element={<UserView />} loader={userLoader} />
    </>
  )
)