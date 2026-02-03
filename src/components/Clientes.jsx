import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

const clientes = [
  { nombre: "Muy Libriana", folder: "muyLibriana", card: "/muylibriana" },
  { nombre: "Onix", folder: "onix", card: "/onix" },
  { nombre: "Color Pony", folder: "colorpony", card: "/colorpony" },
  { nombre: "CS Deco&Home", folder: "cs-decohome", card: "/cs-decohome" },
  { nombre: "DETAIL JG", folder: "detail-jg", card: "/detail-jg" },
  { nombre: "Yamil Gómez", folder: "yamilgomez", card: "/yamilgomez" },
  { nombre: "Inspección Río 3 Cala 1", folder: "inspeccionrio3cala1", card: "/inspeccionrio3cala1" },
  { nombre: "S.E.R. Salón", folder: "SER-salon", card: "/ser-salon" },
];

// Clientes.jsx está en src/components, para llegar a src/assets: ../assets
const logoUrl = (folder) =>
  new URL(`../assets/${folder}/logo.png`, import.meta.url).href;

// Helper: agrupa en arrays de tamaño n
const chunk = (arr, size) => {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

// Helper: define cuántos items por slide según el ancho
const getItemsPerSlide = () => {
  if (typeof window === "undefined") return 4;
  const w = window.innerWidth;

  // Ajuste propuesto:
  // móvil: 2 (hasta md)
  // tablet: 3 (md a lg)
  // desktop: 4 (lg en adelante)
  if (w < 768) return 2;      // < md
  if (w < 992) return 3;      // md - < lg
  return 4;                   // >= lg
};

const Clientes = ({ id }) => {
  const carouselId = id || `clientes-carousel-${Math.random().toString(36).slice(2, 9)}`;
  const carouselRef = useRef(null);

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());
  const [currentSlide, setCurrentSlide] = useState(0);

  const autoplayRef = useRef(null);
  const isHoveringRef = useRef(false);

  // Recalcular items por slide en resize
  useEffect(() => {
    const onResize = () => setItemsPerSlide(getItemsPerSlide());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Genera slides (cada slide trae 2/3/4 clientes)
  const slides = useMemo(() => chunk(clientes, itemsPerSlide), [itemsPerSlide]);

  // Si cambia la cantidad de slides (por resize), volvemos al inicio para evitar índices inválidos
  useEffect(() => {
    setCurrentSlide(0);
  }, [itemsPerSlide]);

  // Helpers autoplay (avanza por SLIDES)
  const stopAutoplay = () => {
    if (autoplayRef.current) clearTimeout(autoplayRef.current);
  };

  const scheduleNext = () => {
    stopAutoplay();
    if (!isHoveringRef.current && slides.length > 1) {
      autoplayRef.current = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 2000);
    }
  };

  // Eventos hover/touch + init bootstrap si existe
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || slides.length <= 1) return;

    const onMouseEnter = () => {
      isHoveringRef.current = true;
      stopAutoplay();
    };
    const onMouseLeave = () => {
      isHoveringRef.current = false;
      scheduleNext();
    };
    const onTouchStart = () => {
      isHoveringRef.current = true;
      stopAutoplay();
    };
    const onTouchEnd = () => {
      isHoveringRef.current = false;
      scheduleNext();
    };

    carousel.addEventListener("mouseenter", onMouseEnter);
    carousel.addEventListener("mouseleave", onMouseLeave);
    carousel.addEventListener("touchstart", onTouchStart, { passive: true });
    carousel.addEventListener("touchend", onTouchEnd);

    if (typeof window !== "undefined" && window.bootstrap) {
      try {
        new window.bootstrap.Carousel(carousel, {
          interval: false, // tu autoplay lo maneja React
          wrap: true,
          keyboard: true,
          pause: false,
          touch: true,
        });
      } catch (error) {
        console.error("Error inicializando Bootstrap Carousel:", error);
      }
    }

    scheduleNext();

    return () => {
      stopAutoplay();
      carousel.removeEventListener("mouseenter", onMouseEnter);
      carousel.removeEventListener("mouseleave", onMouseLeave);
      carousel.removeEventListener("touchstart", onTouchStart);
      carousel.removeEventListener("touchend", onTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length]);

  // Autoplay continuo cuando cambia slide
  useEffect(() => {
    if (slides.length <= 1 || isHoveringRef.current) return;
    scheduleNext();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide, slides.length]);

  if (!clientes || clientes.length === 0) return null;

  return (
    <section className="container py-4">
      <h2 className="mb-3 text-center fw-bolder">Nuestros clientes</h2>

      <div className="carrusel-responsive">
        <style>{`
          .carrusel-responsive{ width:100%; max-width:720px; margin:0 auto; }
          @media (min-width: 992px){ .carrusel-responsive{ max-width:920px; } }

          .cliente-grid{
            display:grid;
            gap: .75rem;
            align-items: stretch;
          }

          /* grid responsive:
            - móvil: 2 columnas
            - md: 3 columnas
            - lg+: 4 columnas
          */
          .cols-2{ grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .cols-3{ grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .cols-4{ grid-template-columns: repeat(4, minmax(0, 1fr)); }

          .cliente-tile{
            background: #fff;
            border-radius: .75rem;
            padding: .75rem;
            height: 100%;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            text-align:center;
            box-shadow: 0 .25rem .75rem rgba(0,0,0,.06);
            transition: transform .15s ease, box-shadow .15s ease;
          }
          .cliente-tile:hover{
            transform: translateY(-2px);
            box-shadow: 0 .75rem 1.5rem rgba(0,0,0,.10);
          }

          .cliente-link{ text-decoration:none; display:block; height:100%; }

          .cliente-logo{
            width:100%;
            height: 120px; /* altura fija para que queden parejos */
            object-fit: contain;
          }

          @media (min-width: 768px){
            .cliente-logo{ height: 140px; }
          }

          .cliente-nombre{
            margin-top: .5rem;
            font-weight: 600;
            color:#212529;
            font-size: .95rem;
          }

          /* Que el carrusel no haga “saltos” por alturas distintas */
          .carousel-item{ padding: .25rem; }
        `}</style>

        <div
          id={carouselId}
          ref={carouselRef}
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {slides.map((grupo, idx) => {
              const gridClass =
                itemsPerSlide === 2 ? "cols-2" : itemsPerSlide === 3 ? "cols-3" : "cols-4";

              return (
                <div
                  key={idx}
                  className={`carousel-item ${idx === currentSlide ? "active" : ""}`}
                >
                  <div className={`cliente-grid ${gridClass}`}>
                    {grupo.map((c) => (
                      <Link
                        key={c.card}
                        to={c.card}
                        className="cliente-link"
                        aria-label={`Ir a ${c.nombre}`}
                      >
                        <div className="cliente-tile">
                          <img
                            src={logoUrl(c.folder)}
                            alt={`Logo ${c.nombre}`}
                            className="cliente-logo"
                            loading="lazy"
                          />
                          
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {slides.length > 1 && (
            <>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#${carouselId}`}
                data-bs-slide="prev"
                onClick={() =>
                  setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
                }
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>

              <button
                className="carousel-control-next"
                type="button"
                data-bs-target={`#${carouselId}`}
                data-bs-slide="next"
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Clientes;