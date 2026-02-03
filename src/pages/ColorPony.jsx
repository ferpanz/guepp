import React from 'react'
import Img1 from '../assets/colorpony/logo.png'
import Img2 from '../assets/colorpony/foto1.png'
import Img3 from '../assets/colorpony/foto2.png'

import Carrusel from '../subcomponents/Carrusel'
import CardAlias from '../components/CardAlias'
import BtnRedes from '../components/BtnRedes'
import Descripcion from '../components/Descripcion'
import Footer from '../components/Footer'

const datos={
  negocio:"Color Pony by Ruth Göldy",
  descripcion:"Clases preparatorias en matemáticas, estadísticas, contabilidad y economía. Agendas para estudiantes y planners de estudio. ¡Organizá tu aprendizaje con estilo y eficacia!",
  nombre:"Ruth Analía Göldy",
  alias:"ruthg89.nx.ars",
  cvu:"4530000800010239882964"  
}

const redes={
  instagram:"https://www.instagram.com/ruth_g1989/",
  whatsapp:"https://wa.me/5493571311524",
  correo:"mailto:ruthgoldy89@gmail.com",
  ubicacion:"https://maps.app.goo.gl/wUhW8Tu1s4cKK6Hu6"
}

const colors={
  fondo:"#fabee0",
  botones:"#fe6875",
  cardbody:"#fad1e8",
  text:"#4A3A34"
}

const ColorPony = () => {
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

export default ColorPony