import React from 'react'
import './navbar2.css'
import {Link} from 'react-router-dom';
const Navbar2 = () => {
  const handleMenu =()=>{
    let nav = document.getElementById('nav')
    let menu = document.getElementById('menu-toggle')
    nav.classList.toggle('active');
    menu.classList.toggle('active')
    console.log(menu);
  }
  return(
    <div className="navbar2">
      <nav id="nav">
        <div className="container">
         <Link to='/'>
        <div className="logo">
          <img src={require('../../assets/img/logo.svg')} alt="" />
        </div>
          </Link>
        <div className="menu-toggle" id="menu-toggle" onClick={()=> handleMenu()}></div>
        <ul>
            <li><Link to="/talent">Talent</Link></li>
            <li><Link to="/costumer">Costumer</Link></li>
        </ul>
        </div>
      </nav>
    </div>
  )
}
export default Navbar2