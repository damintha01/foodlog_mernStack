import React from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/home'
import MainNavigation from './Components/MainNavigation'
import axios from 'axios'


const getallRecipes=async()=>{
  let allRecipes=[]
  await axios.get('http://localhost:5000/recipe').then((res)=>{
    allRecipes=res.data
  }).catch((err)=>{
    console.log(err)
  })
  return allRecipes
}




const router=createBrowserRouter([
  {path:"/",element:<MainNavigation/>,children:[
    {path:"/",element:<Home/>,loader:getallRecipes}
  ]},
])

export default function App() {
  return (
   <>
   <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
   <h1></h1>
   </>
  )
}
