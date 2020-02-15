import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {
    toggle: false
  }
  toggleNav = () => {
    this.setState({ toggle: !this.state.toggle });
  }
  render() {
    const navClass = `collapse navbar-collapse ${this.state.toggle ? 'show' : ''}`;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand main-logo-name" to="/">SK</Link>
        <button className="navbar-toggler" type="button"
          onClick={this.toggleNav}
          data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={navClass} id="navbarNav">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/experience">Experience</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/education">Education</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
          </ul>

        </div>
      </nav>
    )
  }
}

export default Navbar