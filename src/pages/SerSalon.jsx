import React from 'react'
import Img1 from '../assets/SER-salon/logo.png'
import Img2 from '../assets/SER-salon/foto1.png'
import Img3 from '../assets/SER-salon/foto2.png'

import Carrusel from '../subcomponents/Carrusel'
import CardAlias from '../components/CardAlias'
import BtnRedes from '../components/BtnRedes'
import Descripcion from '../components/Descripcion'
import Footer from '../components/Footer'

const datos={
  negocio:"S.E.R. Salón de Eventos",
  descripcion:"Salón de Eventos multiespacio. Ideal para cumpleaños, fiestas, reuniones, eventos familiares y coorporativos, peñas...",
  nombre:"",
  alias:"",
  cvu:""  
}

const redes={
  instagram:"https://www.instagram.com/ser_saloneventos/",
  whatsapp:"https://wa.me/5493571323312",
  correo:"ser25r3@gmail.com",
  ubicación:"https://maps.app.goo.gl/W8YawAjpVkqezUbM6?g_st=aw",
}

const colors={
  fondo:"#fffae7",
  botones:"#18413d",
}

const SerSalon = () => {
  return (
    <div style={{ backgroundColor: colors.fondo, minHeight: '100vh' }}>
      <div className="container-fluid p-5 rounded-3">
        <Carrusel images={[Img1, Img2, Img3]} />    
      </div>
      <Descripcion datos={datos} />
      
      <BtnRedes redes={redes} color={colors.botones} />
      <Footer />
    </div>
  )
}

export default SerSalon