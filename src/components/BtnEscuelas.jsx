import React from "react";

const BtnEscuelas = () => {
  const escuelas = [
    { name: "IPEM 37", url: "https://ejemplo1.com" },
    { name: "IPEM 252", url: "https://ejemplo2.com" },
    { name: "IPEM 288", url: "https://ejemplo3.com" },
    { name: "IPEM 299", url: "https://ejemplo4.com" },
    { name: "IPEM 304", url: "https://ejemplo5.com" },
    { name: "IPEM 394", url: "https://ejemplo6.com" },
    { name: "IPEM 439", url: "https://ejemplo7.com" },
    { name: "IPEM 303", url: "https://ejemplo8.com" },
  ];

  return (
    <div className="container">
      <div className="row">
        {escuelas.map((escuela, index) => (
          <div key={index} className="col-6 col-md-3 mb-3">
            <a
              href={escuela.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-100 d-flex align-items-center justify-content-center btn-cuadrado"
            >
              {escuela.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BtnEscuelas;