import React from 'react'
import Link from 'gatsby-link'

export default props => (
  <div className="navbar-brand">
    <Link to="/" className="navbar-item is-white">
      EMSIG
    </Link>
    {props.children}
  </div>
)
