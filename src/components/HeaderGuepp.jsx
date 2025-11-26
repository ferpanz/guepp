import React from 'react'
import Logo from '../assets/guepp/Logo-sin-fondo.png'

const HeaderGuepp = () => {
  return (
    <>
     <div className="container text-center pt-3 pb-5">
        <img
          src={Logo}
          alt="Logo GÜEPP!"
          className="img-fluid w-50 w-md-50" 
        />
      </div> 
    </>
  )
}

export default HeaderGuepp
