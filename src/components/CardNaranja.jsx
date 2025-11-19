import React from 'react'
import Img1 from '../assets/guepp/foto-tienda-ropa.png'
import Img2 from '../assets/guepp/foto-pasteleria.png'
import Img3 from '../assets/guepp/foto-almacén.png'
import Carrusel from '../subcomponents/Carrusel'

const CardNaranja = () => {
  return (
    <>
      <div className="container bg-naranja p-5 rounded-3 mb-3">
          <div className="row">
            <div className="col-12 col-md-6 my-auto mx-auto">
              <Carrusel images={[Img1, Img2, Img3]} />
            </div>
            <div className="col-12 col-md-6 ps-md-5 mx-auto my-auto pt-3">
              <h2 className='fw-bold'>GÜEPP! Emprendimientos</h2>
              <p >Ideal para exhibir en tiendas de ropa, almacenes, ferias, eventos y más, facilitando la interacción y el acceso a detalles del producto de manera rápida y eficiente.</p>
              <p className='h5'>Con sólo escanear el código QR o acercar el teléfono, tus clientes tendrán toda la información necesaria sobre tu negocio o emprendimiento en la palma de sus manos.</p>
              <hr />
              <p className='fw-bold'>GÜEPP! CARD + Exhibidor QR/NFC + Imprimible <br/>Precio promocional: $50000</p>
                      
            </div>
          </div>
      </div>
    </>
  )
}

export default CardNaranja
