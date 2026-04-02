import React from 'react'
import Img1 from '../assets/cong-rio/logo.png'
import Img2 from '../assets/cong-rio/foto1.png'
import Img3 from '../assets/cong-rio/foto2.png'
import Img4 from '../assets/cong-rio/foto3.png'
import Img5 from '../assets/cong-rio/foto4.png'


import Carrusel from '../subcomponents/Carrusel'
import BtnRedes from '../components/BtnRedes'
import Descripcion from '../components/Descripcion'
import Footer from '../components/Footer'

const datos={
  negocio:"ConG-Rio",
  descripcion:"Una PyME familiar de Río Tercero dedicada a la distribución de alimentos ultracongelados, con foco en calidad, entrega rápida y atención personalizada.Trabaja con marcas como Dolce Neve, La Casona Di Tutti, Queen Helados, papas premium ultracongeladas y panificación Pripan, sumando además producción propia de hielo macizo Corialito.Compromiso, cercanía y servicio confiable para negocios, eventos y familias.",
  nombre:"",
  alias:"",
  cvu:""  
}

const redes={
  instagram:"https://www.instagram.com/cong.riosa/",
  whatsapp:"https://wa.me/5493571526045",
  teléfono:"tel:+543571601862",
  catálogo: "https://drive.google.com/drive/folders/16wW8hGVbJwofASLIkOieKDLKJcDC2hvm?usp=drive_link",
  zona: "https://drive.google.com/file/d/1rS9XWWtVZGkiQmdag3-TLQIJNeUxHT87/view?usp=drivesdk",
  correo:"mailto:cong.riosa@gmail.com",
 
}

const colors={
  fondo:"#89b2ff",
  botones:"#003f7b",
  cardbody:"#d1c5c0ff",
  text:"#ffffff"
}

const CongRio = () => {
  return (
    <div style={{ backgroundColor: colors.fondo, minHeight: '100vh' }}>
      <div className="container-fluid p-5 rounded-3">
        <Carrusel images={[Img1, Img2, Img3, Img4, Img5]} />    
      </div>
      <Descripcion datos={datos} colors={colors} />
      
      <BtnRedes redes={redes} color={colors.botones} />
      <Footer />
    </div>
  )
}

export default CongRio