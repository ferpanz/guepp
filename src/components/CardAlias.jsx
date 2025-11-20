import React from 'react'

const CardAlias = ({ transferencia = {}, colors = {} }) => {
  const {
    negocio = '',
    descripcion = '',
    nombre = '',
    alias = '',
    cvu = ''
  } = transferencia || {}

  const { cardbody = '' } = colors || {}

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
      <div className="card text-star mx-auto mb-5 ms-2 me-2">
        <div className="card-body" style={cardbody ? { backgroundColor: cardbody } : undefined}>
            <div className="text-center">
                <h3 className="card-title">{negocio}</h3>
                <p className="card-text">{descripcion}</p> 
            </div>
            <div className="text-star mt-3">
                <p className="mb-1"><strong>Nombre:</strong> {nombre}</p>
                <p className="mb-1"><strong>CVU:</strong> {cvu}</p>
                <p className="mb-3"><strong>Alias:</strong> {alias}</p>
            </div>
            <div className="text-end">
                <button onClick={copyAlias} className="btn btn-primary">Copiar alias</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default CardAlias
