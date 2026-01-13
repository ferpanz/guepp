import React from 'react'
import Img1 from '../assets/yamilgomez/perfil1.png'
import Img2 from '../assets/yamilgomez/logo.png'
import Img3 from '../assets/yamilgomez/perfil2.png'

import Carrusel from '../subcomponents/Carrusel'
import CardAlias from '../components/CardAlias'
import BtnRedes from '../components/BtnRedes'
import Descripcion from '../components/Descripcion'
import Footer from '../components/Footer'

const datos={
  negocio:"Yamil Gómez",
  descripcion:"Fotógrafo profesional. Capturando momentos únicos e inolvidables.",
  nombre:"",
  alias:"",
  cvu:""  
}

const redes={
  instagram:"https://www.instagram.com/yamil.ph/",
  whatsapp:"https://wa.me/5493571549323",
  portfolio:"https://drive.google.com/drive/folders/1Hsl5z4Lpx84Wlu4V9VyJPzz5Yb-2YVp7?usp=sharing",
  ubicación:"https://maps.app.goo.gl/q6xsvSnWHKkbHFTE9",
}

const colors={
  fondo:"#9595a3ff",
  botones:"#1e5686ff",
  text:"#ffffff"
}

const YamilGomez = () => {
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

export default YamilGomez