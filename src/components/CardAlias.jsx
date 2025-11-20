import React from 'react'

const CardAlias = ({ transferencia = {} }) => {
  const {
    negocio = '',
    descripcion = '',
    nombre = '',
    alias = '',
    cvu = ''
  } = transferencia || {}

  const copyAlias = async (e) => {
    e.preventDefault()
    if (!alias) return
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(alias)
      } else {
        const ta = document.createElement('textarea')
        ta.value = alias
        ta.style.position = 'fixed'
        ta.style.left = '-9999px'
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        document.body.removeChild(ta)
      }
      // Mensaje simple de feedback; puedes reemplazar por un toast si lo prefieres
      alert(`Alias copiado: ${alias}`)
    } catch (err) {
      console.error('No se pudo copiar el alias', err)
      alert('No fue posible copiar el alias')
    }
  }

  return (
    <>
      <div className="card text-end w-75 mx-auto mb-5">
        <div className="card-body">
          <h5 className="card-title">{negocio}</h5>
          <p className="card-text">{descripcion}</p>

          <p className="mb-1"><strong>Nombre:</strong> {nombre}</p>
          <p className="mb-1"><strong>CVU:</strong> {cvu}</p>
          <p className="mb-3"><strong>Alias:</strong> {alias}</p>

          <button onClick={copyAlias} className="btn btn-primary">Copiar alias</button>
        </div>
      </div>
    </>
  )
}

export default CardAlias
