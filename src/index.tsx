import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Header from './components/Header/Header'
import GlobalStyle from './GlobalStyle'
import { loginAction } from './actions/login'
import reportWebVitals from './reportWebVitals'
import LoginView from './views/LoginView/LoginView'
import UserView from './views/UserView/UserView'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index path="/" element={<LoginView />} action={loginAction} />
      <Route path="user" element={<UserView />} />
    </>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
