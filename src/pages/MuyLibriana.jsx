import React from 'react'
import Img1 from '../assets/muyLibriana/muylibriana-logo.png'

import Carrusel from '../subcomponents/Carrusel'
import CardAlias from '../components/CardAlias'
import BtnRedes from '../components/BtnRedes'

const transferencia={
  negocio:"Muy Libriana",
  descripcion:"Aromas y producciones manuales. Equilibrio energético. Bienestar cotidiano.",
  nombre:"Daniela Aramburu",
  alias:"muy.libriana",
  cvu:"0000003100091071440598"  
}

const redes={
  instagram:"https://www.instagram.com/muylibriana/",
  whatsapp:"https://wa.me/5493571684626",
  ubicación:"https://maps.app.goo.gl/q6xsvSnWHKkbHFTE9"
}

const MuyLibriana = () => {
  return (
    <>
      <div className="container-fluid p-5 rounded-3">
        <Carrusel images={[Img1, Img1, Img1]} />    
      </div>
      <CardAlias transferencia={transferencia} />
      <BtnRedes redes={redes} />
    </>
  )
}

export default MuyLibriana
