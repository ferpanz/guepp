import React from 'react'
import Img1 from '../assets/cecisa/logo.png'
import Img2 from '../assets/cecisa/foto1.png'
import Img3 from '../assets/cecisa/foto2.png'


import Carrusel from '../subcomponents/Carrusel'
import CardAlias from '../components/CardAlias'
import BtnRedes from '../components/BtnRedes'
import Descripcion from '../components/Descripcion'
import Footer from '../components/Footer'
import Clientes from '../components/Clientes'

const datos={
  negocio:"CECISA",
  descripcion:"Centro Comercial, Industrial, de Servicio y Agropecuario. Representamos y apoyamos el desarrollo de Río Tercero.",
  nombre:"",
  alias:"",
  cvu:""  
}

const redes={
  instagram:"https://www.instagram.com/cecisa_rio3/",
  whatsapp:"https://wa.me/5493571326562",
  phone: "tel:+5493571644644",
  correo:"mailto:cecisa@cecisa.org.ar",
  ubicacion:"https://maps.app.goo.gl/CU3rbYohLoB8b6xD7",
  calificar:"https://www.google.com/search?client=firefox-b-d&hs=1dmU&sca_esv=aacf70bb308dc659&sxsrf=ANbL-n7_u0MzQA9GNp0aQyYhXGrEdlkdBg:1772501858900&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOcYf24I2TIx5Y59YvWfg3WsGnWs40b8g4R-qPnfOyzP-aDaZkhl7cMvkZ8Z43p94-Q6gOS14O1BG7AtI8-G6l-siaXzw&q=CeCISA+Opiniones&sa=X&ved=2ahUKEwiykKf9y4KTAxVdFLkGHczhNp0Q0bkNegQIKxAH&biw=1525&bih=740&dpr=0.9#lrd=0x95cd6f24dc2e8e29:0xa572ec331a668249,3,,,,"
 
}

const colors={
  fondo:"#e0e1e5",
  botones:"#cc0014",
  cardbody:"#d1c5c0ff",
  text:"#666666"
}

const Cecisa = () => {
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

export default Cecisa