import React from "react";
import { withPrefix } from "gatsby-link";

export default () => (
  <section className="hero is-large">
    <div className="hero-body">
      <div className="container has-text-centered">
        <figure class="image is-128x128">
          <img src={withPrefix("/LOGO_48.svg")} />
        </figure>
        <h1 className="title is-size-1 is-spaced">EMSIG</h1>
        <p className="subtitle is-size-5">
          Professionelle und preiswerte Gebäudereinigung
        </p>
        <div className="call-to-action">
          <a
            className="button is-primary is-rounded is-large is-outlined"
            role="button"
            href="/kontakt"
          >
            Kontaktieren Sie uns
          </a>
        </div>
      </div>
    </div>
  </section>
);
