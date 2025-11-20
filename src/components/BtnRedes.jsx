import React from 'react'

const BtnRedes = ({ redes = {} }) => {
  const entries = Object.entries(redes || {})
  if (entries.length === 0) return null

  const labelFromKey = (k) => {
    if (!k) return ''
    const lower = k.toLowerCase()
    if (lower === 'whatsapp') return 'WhatsApp'
    if (lower === 'instagram') return 'Instagram'
    if (lower === 'ubicación' || lower === 'ubicacion') return 'Ubicación'
    return k.charAt(0).toUpperCase() + k.slice(1)
  }

  return (
    <>
      <div className="d-grid gap-2 col-11 mx-auto">
        {entries.map(([key, url]) => (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            {labelFromKey(key)}
          </a>
        ))}
      </div>
    </>
  )
}

export default BtnRedes
