import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom'

const Navbar =()=>{
  return(
    <nav className="navbar navbar-expand-lg navbar-light navbar-costume fixed-top">
    <div className="container">
      <Link className="navbar-brand" to="/">
        <img src={require('../../assets/img/logo.svg')} alt="" width="80"/>
        </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/costumer">Costumer</Link>
          </li>
          <li>
            <Link href="/talent" className="nav-link">Talent</Link>
          </li>
        </ul>
          <ul className="navbar-nav">
            <li>
              <Link to="/regcostum" className="nav-link">Daftar Costumer</Link>
            </li>
          <li>
            <Link to="/register" className="btn btn-warning">Daftar Talent</Link>
          </li>
            
        </ul>
        </div>
      </div>
</nav>
  )
}

export default Navbar;