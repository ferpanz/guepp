import React, { useEffect, useRef, useState } from 'react'

// Reusable carousel component. Props:
// - images: array of image src strings
// - id: optional id string for the carousel (auto-generated if omitted)
const Carrusel = ({ images = [], id }) => {
  const carouselId = id || `carousel-${Math.random().toString(36).slice(2,9)}`
  const carouselRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const autoplayRef = useRef(null)
  const isHoveringRef = useRef(false)

  useEffect(() => {
    if (!carouselRef.current || images.length <= 1) return

    // Función para avanzar al siguiente slide
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }

    // Inicia el autoplay
    const startAutoplay = () => {
      if (!isHoveringRef.current) {
        autoplayRef.current = setTimeout(nextSlide, 2000)
      }
    }

    // Detiene el autoplay
    const stopAutoplay = () => {
      if (autoplayRef.current) {
        clearTimeout(autoplayRef.current)
      }
    }

    // Reinicia el autoplay
    startAutoplay()

    // Event listeners
    const carousel = carouselRef.current
    carousel?.addEventListener('mouseenter', () => {
      isHoveringRef.current = true
      stopAutoplay()
    })
    carousel?.addEventListener('mouseleave', () => {
      isHoveringRef.current = false
      startAutoplay()
    })
    carousel?.addEventListener('touchstart', () => {
      isHoveringRef.current = true
      stopAutoplay()
    })
    carousel?.addEventListener('touchend', () => {
      isHoveringRef.current = false
      startAutoplay()
    })

    // Intenta también inicializar Bootstrap si está disponible
    if (typeof window !== 'undefined' && window.bootstrap) {
      try {
        new window.bootstrap.Carousel(carousel, {
          interval: false, // Desactiva autoplay de Bootstrap
          wrap: true,
          keyboard: true,
          pause: false,
          touch: true,
        })
      } catch (error) {
        console.error('Error inicializando Bootstrap Carousel:', error)
      }
    }

    return () => {
      stopAutoplay()
      carousel?.removeEventListener('mouseenter', () => {})
      carousel?.removeEventListener('mouseleave', () => {})
      carousel?.removeEventListener('touchstart', () => {})
      carousel?.removeEventListener('touchend', () => {})
    }
  }, [images.length])

  // Efecto adicional para manejar el autoplay continuo
  useEffect(() => {
    if (images.length <= 1 || isHoveringRef.current) return

    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 2000)

    return () => clearTimeout(timer)
  }, [currentSlide, images.length])

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

      <div id={carouselId} ref={carouselRef} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((src, idx) => (
            <div
              key={idx}
              className={`carousel-item ${idx === currentSlide ? 'active' : ''}`}
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
              onClick={() => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)}
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={`#${carouselId}`}
              data-bs-slide="next"
              onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
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
