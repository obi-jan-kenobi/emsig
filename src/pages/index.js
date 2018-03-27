import React from "react";
import Link from "gatsby-link";

import Hero from "../components/Hero";

const IndexPage = () => (
  <div>
    <Hero />
    <section className="container has-text-centered section">
      <h1 className="title is-spaced">Ihr Spezialist für Gebäudereinigung</h1>
      <p className="subtitle">
        Wir bieten Reinigungen jeglicher Art und sonstige artverwandte
        Dienstleistungen an. Dabei führen wir die Reinigungsarbeiten und
        Dienstleistungen zuverlässig und in einer hohen Qualität durch. Wir
        orientieren uns bei der Leistungsdurchführung strikt nach den Wünschen
        der Kunden. Den Qualitätsstandard garantieren wir Ihnen durch geschultes
        Stammpersonal, innovative Reinigungsverfahren mit modernen
        Reinigungsmaschinen und umweltschonenden Reinigungsmitteln.
      </p>
    </section>
    <main className="container">
      <section className="section has-text-centered">
        <h1 className="title is-spaced is-capitalized">Leistungen</h1>
        Unterhaltsreinigung Grundreinigung Glasreinigung Baureinigung
        Fassadenreinigung Photovoltaikreinigung -- Akkustikdecken Fahrtreppen
        Busse und Schiffe Parkettfußböden -- Hausmeister Gartenpflege
        Winterdienst Entrümpelung
      </section>
    </main>
  </div>
);

export default IndexPage;
