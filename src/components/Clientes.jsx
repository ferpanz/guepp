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

const logoUrl = (folder) =>
  new URL(`../assets/${folder}/logo.png`, import.meta.url).href;

const getVisibleCount = () => {
  if (typeof window === "undefined") return 4;
  const w = window.innerWidth;
  if (w < 768) return 2;   // móvil
  if (w < 992) return 3;   // tablet
  return 4;                // desktop
};

const Clientes = () => {
  const [visible, setVisible] = useState(getVisibleCount());
  const [index, setIndex] = useState(0);               // índice de desplazamiento (de a 1)
  const [transitionOn, setTransitionOn] = useState(true);
  const [itemW, setItemW] = useState(200);             // ancho calculado por JS

  const wrapRef = useRef(null);
  const timerRef = useRef(null);
  const hoveringRef = useRef(false);

  // Duplicamos los primeros "visible" items al final para hacer loop infinito sin salto
  const trackItems = useMemo(() => {
    const extra = clientes.slice(0, visible);
    return [...clientes, ...extra];
  }, [visible]);

  // recalcular visible en resize
  useEffect(() => {
    const onResize = () => setVisible(getVisibleCount());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // recalcular itemW con ResizeObserver para que sea súper estable
  useEffect(() => {
    if (!wrapRef.current) return;

    const calc = () => {
      const w = wrapRef.current.clientWidth;
      if (w > 0) setItemW(w / visible);
    };

    calc();

    let ro;
    if ("ResizeObserver" in window) {
      ro = new ResizeObserver(calc);
      ro.observe(wrapRef.current);
    } else {
      // fallback
      window.addEventListener("resize", calc);
    }

    return () => {
      if (ro) ro.disconnect();
      else window.removeEventListener("resize", calc);
    };
  }, [visible]);

  // autoplay: avanza de a 1 logo
  const stop = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const schedule = () => {
    stop();
    if (hoveringRef.current) return;
    if (clientes.length <= visible) return;

    timerRef.current = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 2000);
  };

  useEffect(() => {
    schedule();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, visible]);

  // manejo hover/touch pausa
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const onEnter = () => {
      hoveringRef.current = true;
      stop();
    };
    const onLeave = () => {
      hoveringRef.current = false;
      schedule();
    };
    const onTouchStart = () => {
      hoveringRef.current = true;
      stop();
    };
    const onTouchEnd = () => {
      hoveringRef.current = false;
      schedule();
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  // Loop infinito: cuando index llega al final real, resetea sin transición
  useEffect(() => {
    // cuando llegamos al final de "clientes", estamos viendo items duplicados
    if (index === clientes.length) {
      // esperamos a que termine la transición actual y reseteamos "sin animación"
      const t = setTimeout(() => {
        setTransitionOn(false);
        setIndex(0);

        // reactivar transición en el próximo frame
        requestAnimationFrame(() => requestAnimationFrame(() => setTransitionOn(true)));
      }, 520); // debe ser un pelín mayor que la duración de la transición (0.5s)
      return () => clearTimeout(t);
    }
  }, [index]);

  const next = () => setIndex((prev) => prev + 1);

  const prev = () => {
    // para prev “infinito” sin complicarse: si estamos en 0, saltamos al final sin transición
    if (index === 0) {
      setTransitionOn(false);
      setIndex(clientes.length - 1);
      requestAnimationFrame(() => requestAnimationFrame(() => setTransitionOn(true)));
      return;
    }
    setIndex((prev) => prev - 1);
  };

  const translateX = -(index * itemW);

  return (
    <section className="container py-4">
      <h2 className="mb-3 text-center fw-bold text-bg-info p-3 rounded-3">Nuestros clientes</h2>

      <style>{`
        .clientes-slider {
          width: 100%;
          max-width: 920px;
          margin: 0 auto;
          position: relative;
        }

        .slider-viewport {
          overflow: hidden;
          border-radius: 16px;
        }

        .slider-track {
          display: flex;
          will-change: transform;
        }

        .slider-track.transition {
          transition: transform 0.5s ease;
        }

        .cliente-item {
          flex: 0 0 auto;
          padding: .5rem;
        }

        .cliente-tile {
          background: #fff;
          border-radius: 14px;
          padding: .75rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: .5rem;
          text-align: center;
          box-shadow: 0 .25rem .75rem rgba(0,0,0,.06);
          transition: transform .15s ease, box-shadow .15s ease;
        }

        .cliente-tile:hover {
          transform: translateY(-2px);
          box-shadow: 0 .75rem 1.5rem rgba(0,0,0,.10);
        }

        .cliente-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .cliente-logo {
          width: 100%;
          height: 120px;
          object-fit: contain;
        }

        @media (min-width: 768px) {
          .cliente-logo { height: 140px; }
        }

        .cliente-nombre {
          font-weight: 600;
          color: #212529;
          font-size: .95rem;
        }

        /* Botones (reutilizamos estilo bootstrap pero custom posicion) */
        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
          width: 42px;
          height: 42px;
          border: none;
          border-radius: 999px;
          background: rgba(0,0,0,.45);
          color: #fff;
          display:flex;
          align-items:center;
          justify-content:center;
          cursor:pointer;
        }
        .nav-btn:hover { background: rgba(0,0,0,.6); }
        .nav-prev { left: 10px; }
        .nav-next { right: 10px; }

        .nav-icon {
          width: 18px;
          height: 18px;
          border-right: 3px solid #fff;
          border-bottom: 3px solid #fff;
          transform: rotate(135deg);
        }
        .nav-next .nav-icon { transform: rotate(-45deg); }
      `}</style>

      <div className="clientes-slider" ref={wrapRef}>
        <button className="nav-btn nav-prev" onClick={prev} aria-label="Anterior">
          <span className="nav-icon" />
        </button>

        <div className="slider-viewport">
          <div
            className={`slider-track ${transitionOn ? "transition" : ""}`}
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {trackItems.map((c, i) => (
              <div
                className="cliente-item"
                key={`${c.card}-${i}`}
                style={{ width: `${itemW}px` }}
              >
                <Link to={c.card} className="cliente-link" aria-label={`Ir a ${c.nombre}`}>
                  <div className="cliente-tile">
                    <img
                      src={logoUrl(c.folder)}
                      alt={`Logo ${c.nombre}`}
                      className="cliente-logo"
                      loading="lazy"
                    />
                    
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <button className="nav-btn nav-next" onClick={next} aria-label="Siguiente">
          <span className="nav-icon" />
        </button>
      </div>
    </section>
  );
};

export default Clientes;