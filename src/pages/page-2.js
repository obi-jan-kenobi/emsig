import React from 'react'
import Link from 'gatsby-link'

class SecondPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(state => ({
      active: !!!state.active,
    }))
  }
  render() {
    return (
      <div>
        <div
          className={`navbar-burger${this.state.active ? ' is-active' : ''}`}
          data-target="navMenu"
          onClick={this.handleClick}
        >
          <span />
          <span />
          <span />
        </div>

        <div
          className={`navbar-menu${this.state.active ? ' is-active' : ''}`}
          id="navMenu"
        >
          HELLO
        </div>
        <h1>Hi people</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    )
  }
}

export default SecondPage
