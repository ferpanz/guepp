import React from 'react'


const BtnRedes = ({ redes = {}, color = 'primary', colorMap = {}, styleMap = {} }) => {
  const entries = Object.entries(redes || {})
  if (entries.length === 0) return null

  const labelFromKey = (k) => {
    if (!k) return ''
    const lower = k.toLowerCase()
    if (lower === 'whatsapp') return 'WhatsApp'
    if (lower === 'instagram') return 'Instagram'
    if (lower === 'ubicación' || lower === 'ubicacion') return 'Ubicación'
    if (lower === 'link') return 'Link'
    return k.charAt(0).toUpperCase() + k.slice(1)
  }

  const iconFromKey = (k) => {
    if (!k) return 'link-45deg'
    const lower = k.toLowerCase()
    if (lower === 'whatsapp') return 'whatsapp'
    if (lower === 'instagram') return 'instagram'
    if (lower === 'facebook') return 'facebook'
    if (lower === 'twitter') return 'twitter'
    if (lower === 'tiktok') return 'tiktok'
    if (lower === 'ubicación' || lower === 'ubicacion' || lower === 'maps') return 'geo-alt'
    if (lower === 'email' || lower === 'correo') return 'envelope'
    return 'box-arrow-up-right'
  }

  // Accept #RGB, #RRGGBB and #RRGGBBAA
  const isHex = (s) => typeof s === 'string' && /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(s)

  const classAndStyleFor = (key) => {
    const mapped = colorMap && colorMap[key]
    const inlineFromMap = styleMap && styleMap[key] ? { ...styleMap[key] } : undefined

    // If explicit hex provided in colorMap for this key, use inline style
    if (mapped && isHex(mapped)) {
      const style = { ...(inlineFromMap || {}), background: mapped, border: 'none', color: '#fff' }
      return { className: 'btn', style }
    }

    // If mapped looks like a bootstrap/full class, use it
    if (mapped && (mapped.startsWith('btn-') || mapped.includes(' '))) {
      return { className: `btn ${mapped}`, style: inlineFromMap }
    }

    // If mapped is a bootstrap color name (e.g., 'primary'), use btn-{mapped}
    if (mapped) return { className: `btn btn-${mapped}`, style: inlineFromMap }

    // Fallback to page-level color
    if (isHex(color)) {
      const style = { ...(inlineFromMap || {}), background: color, border: 'none', color: '#fff' }
      return { className: 'btn', style }
    }

    return { className: `btn btn-${color}`, style: inlineFromMap }
  }

  return (
    <>
      <div className="d-grid gap-2 col-11 mx-auto">
        {entries.map(([key, url]) => {
          const { className, style } = classAndStyleFor(key)
          const icon = iconFromKey(key)
          return (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
              style={style}
            >
              <i className={`bi bi-${icon} me-2`} aria-hidden="true" />
              {labelFromKey(key)}
            </a>
          )
        })}
      </div>
    </>
  )
}

export default BtnRedes
