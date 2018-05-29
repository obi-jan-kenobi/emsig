import React from "react";

export default props => (
  <div className="card">
    <div className="card-header">
      <p className="card-header-title">{props.title}</p>
    </div>
    <div className="card-content">
      <div className="content">{props.subtitle}</div>
    </div>
    <footer className="card-footer">
      {props.leistungen.map((l, i) => (
        <p className="card-footer-item">
          <span>{l}</span>
        </p>
      ))}
    </footer>
  </div>
);
