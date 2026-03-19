import React from 'react'
import Img1 from '../assets/cong-rio/logo.png'
import Img2 from '../assets/cong-rio/foto1.png'
import Img3 from '../assets/cong-rio/foto2.png'
import Img4 from '../assets/cong-rio/foto3.png'


import Carrusel from '../subcomponents/Carrusel'
import CardAlias from '../components/CardAlias'
import BtnRedes from '../components/BtnRedes'
import Descripcion from '../components/Descripcion'
import Footer from '../components/Footer'

const datos={
  negocio:"Cong-Río",
  descripcion:"Una PyME familiar de Río Tercero dedicada a la distribución de alimentos ultracongelados, con foco en calidad, entrega rápida y atención personalizada.Trabaja con marcas como Dolce Neve, La Casona Di Tutti, Queen Helados, papas premium ultracongeladas y panificación Pripan, sumando además producción propia de hielo macizo Corialito.Compromiso, cercanía y servicio confiable para negocios, eventos y familias.",
  nombre:"",
  alias:"",
  cvu:""  
}

const redes={
  instagram:"https://www.instagram.com/cong.riosa/",
  whatsapp:"https://wa.me/5493571599721",
  teléfono:"tel:+543571",
  correo:"mailto:cong.riosa@gmail.com",
 
}

const colors={
  fondo:"#ffffff",
  botones:"#3a73ee",
  cardbody:"#d1c5c0ff",
  text:"#192847"
}

const CongRio = () => {
  return (
    <div style={{ backgroundColor: colors.fondo, minHeight: '100vh' }}>
      <div className="container-fluid p-5 rounded-3">
        <Carrusel images={[Img1, Img2, Img3, Img4]} />    
      </div>
      <Descripcion datos={datos} colors={colors} />
      
      <BtnRedes redes={redes} color={colors.botones} />
      <Footer />
    </div>
  )
}

export default CongRio