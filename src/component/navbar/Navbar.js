import React from 'react';
import logo from "./logo.png";

function Navbar() {

  return (
    <div className="navbarSection">
        <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
            <img src={logo}  className="mx-2" alt="continuum"/>
           {/*<a className="navbar-brand text-light mx-2" href="#">Continuum</a>*/}
            <div className="navbar-nav">
                <a className="nav-item nav-link active text-light mx-2" href="/">Home</a>
            </div>
        </nav>
    </div>
  );
}

export default Navbar;