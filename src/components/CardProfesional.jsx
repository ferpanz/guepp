import React from 'react'
import profesional from '../assets/guepp/profesional.png'
const CardProfesional = () => {
  return (
    <>
      <div className="container p-5 rounded-3 mb-3 bg-turqueza">
          <div className="row">
            <div className="col-12 col-md-6 my-auto mx-auto text-center">
              <img className='img-fluid rounded w-50' src={profesional} />
            </div>
            <div className="col-12 col-md-6 ps-md-5 mx-auto my-auto pt-3">
              <h2 className='fw-bold'>GÜEPP! Profesionales</h2>
              <p >Con GÜEPP! CARD tenés una aplicación para dar a conocer y potenciar tu perfil profesional, fidelizar tus clientes y conectar con tus potenciales clientes.</p>
              <p className='h5'>Linkeá para compartir todo desde tu Instagram, TikTok, Twitter, YouTube y otros perfiles de redes sociales.</p>
              <hr />
              <p className='fw-bold'>GÜEPP! CARD + QR Imprimible</p>
            </div>
          </div>
      </div>
    </>
  )
}

export default CardProfesional