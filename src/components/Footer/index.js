import React from "react";
import Link from "gatsby-link";

export default () => (
  <footer className="footer">
    <div className="container">
      <div className="columns">
        <div className="column is-half">
          <h2 className="title is-size-6">Kontakt</h2>
          <div className="footer-column">
            <div className="field">
              <div className="control">
                <input className="input" type="text" placeholder="Name" />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="E-Mail-Adresse"
                />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <textarea className="textarea" placeholder="Nachricht" />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-link">Senden</button>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-1" />
        <div className="column">
          <h2 className="title is-size-6">Anschrift</h2>
          <ul className="footer-column">
            <li>Karpfenteich 41</li>
            <li>24837 Schlewig</li>
          </ul>
          <ul className="footer-column">
            <li>04621 / 930245</li>
          </ul>
          <ul className="footer-column">
            <li>info@emsig.sh</li>
          </ul>
        </div>
        <div className="column">
          <h2 className="title is-size-6">Info</h2>
          <ul className="footer-column">
            <li className="footer-column-item">
              <Link to="/impressum">Impressum</Link>
            </li>
            <li className="footer-column-item">
              <Link to="/datenschutz">Datenschutz</Link>
            </li>
            <li className="footer-column-item">© 2018 EMSIG</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
