import React from "react";
import Link from "gatsby-link";
import Brand from "./Brand";
import Hamburger from "./Hamburger";
import Menu from "./Menu";

const Navbar = ({ children }) => (
  <nav className="navbar is-fixed-top transition">{children}</nav>
);

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    active: false,
  };

  handleClick = e => {
    e.preventDefault();
    this.setState(state => ({
      active: !state.active,
    }));
  };

  render() {
    return (
      <Navbar>
        <Brand>
          <Hamburger active={this.state.active} onClick={this.handleClick} />
        </Brand>
        <Menu active={this.state.active} />
      </Navbar>
    );
  }
}
