import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function MainNavigation() {
  return (
    <>
    <Navbar />
    <Outlet /> {/* renders the child routes here */}
    <Footer />

    
    </>
  )
}

export default MainNavigation