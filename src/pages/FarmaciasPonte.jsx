import React from 'react'
import Img1 from '../assets/farmaciasponte/logo.png'
import Img2 from '../assets/farmaciasponte/logo.png'
import Img3 from '../assets/farmaciasponte/logo.png'

import Carrusel from '../subcomponents/Carrusel'
import CardAlias from '../components/CardAlias'
import BtnRedes from '../components/BtnRedes'
import Descripcion from '../components/Descripcion'
import Footer from '../components/Footer'
import Clientes from '../components/Clientes'

const datos={
  negocio:"Farmacias Ponte",
  descripcion:"Farmacias Ponte es una cadena de farmacias comprometida con la salud y el bienestar de sus clientes. Ofrecemos una amplia gama de productos farmacéuticos, asesoramiento profesional.",
  nombre:"",
  alias:"",
  cvu:""  
}

const redes={
  instagram:"https://www.instagram.com/farmaciaponte/",
  whatsapp:"https://wa.me/5493571558231",
  web:"https://farmaciasponte.com/",
  ubicacion:"https://maps.app.goo.gl/2RfDA8vEfd6tPpxw5",
  calificar:"https://www.google.com/search?client=firefox-b-d&hs=4Vx9&sca_esv=b91b52423da4ab6e&sxsrf=ANbL-n5sWmHPb9vPOaeP0wmsxY0eS7BqsA:1770242904784&si=AL3DRZHrmvnFAVQPOO2Bzhf8AX9KZZ6raUI_dT7DG_z0kV2_xyRXMliTG8X2JnGqLY0h-stqRvqzTyNo7C1ToS3N4mOFHUNgaoCYv-Oq2xIfLs3sk-hXQf_fyhl6TRhOgH0HeXmpaIS4uhluDM3bu8p8JrSOeEn36w%3D%3D&q=Farmacias+Ponte+I+Opiniones&sa=X&ved=2ahUKEwj83oXc7MCSAxWArJUCHX0GAzEQ0bkNegQIJxAH&biw=1525&bih=740&dpr=0.9&aic=0#lrd=0x95cd6f214c6c78a5:0x99cf08ac5987bb69,3,,,,"
 
}

const colors={
  fondo:"#eeecebff",
  botones:"#006613",
  cardbody:"#d1c5c0ff",
  text:"#006613"
}

const FarmaciasPonte
 = () => {
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

export default FarmaciasPonte
