import React from 'react'

// Reusable carousel component. Props:
// - images: array of image src strings
// - id: optional id string for the carousel (auto-generated if omitted)
const Carrusel = ({ images = [], id }) => {
  const carouselId = id || `carousel-${Math.random().toString(36).slice(2,9)}`

  if (!images || images.length === 0) return null

  return (
    <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((src, idx) => (
          <div
            key={idx}
            className={`carousel-item ${idx === 0 ? 'active' : ''}`}
            data-bs-interval={idx === 0 ? 5000 : 2000}
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
  )
}

export default Carrusel
