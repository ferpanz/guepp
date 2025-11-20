import React from 'react'

const Descripcion = ({ datos = {} }) => {
  const { negocio = '', descripcion = '' } = datos || {}
  return (
    <>
      <div className="container-fluid text-center">
        <h3>{negocio}</h3>
        <p>{descripcion}</p>
      </div>
    </>
  )
}

export default Descripcion
