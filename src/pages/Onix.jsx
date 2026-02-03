import React from 'react'
import Img1 from '../assets/onix/logo.png'
import Img2 from '../assets/onix/foto1.png'
import Img3 from '../assets/onix/foto2.png'

import Carrusel from '../subcomponents/Carrusel'
import CardAlias from '../components/CardAlias'
import BtnRedes from '../components/BtnRedes'
import Descripcion from '../components/Descripcion'
import Footer from '../components/Footer'

const datos={
  negocio:"Onix Indumentaria",
  descripcion:"Indumentaria femenina, masculina, niños, lencería, blanquería,accesorios y regalería. Prendas cómodas y a la moda para toda ocasión. Encontrá todo para vos, tu familia y para regalar en un mismo lugar",
  nombre:"Yanina Marcela Pereyra",
  alias:"cloro.giro.gasa.mp",
  cvu:"0000003100007073012400"  
}

const redes={
  whatsapp:"https://wa.me/5493571590078",
  instagram:"https://www.instagram.com/onixindumentaria123/",
  facebook:"https://www.facebook.com/share/17jqK1rHrA/",
  tiktok:"https://www.tiktok.com/@onix.indumentaria0?_r=1&_t=ZM-937VkUMcIhM",
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