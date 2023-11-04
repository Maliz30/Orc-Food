import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/global.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LogIn from './pages/LogIn/index.jsx';
import Home from './pages/Home/index.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "", //Aqui define que o elemento "Home" vai aparecer na página principal, dentro de "Outlet"
        element: <Home />
      }
    ]
  },
  {
    path: "/login",
    element: <LogIn />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />,
)
