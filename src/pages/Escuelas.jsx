import React, { useState } from 'react'
import Img1 from '../assets/inspeccionrio3cala1/logo.png'
import Img2 from '../assets/inspeccionrio3cala1/logo.png'
import Img3 from '../assets/inspeccionrio3cala1/logo.png'

import Carrusel from '../subcomponents/Carrusel'
import CardAlias from '../components/CardAlias'
import BtnRedes from '../components/BtnRedes'
import Descripcion from '../components/Descripcion'
import Footer from '../components/Footer'
import BtnEscuelas from '../components/BtnEscuelas'

const datos={
  negocio:"Inspección Secundaria Orientadas Región 3B-5B",
  descripcion:"Acceso a las carpetas de One Drive de cada escuela secundaria orientada del departamento Tercero Arriba y Calamuchita Sur.",
  nombre:"",
  alias:"",
  cvu:""  
}

const redes={
  instagram:"https://www.instagram.com/inspeccionsecundaria.rio3cala1/",
  telefono:"tel:+543571410212",
  correo:"mailto:inspeccionsecorientada.region3b-5b@me.cba.gov.ar",
  escuelas: "/escuelas",
  ubicacion:"https://maps.app.goo.gl/Bkhkt4t3gw5LXaUn9"
}

const colors={
  fondo:"#eeecebff",
  botones:"#0e3c63",
  cardbody:"#d1c5c0ff",
  text:"#0e3c63"
}

const loginData = [
  { username: "inspeccion", password: "secundaria" },
  { username: "ipem.288", password: "secundaria" }
]

const Escuelas = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    const user = loginData.find(u => u.username === username && u.password === password)
    if (user) {
      setIsLoggedIn(true)
      setError('')
    } else {
      setError('Usuario o contraseña incorrectos')
    }
  }

  if (!isLoggedIn) {
    return (
      <div className='p-3 mt-5' style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="modal-content" style={{ width: '100%', maxWidth: '420px' }}>
          <div className="modal-header">
            <h5 className="modal-title text-black mb-3">Iniciar Sesión</h5>
          </div>
          <div className="modal-body">
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label text-black">Escuela</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label text-black">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <div className="alert alert-danger">{error}</div>}
              <button type="submit" className="btn w-100" style={{ backgroundColor: colors.botones, borderColor: colors.botones, color: '#fff' }}>Iniciar Sesión</button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: colors.fondo, minHeight: '100vh' }}>
      <div className="container-fluid p-5 rounded-3">
        <Carrusel images={[Img1, Img2, Img3]} />    
      </div>
      <Descripcion datos={datos} colors={colors} />
      <BtnEscuelas />
      <Footer />
    </div>
  )
}

export default Escuelas