import React from 'react'
import Img1 from '../assets/muyLibriana/logo.png'
import Img2 from '../assets/muyLibriana/foto1.png'
import Img3 from '../assets/muyLibriana/foto2.png'

import Carrusel from '../subcomponents/Carrusel'
import CardAlias from '../components/CardAlias'
import BtnRedes from '../components/BtnRedes'
import Descripcion from '../components/Descripcion'
import Footer from '../components/Footer'

const datos={
  negocio:"Muy Libriana",
  descripcion:"Aromas y producciones manuales. Equilibrio energético. Bienestar cotidiano.",
  nombre:"Daniela Aramburu",
  alias:"muy.libriana",
  cvu:"0000003100091071440598"  
}

const redes={
  instagram:"https://www.instagram.com/muylibriana/",
  whatsapp:"https://wa.me/5493571684626",
  correo:"mailto:aramburu1998@gmail.com",
  ubicación:"https://maps.app.goo.gl/q6xsvSnWHKkbHFTE9"
}

const colors={
  fondo:"#b5ffff",
  botones:"#734f96",
}

const MuyLibriana = () => {
  return (
    <div style={{ backgroundColor: colors.fondo, minHeight: '100vh' }}>
      <div className="container-fluid p-5 rounded-3">
        <Carrusel images={[Img1, Img2, Img3]} />    
      </div>
      <Descripcion datos={datos} colors={colors} />
      <CardAlias datos={datos} colors={colors} />
      <BtnRedes redes={redes} color={colors.botones} />
      <Footer />
    </div>
  )
}

export default MuyLibriana
