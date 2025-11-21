import React from 'react'
import video from '../assets/guepp/videito-prof.webm'
import Carrusel from '../subcomponents/Carrusel'

const CardProfesional = () => {
  return (
    <>
      <div className="container p-5 rounded-3 mb-3 bg-turqueza">
          <div className="row">
            <div className="col-12 col-md-6 my-auto mx-auto text-center">
              <video className='img-fluid rounded w-50' src={video} autoPlay loop />
            </div>
            <div className="col-12 col-md-6 ps-md-5 mx-auto my-auto pt-3">
              <h2 className='fw-bold'>GÜEPP! Profesionales</h2>
              <p >Con GÜEPP! CARD tenés una aplicación dar a conocer y potenciar tu perfil profesional, fidelizar tus clientes y conectar con tus potenciales clientes.</p>
              <p className='h5'>Linkeá tus redes sociales, medios de contacto y más.</p>
              <hr />
              <p className='fw-bold'>GÜEPP! CARD + QR Imprimible <br/>Precio promocional: $35000</p>
            </div>
          </div>
      </div>
    </>
  )
}

export default CardProfesional