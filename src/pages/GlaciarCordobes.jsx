import React from 'react'
import Img1 from '../assets/glaciar-cordobes/logo.png'
import Img2 from '../assets/glaciar-cordobes/foto1.png'


import Carrusel from '../subcomponents/Carrusel'
import CardAlias from '../components/CardAlias'
import BtnRedes from '../components/BtnRedes'
import Descripcion from '../components/Descripcion'
import Footer from '../components/Footer'

const datos={
  negocio:"Glaciar Cordobés",
  descripcion:"Cada brindis merece el mejor hielo.Producimos hielo premium tipo rolito y triturado. Atendemos hogares, eventos y comercios con distribución eficiente y trato personalizado. Porque los buenos momentos se disfrutan mejor cuando todo está cuidado.",
  nombre:"María Del Valle Maldonado",
  alias:"glaciar3",
  cvu:"0000003100042773311666"  
}

const redes={
  instagram:"https://www.instagram.com/glaciar_cordobesr3/",
  whatsapp:"https://wa.me/5493571364455",
  correo:"mailto:glaciarcordobes@gmail.com",
  ubicacion:"https://maps.app.goo.gl/V3BED7o65WN3DpCN8",
  calificar:"https://www.google.com/search?client=firefox-b-d&hs=nbmU&sca_esv=491e1eecbecbeb26&sxsrf=ANbL-n5botNrr3dNfBkrzcnAzjq2o2avTA:1772493559872&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOb48jwHoSP6GZcc7Th8zSReLnw6xV08IwwoK4fx6ehuV3rMinWAySen4aJq4pe559XP40tbSn0IZP6IonI6NbSu9m3haSfbwXzT0jrMeOSNLB8OLYw%3D%3D&q=Glaciar+Cordob%C3%A9s+Opiniones&sa=X&ved=2ahUKEwj40YKIrYKTAxWiLrkGHUfXOYoQ0bkNegQIHRAF&biw=1525&bih=740&dpr=0.9"
 
}

const colors={
  fondo:"#808080",
  botones:"#3a73ee",
  cardbody:"#d1c5c0ff",
  text:"#1d2f57"
}

const GlaciarCordobes = () => {
  return (
    <div style={{ backgroundColor: colors.fondo, minHeight: '100vh' }}>
      <div className="container-fluid p-5 rounded-3">
        <Carrusel images={[Img1, Img2]} />    
      </div>
      <Descripcion datos={datos} colors={colors} />
      
      <BtnRedes redes={redes} color={colors.botones} />
      <CardAlias datos={datos} colors={colors} />
      <Footer />
    </div>
  )
}

export default GlaciarCordobes