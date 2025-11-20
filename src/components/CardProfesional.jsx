import React from 'react'
import Img1 from '../assets/guepp/foto-tienda-ropa.png'
import Img2 from '../assets/guepp/foto-pasteleria.png'
import Img3 from '../assets/guepp/foto-almacen.png'
import Carrusel from '../subcomponents/Carrusel'

const CardProfesional = () => {
  return (
    <>
      <div className="container bg-turqueza p-5 rounded-3 mb-3">
          <div className="row">
            <div className="col-12 col-md-6 my-auto mx-auto">
              <Carrusel images={[Img1, Img2, Img3]} />
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