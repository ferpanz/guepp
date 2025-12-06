import React from 'react'
import Img1 from '../assets/detail-jg/logo.png'
import Img2 from '../assets/detail-jg/foto1.png'
import Img3 from '../assets/detail-jg/foto2.png'

import Carrusel from '../subcomponents/Carrusel'
import CardAlias from '../components/CardAlias'
import BtnRedes from '../components/BtnRedes'
import Descripcion from '../components/Descripcion'
import Footer from '../components/Footer'

const datos={
  negocio:"DETAIL JG",
  descripcion:"Productos de limpieza TOXIC SHINE, la marca N°1 en Argentina brindando el mejor cuidado para tu vehículo. Contamos con una amplia gama de productos para el cuidado y mantenimiento de autos, motos y camionetas. ¡Dale a tu vehículo el detalle que se merece con DETAIL JG!",
  nombre:"Jonathan Emanuel Gomez",
  alias:"alvaro.gomez6",
  cvu:"0000003100046570651240"  
}

const redes={
  instagram:"https://www.instagram.com/detailjg_rio3",
  whatsapp:"https://wa.me/5493571361641",
  ubicacion:"https://maps.app.goo.gl/i4bx9r2oiPiGrPgH7"
}

const colors={
  fondo:"#000000",
  botones:"#f40036",
  cardbody:"#cc405eff",
  text:"#f40036"
}

const Detail = () => {
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

export default Detail