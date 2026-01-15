import React from 'react'
import Img1 from '../assets/onix/logo.png'
import Img2 from '../assets/onix/logo.png'
import Img3 from '../assets/onix/logo.png'

import Carrusel from '../subcomponents/Carrusel'
import CardAlias from '../components/CardAlias'
import BtnRedes from '../components/BtnRedes'
import Descripcion from '../components/Descripcion'
import Footer from '../components/Footer'

const datos={
  negocio:"Onix Indumentaria",
  descripcion:"Indumentaria femenina, masculina, niños, lencería y accesorios. Prendas cómodas y a la moda para todas las ocasiones. Encuentra lo último en tendencias y estilos que se adaptan a tu personalidad.",
  nombre:"Yanina Pereyra",
  alias:"onix.mp",
  cvu:"00000031000910714405000"  
}

const redes={
  whatsapp:"https://wa.me/5493571590078",
  instagram:"https://www.instagram.com/onixindumentaria123/",
  facebook:"https://www.facebook.com/share/17jqK1rHrA/",
  ubicación:"https://maps.app.goo.gl/3yN6kWXVAP1ivuH78"
}

const colors={
  fondo:"#eeecebff",
  botones:"#734f96",
  cardbody:"#e0d4f7",
  text:"#734f96"
}

const Onix = () => {
  return (
    <div style={{ backgroundColor: colors.fondo, minHeight: '100vh' }}>
      <div className="container-fluid p-5 rounded-3">
        <Carrusel images={[Img1, Img2, Img3]} />    
      </div>
      <Descripcion datos={datos} colors={colors} />
      <BtnRedes redes={redes} color={colors.botones} />
      <CardAlias datos={datos} colors={colors} />
      <Footer />
    </div>
  )
}

export default Onix