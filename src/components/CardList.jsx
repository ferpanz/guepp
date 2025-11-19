import React from 'react'
import Tienda from '../assets/guepp/foto-tienda-ropa.png'

const CardList = () => {
  return (
    <>
      <div className="container p-5 rounded-3">
        <div className="row">
          <div className="col-12 col-md-6 my-auto mx-auto order-md-1">
            <img className="img-fluid rounded-3 w-100 h-auto" src={Tienda} alt="App"/>
          </div>
          <div className="col-12 col-md-6 ps-md-5 mx-auto my-auto pt-3 order-md-0">
            <h2 className='fw-bold'>GÜEPP! CARD</h2>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Simple, sencillo, sin enredos</li>
              <li class="list-group-item">Facilita el acceso a la info necesaria</li>
              <li class="list-group-item">Asegura que tus clientes lleguen a tus redes sociales</li>
              <li class="list-group-item">Ofrece todos tus medios de contacto en un paso</li>
              <li class="list-group-item">Agiliza transferencias copiando directamente el alias</li>
              <li class="list-group-item">Realza tu negocio y lo visibiliza</li>
              <li class="list-group-item">Potencia tu perfil profesional</li>
              <li class="list-group-item">Link para compartir en tus redes</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardList
