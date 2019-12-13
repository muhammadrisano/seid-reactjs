import React from 'react';
import './navbar.css';

const Navbar =()=>{
  return(
    <nav className="navbar navbar-expand-lg navbar-light navbar-costume fixed-top">
    <div className="container">
      <a className="navbar-brand" href="/">
        <img src={require('../../assets/img/logo.svg')} alt="" width="80"/>
        </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/costumer">Costumer</a>
          </li>
          <li>
            <a href="/talent" className="nav-link">Talent</a>
          </li>
        </ul>
          <ul className="navbar-nav">
            <li>
              <a href="/regcostum" className="nav-link">Daftar</a>
            </li>
          <li>
            <a href="/register" className="btn btn-warning">Daftar Talent</a>
          </li>
            
        </ul>
        </div>
      </div>
</nav>
  )
}

export default Navbar;