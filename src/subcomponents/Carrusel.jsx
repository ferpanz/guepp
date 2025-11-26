import React from 'react'

// Reusable carousel component. Props:
// - images: array of image src strings
// - id: optional id string for the carousel (auto-generated if omitted)
const Carrusel = ({ images = [], id }) => {
  const carouselId = id || `carousel-${Math.random().toString(36).slice(2,9)}`

  if (!images || images.length === 0) return null

  return (
    <div className="carrusel-responsive">
      {/* Estilos inline para no modificar otros archivos: mantienen 100% en móvil
          y limitan el ancho en pantallas más grandes para que no ocupe toda la pantalla */}
      <style>{`
        .carrusel-responsive{ width:100%; max-width:420px; margin:0 auto; }
        @media (min-width: 768px){ .carrusel-responsive{ max-width:420px; } }
        @media (min-width: 1200px){ .carrusel-responsive{ max-width:420px; } }
        .carrusel-responsive .carousel-item img{ object-fit:contain; height:auto; }
      `}</style>

      <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((src, idx) => (
            <div
              key={idx}
              className={`carousel-item ${idx === 0 ? 'active' : ''}`}
              data-bs-interval={idx === 0 ? 1500 : 2000}
            >
              <img src={src} className="d-block w-100" alt={`slide-${idx}`} />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={`#${carouselId}`}
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={`#${carouselId}`}
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Carrusel
