import React from 'react'
import Img1 from '../assets/listtehogar/logo.png'
import Img2 from '../assets/listtehogar/logo.png'
import Img3 from '../assets/listtehogar/logo.png'

import Carrusel from '../subcomponents/Carrusel'
import CardAlias from '../components/CardAlias'
import BtnRedes from '../components/BtnRedes'
import Descripcion from '../components/Descripcion'
import Footer from '../components/Footer'
import Clientes from '../components/Clientes'

const datos={
  negocio:"Listte Hogar",
  descripcion:"Todos los electrodomésticos y artículos para el hogar que necesitás, al mejor precio. Calidad y variedad en un solo lugar.",
  nombre:"",
  alias:"",
  cvu:""  
}

const redes={
  instagram:"https://www.instagram.com/listtehogar/",
  whatsapp:"https://wa.me/54935714632527",
  correo:"mailto:info@listte.com.ar",
  web:"https://listte.com.ar/",
  ubicacion:"https://maps.app.goo.gl/adjUY1zddkErCYCD8",
  calificar:"https://www.google.com/search?client=firefox-b-d&hs=j8w9&sca_esv=7da175bd9b925cd1&sxsrf=ANbL-n6CV1YsYhcMVEkn8FUlyDjXXg6JrA:1770156096233&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qORfu3DTsCGu_ngsW62ispG8Q_pozlv3V9QbkTVSrSbWKExBBgKfScYaCt7DobxE3Z8B-8fkCdG3BgODsoi3Wu6RYCgqC&q=Listte+Hogar+Opiniones&sa=X&ved=2ahUKEwiViMCqqb6SAxXtrZUCHdi9N_oQ0bkNegQIIRAF&biw=1525&bih=740&dpr=0.9&aic=0#lrd=0x95cd6f49e83ac053:0xea8710ff00dc033f,3,,,,"
 
}

const colors={
  fondo:"#c4d25a",
  botones:"#7081b8",
  cardbody:"#d1c5c0ff",
  text:"rgb(0, 0, 0)"
}

const ListteHogar = () => {
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

export default ListteHogar