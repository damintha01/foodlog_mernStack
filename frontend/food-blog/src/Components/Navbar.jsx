import React from 'react'

const Navbar = () => {
  return (
    <>
    <header>
        <h2 style={{ background: 'linear-gradient(to right, #ff7e5f, #feb47b)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Food Blog</h2>
        <ul>
            <li style={{ color: '#ff7e5f' }}>Home</li>
            <li style={{ color: '#ff7e5f' }}>My Recipe</li>
            <li style={{ color: '#ff7e5f' }}>Favourites</li>
            <li style={{ color: '#ff7e5f' }}>Login</li>

        </ul>
    </header>
    </>
  )
}

export default Navbar