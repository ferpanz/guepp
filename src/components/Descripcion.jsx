import React from 'react'

// Props: datos: { negocio, descripcion }, colors: { texto }
const Descripcion = ({ datos = {}, colors = {} }) => {
  const { negocio = '', descripcion = '' } = datos || {}
  const { texto = '' } = colors || {}
  const textColor = (typeof texto === 'string' && texto.trim() !== '') ? texto : '#000'

  return (
    <>
      <div className="container-fluid text-center" style={{ color: textColor }}>
        <h3>{negocio}</h3>
        <p>{descripcion}</p>
      </div>
    </>
  )
}

export default Descripcion
