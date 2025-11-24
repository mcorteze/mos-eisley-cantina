import React from "react";

export default function QuienesSomos() {
  return (
    <div className="container mt-5 text-white">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h1 className="display-4 text-warning mb-4">La Cantina de Mos Eisley</h1>
          <p className="lead">
            Un lugar infame para gente peligrosa.
          </p>
          <p>
            Ubicada en el corazón del puerto espacial de Mos Eisley en Tatooine, nuestra cantina es el punto de encuentro preferido para pilotos, contrabandistas, cazarrecompensas y viajeros de toda la galaxia.
          </p>
          <p>
            Aquí no hacemos preguntas. Ofrecemos las bebidas más fuertes, la música más pegajosa de la banda de Figrin D'an, y un ambiente donde cualquier cosa puede suceder.
          </p>
          <p className="fst-italic text-muted">
            "No encontrarás una colmena más miserable de escoria y villanía." - Un cliente satisfecho.
          </p>
          <div className="alert alert-warning mt-4" role="alert">
            <strong>Nota importante:</strong> No servimos a droides. Por favor, déjelos afuera.
          </div>
        </div>
        <div className="col-lg-6">
          <img
            src="https://www.mintinbox.net/wp-content/uploads/2020/09/moseisleycantina-768x326.jpg"
            alt="Interior de la Cantina"
            className="img-fluid rounded shadow-lg border border-secondary"
          />
        </div>
      </div>
    </div>
  );
}
