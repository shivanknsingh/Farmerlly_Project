import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import Login from './components/Login.jsx'
import Signin from './components/Signin.jsx'

const router=createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      {
        path: '/',
        element: <Home />, 
      },
      {
        path : '/About',
        element : <About/>
      },
      {
        path : '/Services',
        element : <Services/>
      },
      {
        path : '/Contact',
        element : <Contact/>
      },
      {
        path : '/Login',
        element : <Login/>
      },
      {
        path : '/Login/Signin',
        element : <Signin/>
      }
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
