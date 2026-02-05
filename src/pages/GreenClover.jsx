import React from 'react'
import Img1 from '../assets/greenclover/logo.png'
import Img2 from '../assets/greenclover/foto1.png'
import Img3 from '../assets/greenclover/foto1.png'

import Carrusel from '../subcomponents/Carrusel'
import CardAlias from '../components/CardAlias'
import BtnRedes from '../components/BtnRedes'
import Descripcion from '../components/Descripcion'
import Footer from '../components/Footer'
import Clientes from '../components/Clientes'

const datos={
  negocio:"Green Clover",
  descripcion:"Irish Bar",
  nombre:"",
  alias:"",
  cvu:""  
}

const redes={
  instagram:"https://www.instagram.com/greenclover.3/",
  whatsapp:"https://wa.me/5493571563011",
  correo:"mailto:ferpanz@gmail.com",
  carta:"https://drive.google.com/drive/u/0/folders/139oMlX25az2d6Kfqj1v2Pm06t8zHIQ_2",
  ubicacion:"https://maps.app.goo.gl/GBJBra9hZms8cmFa8",
  calificar:"https://www.google.com/search?client=firefox-b-d&hs=u8w9&sca_esv=7da175bd9b925cd1&sxsrf=ANbL-n6gr-mHhj78MrrYGOuTj8xAF9tCog:1770156754724&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOWZcJR707uuFLMYrBX-M-_WoYtANy-4uEjy7hJHZpedpeBpFurjI2X5ZKlS0VrDalk-D_GXy6SSdcrEjRYF_7Ie80aCp&q=Green+clover+Opiniones&sa=X&ved=2ahUKEwiBhr_kq76SAxX4qJUCHfQyFk4Q0bkNegQIIRAF&biw=1525&bih=740&dpr=0.9&aic=0#lrd=0x95cd6f54cc33f881:0xce4f93ffa6d5cde9,3,,,,"
 
}

const colors={
  fondo:"#377642",
  botones:"#013421",
  cardbody:"#d1c5c0ff",
  text:"#201d1e"
}

const GreenClover = () => {
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

export default GreenClover