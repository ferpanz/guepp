import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/guepp/Logo-sin-fondo.png'


const Footer = () => {
  return (
    <footer className="position-fixed bottom-0 start-0 w-100 mb-5">
      <Link to="/" aria-label="Ir a Guepp" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="container text-center rounded-3">
          <hr className="w-100" />
          <img className="img-fluid w-25" src={logo} alt="Guepp" />
        </div>
      </Link>
    </footer>
  )
}

export default Footer
