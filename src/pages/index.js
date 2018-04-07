import React from "react";
import Link from "gatsby-link";

import Hero from "../components/Hero";

const IndexPage = () => (
  <div>
    <Hero />
    <main>
      <div className="hero is-primary is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h1 className="title is-spaced">Über uns:</h1>
              </div>
              <div className="column">
                <p className="has-text-justified">
                  Wir bieten Reinigungen jeglicher Art und sonstige artverwandte
                  Dienstleistungen an. Dabei führen wir die Reinigungsarbeiten
                  und Dienstleistungen zuverlässig und in einer hohen Qualität
                  durch. Wir orientieren uns bei der Leistungsdurchführung
                  strikt nach den Wünschen der Kunden. <br />
                  Den Qualitätsstandard garantieren wir Ihnen durch geschultes
                  Stammpersonal, innovative Reinigungsverfahren mit modernen
                  Reinigungsmaschinen und umweltschonenden Reinigungsmitteln.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section is-medium">
        <div className="container">
          <h1 className="title is-spaced is-capitalized">Leistungen</h1>
          <div className="tile is-ancestor has-text-centered">
            <div className="tile is-vertical is-4 is-parent">
              <div className="tile is-child box">Unterhaltsreinigung</div>
              <div className="tile is-child box">Bau- und Bauendreinigung</div>
              <div className="tile is-child box">Hausmeister</div>
            </div>
            <div className="tile is-vertical is-4 is-parent">
              <div className="tile is-child box">Glas- und Rahmenreinigung</div>
              <div className="tile is-child box">Photovoltaikreinigung</div>
              <div className="tile is-child box">Gartenpflege</div>
            </div>
            <div className="tile is-vertical is-4 is-parent">
              <div className="tile is-child box">Fassadenreinigung</div>
              <div className="tile is-child box">Winterdienst</div>
              <div className="tile is-child box">Entrümpelung</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-medium has-text-justified">
        <div className="container">
          <h1 className="title is-spaced">Unser Serviceversprechen:</h1>
          <p className="subtitle">
            Rufen Sie uns an. In einem unverbindlichen Gespräch erörtern wir mit
            Ihnen die Möglichkeiten einer Unterstützung oder Zusammenarbeit. Wir
            erstellen Ihnen dann gerne ein für Sie kostenloses, auf Ihre Wünsche
            abgestimmtes Angebot. Dabei stehen wir Ihnen auch hinsichtlich der
            genauen Aufmaßerstellung (Reinigungsflächen) und die Erstellung
            eines Reinigungskonzeptes (Reinigungshäufigkeiten) zur Verfügung.
          </p>
          <p className="subtitle">
            Ihre persönlichen Ansprechpartner stehen Ihnen jederzeit zur
            Verfügung. Sie sorgen dafür, dass Sie Ihren gewünschten
            Dienstleistungsservice auch wirklich erhalten.
          </p>
        </div>
      </section>
    </main>
  </div>
);

export default IndexPage;
