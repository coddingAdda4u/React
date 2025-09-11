
import React, { useState } from 'react';
import './Navbar.css'



const Navbar = () => {

  const [activeLink, setActiveLink] = useState('Home');

  const handleNavLinks = () => {
    const navLinks = document.querySelector('.links')
    const fixed = document.querySelector('.fixed-container')
    navLinks.classList.toggle('active')
    fixed.classList.toggle('active')
    document.body.classList.toggle('active')
  }

  const links = [
    "Home",
    "Gallery",
    "Bookings",
    "Bussiness",
    "Updates",
    "About"
  ]

  return (
    <>
      <header className='header'>
        <nav className='flex items-center justify-between h-full w-full'>
          <a href="#">
            <img src="Logo.svg" alt="Logo" className='logo' title='Logo' />
          </a>
          <button className='menu-btn' title='Menu' onClick={handleNavLinks}>
            <img src='menu.png' alt="Menu" />
          </button>
          <div className='flex items-center links'>
            <button className='menu-btn absolute right-4 top-7' title='Close' onClick={handleNavLinks}>
              <img src='close.png' alt="Close" />
            </button>
            <ul className='flex gap-[1.4rem]'>
              {links.map((link, idx) => (
                <li className={`nav-links ${activeLink === link ? 'active' : null}`}
                  key={idx} onClick={() => {
                  setActiveLink(link)
                }} title={link}>
                  <a href="#">
                    <h3>
                      {link}
                    </h3>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a href="#" className="login-btn hover:scale-[1.02] hover:shadow-xl transition-all" title='Contact'>
            Contact
          </a>

        </nav>
        <div className="fixed-container" onClick={handleNavLinks}></div>
      </header>
    </>
  )
}

export default Navbar
