import React from 'react'

const BtnInfo = () => {
  const handleClick = () => {
    const mensaje = `Hola! Me gustaría recibir información sobre los productos y servicios de *GÜEPP!*

¡¡GRACIAS!!`
    const url = `https://wa.me/5493571458866?text=${encodeURIComponent(mensaje)}`
    window.open(url, '_blank')
  }

  return (
    <div className="d-grid gap-2 col-6 mx-auto mt-1 mb-4">
      <button
        className="btn btn-success"
        type="button"
        onClick={handleClick}
        
      >
        Solicitá más info por WhatsApp
      </button>
    </div>
  )
}

export default BtnInfo