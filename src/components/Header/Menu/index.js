import React from 'react'
import Link from 'gatsby-link'

export default ({ active }) => (
  <div className={`navbar-menu${active ? ' is-active' : ''}`}>
    <div className="navbar-end">
      <Link to="/leistungen" className="navbar-item">
        Leistungen
      </Link>
      <Link to="/referenzen" className="navbar-item">
        Referenzen
      </Link>
      <Link to="/kontakt" className="navbar-item">
        Kontakt
      </Link>
    </div>
  </div>
)
