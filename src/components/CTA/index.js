import React from "react";

const CTA = () => (
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column is-6">
            <div className="has-text-right">
              <h1 className="title is-spaced">Hero title</h1>
              <h2 className="subtitle">Hero subtitle</h2>
              <a href="#" className="button is-danger">
                Jetzt Angebot anfordern
              </a>
            </div>
          </div>
          <div className="column is-offset-1">
            <ol>
              <li>Zuverlässigkeit in der Gebäudereinigung</li>
              <li>Zertifiziert nach ISO 9001</li>
              <li>Über 3000 Kunden</li>
              <li>Individueller Pauschalbetrag</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
