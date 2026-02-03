import React from 'react'
import Img1 from '../assets/guepp-card/logo.png'
import Img2 from '../assets/guepp-card/foto1.png'
import Img3 from '../assets/guepp-card/foto2.png'

import Carrusel from '../subcomponents/Carrusel'
import CardAlias from '../components/CardAlias'
import BtnRedes from '../components/BtnRedes'
import Descripcion from '../components/Descripcion'
import Footer from '../components/Footer'
import Clientes from '../components/Clientes'

const datos={
  negocio:"GÜEPP!",
  descripcion:"Desarrollo web para emprendedoras y emprendedores. Páginas web profesionales, tiendas online, blogs y más. ¡Impulsá tu negocio con una presencia digital impactante!",
  nombre:"Fernán Barberón",
  alias:"ferpanz.mp",
  cvu:"0000003100089540732550"  
}

const redes={
  instagram:"https://www.instagram.com/guepp_desarrolloweb/",
  tiktok:"https://www.tiktok.com/@fernanbarberon",
  whatsapp:"https://wa.me/5493571458866",
  correo:"mailto:ferpanz@gmail.com",
  web:"https://guepp.com.ar/",
  ubicacion:"https://maps.app.goo.gl/wUhW8Tu1s4cKK6Hu6",
  calificar:"https://g.page/r/Cel3E5iW3sFKEAI/review"
 
}

const colors={
  fondo:"#eeecebff",
  botones:"#ff6111",
  cardbody:"#d1c5c0ff",
  text:"#7e563cff"
}

const GueppCard = () => {
  return (
    <div style={{ backgroundColor: colors.fondo, minHeight: '100vh' }}>
      <div className="container-fluid p-5 rounded-3">
        <Carrusel images={[Img1, Img2, Img3]} />    
      </div>
      <Descripcion datos={datos} colors={colors} />
      
      <BtnRedes redes={redes} color={colors.botones} />
      <Clientes />
      <CardAlias datos={datos} colors={colors} />
      <Footer />
    </div>
  )
}

export default GueppCard