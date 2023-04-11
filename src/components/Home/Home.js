import React from 'react'
import './Home.css'

function Home() {
    
  return (
    <nav className='navbar'>
        <div className='navbar-logo'>
            <img src='https://upload.wikimedia.org/wikipedia/en/e/e8/Peaky_Blinders_titlecard.jpg' alt='Logo'/>
        </div>
        <div className='nav-logo'>
            <h2> Welcome Peaky Blinder </h2>
            {/* <p> Peak into the world as a Peaky Blinder</p> */}
        </div>
    </nav>
  )
}

export default Home