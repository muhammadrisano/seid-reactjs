import React from 'react';
import './navbar.css';

const Navbar =()=>{
  return(
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <div className="container">
      <a className="navbar-brand" href="/">
        <img src={require('../../assets/img/logo.svg')} alt="" width="80"/>
        </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {/* <div className="link-left"> */}
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="costumer">Costumer</a>
          </li>
            {/* </div> */}
          {/* <li>
            <a href="/login" className="btn btn-primary"> Masuk</a>
          </li>
          <li>
            <a href="/logincostumers" className="btn btn-warning">Untuk Costumer</a>
          </li> */}
        </ul>
        </div>
      </div>
</nav>
  )
}

export default Navbar;