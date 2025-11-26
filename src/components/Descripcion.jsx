import React from 'react'

// Props: datos: { negocio, descripcion }, colors: { texto }
const Descripcion = ({ datos = {}, colors = {} }) => {
  const { negocio = '', descripcion = '' } = datos || {}
  // Aceptar tanto `texto` (es) como `text` (en) para compatibilidad con las páginas
  const texto = (colors && (colors.texto || colors.text)) || ''
  const textColor = (typeof texto === 'string' && texto.trim() !== '') ? texto : '#000'

  return (
    <>
      <div className="container-fluid text-center col-12 col-md-5 mb-5" style={{ color: textColor }}>
        <h2 className='fw-bolder'>{negocio}</h2>
        <p>{descripcion}</p>
      </div>
    </>
  )
}

export default Descripcion
