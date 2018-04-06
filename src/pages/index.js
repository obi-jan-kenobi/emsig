import React from "react";
import Link from "gatsby-link";

import Hero from "../components/Hero";

const IndexPage = () => (
  <div>
    <Hero />
    <main>
      <section className="section is-medium has-text-centered">
        <div className="container">
          <h1 className="title">
            Ihr Spezialist für Gebäudereinigung in Schleswig-Holstein
          </h1>
        </div>
      </section>
      <div className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-spaced">Eine Auswahl unserer Kunden</h1>
            <div className="tile is-ancestor">
              <div className="tile is-vertical is-4 is-parent">
                <div className="tile is-child">
                  Studentenwerk Schleswig-Holstein
                </div>
              </div>
              <div className="tile is-vertical is-4 is-parent">
                <div className="tile is-child">ASF Schleswig-Flensburg</div>
              </div>
              <div className="tile is-vertical is-4 is-parent">
                <div className="tile is-child">
                  Service-Betrieb des Kreises Schleswig-Flensburg
                </div>
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
              <div className="tile is-child box">Baureinigung</div>
              <div className="tile is-child box">Hausmeister</div>
            </div>
            <div className="tile is-vertical is-4 is-parent">
              <div className="tile is-child box">Glasreinigung</div>
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

      <section className="section is-medium has-text-justified">
        <div className="container">
          <h1 className="title is-spaced">Unser Serviceversprechen:</h1>
          <p className="subtitle">
            Wir bieten Reinigungen jeglicher Art und sonstige artverwandte
            Dienstleistungen an. Dabei führen wir die Reinigungsarbeiten und
            Dienstleistungen zuverlässig und in einer hohen Qualität durch. Wir
            orientieren uns bei der Leistungsdurchführung strikt nach den
            Wünschen der Kunden. Den Qualitätsstandard garantieren wir Ihnen
            durch geschultes Stammpersonal, innovative Reinigungsverfahren mit
            modernen Reinigungsmaschinen und umweltschonenden Reinigungsmitteln.
          </p>
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
