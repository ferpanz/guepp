import React from 'react'
import { Link } from 'react-router-dom'

const BtnRedes = ({ redes = {}, color = 'primary', colorMap = {}, styleMap = {}, onClickMap = {} }) => {
  const entries = Object.entries(redes || {})
  if (entries.length === 0) return null

  const labelFromKey = (k) => {
    if (!k) return ''
    const lower = k.toLowerCase()
    if (lower === 'whatsapp') return 'WhatsApp'
    if (lower === 'instagram') return 'Instagram'
    if (lower === 'ubicación' || lower === 'ubicacion') return 'Ubicación'
    if (lower === 'portfolio' || lower === 'portafolio') return 'Portfolio'
    if (lower === 'tienda' || lower === 'shop' || lower === 'store') return 'Tienda'
    if (lower === 'telefono' || lower === 'teléfono' || lower === 'phone' || lower === 'llamada' || lower === 'tel') return 'Teléfono'
    if (lower === 'pagina' || lower === 'página' || lower === 'pagina web' || lower === 'página web' || lower === 'web' || lower === 'website' || lower === 'sitio' || lower === 'sitio web') return 'Página Web'
    if (lower === 'link') return 'Link'
    if (lower === 'calificar') return 'Reseña en Google'
    if (lower === 'cartabebidas') return 'Nuestra carta'
    if (lower === 'cartamenu') return 'Nuestro menú'
    if (lower === 'eventos') return 'Próximos eventos'
    if (lower === 'barra movil' || lower === 'barramovil') return 'Barra móvil'
    if (lower === 'clubbeneficios' || lower === 'beneficios') return 'Club de Beneficios'
    if (lower === 'comercial') return 'El Comercial'
    if (lower === 'folleto') return 'Folleto'
    if (lower === 'zona') return 'Zona de cobertura'
    if (lower === 'escuelas') return 'Escuelas'
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
    if (lower === 'portfolio' || lower === 'portafolio') return 'briefcase'
    if (lower === 'tienda' || lower === 'shop' || lower === 'store') return 'shop'
    if (lower === 'telefono' || lower === 'teléfono' || lower === 'phone' || lower === 'llamada' || lower === 'tel') return 'telephone'
    if (lower === 'ubicación' || lower === 'ubicacion' || lower === 'maps') return 'geo-alt'
    if (lower === 'pagina' || lower === 'página' || lower === 'pagina web' || lower === 'página web' || lower === 'web' || lower === 'website' || lower === 'sitio' || lower === 'sitio web') return 'globe'
    if (lower === 'email' || lower === 'correo') return 'envelope'
    if (lower === 'calificar') return 'google'
    if (lower === 'cartabebidas') return 'cup-straw'
    if (lower === 'cartamenu') return 'book'
    if (lower === 'eventos') return 'megaphone'
    if (lower === 'barra movil' || lower === 'barramovil') return 'truck'
    if (lower === 'clubbeneficios' || lower === 'beneficios') return 'credit-card'
    if (lower === 'comercial') return 'newspaper'
    if (lower === 'folleto') return 'file-earmark-text'
    if (lower === 'escuelas') return 'book'
    if (lower === 'zona') return 'geo-alt'
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
      return { className: 'btn btn-lg', style }
    }

    // If mapped looks like a bootstrap/full class, use it
    if (mapped && (mapped.startsWith('btn-') || mapped.includes(' '))) {
      return { className: `btn ${mapped} btn-lg`, style: inlineFromMap }
    }

    // If mapped is a bootstrap color name (e.g., 'primary'), use btn-{mapped}
    if (mapped) return { className: `btn btn-${mapped} btn-lg`, style: inlineFromMap }

    // Fallback to page-level color
    if (isHex(color)) {
      const style = { ...(inlineFromMap || {}), background: color, border: 'none', color: '#fff' }
      return { className: 'btn btn-lg shadow mb-2', style }
    }

    return { className: `btn btn-${color} btn-lg`, style: inlineFromMap }
  }

  return (
    <>
      <div className="d-grid gap-2 col-11 col-md-5 mx-auto">
        {entries.map(([key, url]) => {
          const { className, style } = classAndStyleFor(key)
          const icon = iconFromKey(key)
          const lowerKey = (key || '').toLowerCase()
          let href = url
          // Si la clave es correo/email, asegurar el prefijo mailto:
          if ((lowerKey === 'correo' || lowerKey === 'email') && typeof url === 'string') {
            href = url.startsWith('mailto:') ? url : `mailto:${url}`
          }
          if (onClickMap[key]) {
            return (
              <button
                key={key}
                onClick={onClickMap[key]}
                className={className}
                style={style}
              >
                <i className={`bi bi-${icon} me-2`} aria-hidden="true" />
                {labelFromKey(key)}
              </button>
            )
          }
          return (
            <a
              key={key}
              href={href}
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
