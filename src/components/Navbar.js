import React from 'react'
import logo from '../utils/logo.png'; // Import your logo file
import './Navbar.css'
export default function 
() {
  return (
    <nav className='nav'>
        <img className='nav-logo' src="https://assets.materialup.com/uploads/0d595e7d-9dd9-447d-96ef-d6a35176a9c6/preview.gif" alt="Logo" />
    <ul>
        <li><a href="#what-we-do">What We Do</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#why-choose-us">Why Choose Us</a></li>
        <li><a href="#get-started">Get Started</a></li>
      </ul>
    </nav>
  )
}
