import React from 'react'

export default ({ active, onClick }) => (
  <div
    className={`navbar-burger${active ? ' is-active' : ''}`}
    data-target="navMenu"
    onClick={onClick}
  >
    <span />
    <span />
    <span />
  </div>
)
