import React from 'react'
import Img1 from '../assets/inspeccionrio3cala1/logo.png'
import Img2 from '../assets/inspeccionrio3cala1/logo.png'
import Img3 from '../assets/inspeccionrio3cala1/logo.png'

import Carrusel from '../subcomponents/Carrusel'
import CardAlias from '../components/CardAlias'
import BtnRedes from '../components/BtnRedes'
import Descripcion from '../components/Descripcion'
import Footer from '../components/Footer'

const datos={
  negocio:"Inspección Regional Río Tercero / Calamuchita I",
  descripcion:"Inspección de escuelas secundarias orientadas de los departamentos Tercero Arriba y Calamuchita. Brindamos apoyo y supervisión a las instituciones educativas para garantizar una educación de calidad.",
  nombre:"",
  alias:"",
  cvu:""  
}

const redes={
  instagram:"https://www.instagram.com/inspeccionsecundaria.rio3cala1/",
  telefono:"tel:+543571410212",
  correo:"inspeccionsecundaria.rio3cala1@me.cba.gov.ar",
  ubicacion:"https://maps.app.goo.gl/Bkhkt4t3gw5LXaUn9"
}

const colors={
  fondo:"#eeecebff",
  botones:"#0e3c63",
  cardbody:"#d1c5c0ff",
  text:"#0e3c63"
}

const InspeccionRio3Cala1 = () => {
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

export default InspeccionRio3Cala1