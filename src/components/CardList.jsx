import React from 'react'
import video from '../assets/guepp/videito.webm'

const CardList = () => {
  return (
    <>
      <div className="container p-5 rounded-3 mb-3">
        <div className="row">
          <div className="col-12 col-md-6 my-auto mx-auto text-center order-md-1">
            <video className='img-fluid rounded w-50' src={video} autoPlay loop />
          </div>
          <div className="col-12 col-md-6 ps-md-5 mx-auto my-auto pt-3 order-md-0">
            <h2 className='fw-bold'>GÜEPP! CARD</h2>
            <ul class="list-group list-group-flush">
              <li class="list-group-item fw-semibold">Simple, sencillo, sin enredos</li>
              <li class="list-group-item fw-semibold">Facilita el acceso a la info necesaria</li>
              <li class="list-group-item fw-semibold">Asegura que tus clientes lleguen a tus redes sociales</li>
              <li class="list-group-item fw-semibold">Ofrece todos tus medios de contacto en un paso</li>
              <li class="list-group-item fw-semibold">Agiliza transferencias copiando directamente el alias</li>
              <li class="list-group-item fw-semibold">Realza tu negocio y lo visibiliza</li>
              <li class="list-group-item fw-semibold">Potencia tu perfil profesional</li>
              <li class="list-group-item fw-semibold">Link para compartir en tus redes</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardList
