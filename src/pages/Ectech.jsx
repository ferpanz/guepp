import React from 'react'
import Img1 from '../assets/ectech/logo.png'
import Img2 from '../assets/ectech/perfil.png'

import Carrusel from '../subcomponents/Carrusel'
import CardAlias from '../components/CardAlias'
import BtnRedes from '../components/BtnRedes'
import Descripcion from '../components/Descripcion'

const datos={
  negocio:"ECTech",
  descripcion:"Desarrollo de software y soluciones tecnológicas a medida.",
  nombre:"",
  alias:"",
  cvu:""  
}

const redes={
  instagram:"https://www.instagram.com/emiperez73/",
  whatsapp:"https://wa.me/5493571601870",
  ubicación:"https://maps.app.goo.gl/q6xsvSnWHKkbHFTE9",
  tiktok:"https://"
}

const colors={
  fondo:"#755B0B",
  botones:"#486548",
}

const Ectech = () => {
  return (
    <div style={{ backgroundColor: colors.fondo, minHeight: '100vh' }}>
      <div className="container-fluid p-5 rounded-3">
        <Carrusel images={[Img1, Img2, Img1]} />    
      </div>
      <Descripcion datos={datos} />
      
      <BtnRedes redes={redes} color={colors.botones} />
    </div>
  )
}

export default Ectech