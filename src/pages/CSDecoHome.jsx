import React from 'react'
import Img1 from '../assets/cs-decohome/logo.png'
import Img2 from '../assets/cs-decohome/foto1.png'
import Img3 from '../assets/cs-decohome/foto2.png'

import Carrusel from '../subcomponents/Carrusel'
import CardAlias from '../components/CardAlias'
import BtnRedes from '../components/BtnRedes'
import Descripcion from '../components/Descripcion'
import Footer from '../components/Footer'

const datos={
  negocio:"DECO&HOME - CS",
  descripcion:"Decoración de interiores, asesoramiento en diseño y ambientación de espacios. Objetos decorativos y textiles para el hogar. Transformá tu espacio con estilo y funcionalidad.",
  nombre:"",
  alias:"",
  cvu:""  
}

const redes={
  instagram:"https://www.instagram.com/decohome.cs/",
  whatsapp:"https://wa.me/5493571310061",
  ubicacion:"https://maps.app.goo.gl/SHpMC6qASqBDhzF69"
}

const colors={
  fondo:"#eac9f3ff",
  botones:"#5e118fff",
  cardbody:"",
  text:"#5e118fff"
}

const CSDecoHome = () => {
  return (
    <div style={{ backgroundColor: colors.fondo, minHeight: '100vh' }}>
      <div className="container-fluid p-5 rounded-3">
        <Carrusel images={[Img1, Img2, Img3]} />    
      </div>
      <Descripcion datos={datos} colors={colors} />
      
      <BtnRedes redes={redes} color={colors.botones} />
      
      <Footer />
    </div>
  )
}

export default CSDecoHome