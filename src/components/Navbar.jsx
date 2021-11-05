import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="header bg-light">
        <nav className="page-container navbar grey navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Pearl Motors
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav right hide-on-med-and-down ">
                <Link   to="/"><li><i className="fa fa-home fa-2x" aria-hidden="true"></i></li></Link>

                <Link  to="/cart"><li><i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i></li></Link>
              </ul>
              {/* <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
            </div>
          </div>
        </nav>
      </div>
    )
}

export default Navbar