import React from "react";
import Link from "gatsby-link";

export default () => (
  <footer className="footer">
    <div className="container">
      <div className="columns">
        <div className="column is-half">
          <h2 className="title is-size-6">Kontakt</h2>
          <div className="footer-column">
            <form action="https://formspree.io/info@emsig.sh" method="POST">
              <input type="hidden" name="_subject" value="Neue Anfrage!" />
              <input type="text" name="_gotcha" style={{ display: "none" }} />
              <div className="field">
                <label className="label is-small">Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label is-small">E-Mail</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    name="_replyto"
                    placeholder="E-Mail"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label is-small">Nachricht</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    name="message"
                    placeholder="Textarea"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    type="submit"
                    className="button is-link"
                    value="Senden"
                  />
                </div>
              </div>
            </form>
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
