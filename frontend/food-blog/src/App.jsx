import React from 'react'
import './App.css'
import {BrowserRouter as createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/home'

const router=createBrowserRouter([
  {path:"/",element:<Home/>}
])

export default function App() {
  return (
   <>
   <RouterProvider router={router}/>
   </>
  )
}
