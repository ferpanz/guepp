import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/guepp/Logo-sin-fondo.png'


const Footer = () => {
  return (
    <footer className="bottom-0 start-0 w-auto pb-4">
      <Link to="/guepp-card" aria-label="Ir a Guepp" target='_blank' style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="container text-center rounded-3">
          <hr className="w-100" />
          <img className="img-fluid" src={logo} alt="Guepp" width={80} height={80} />
        </div>
      </Link>
    </footer>
  )
}

export default Footer
