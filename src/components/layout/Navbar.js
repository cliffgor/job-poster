import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="/">Job Poster</Link> {/* Directs to the home component*/}
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <Link class="nav-item nav-link active" to="/">Home <span class="sr-only">(current)</span></Link> {/* Directs to the home component*/}
                <Link class="nav-item nav-link" to="/staff">Staff</Link> {/* Directs to the staff component*/}
                <Link class="nav-item nav-link" href="#">Pricing</Link>
                <Link class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
    </div>
  </div>
</nav>
    )
  }
}
