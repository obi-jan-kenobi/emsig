import React from "react";
import Link, { withPrefix } from "gatsby-link";

export default props => (
  <div className="navbar-brand">
    <Link to="/" className="navbar-item is-white">
      <strong>EMSIG</strong>
    </Link>
    {props.children}
  </div>
);
