import React from 'react'
import './header.css';
const Header = ()=>{
  return(
    <div class="jumbotron">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={require('../../assets/img/logo.svg')} alt="" width="250" className="logo"/>
            <p>Platform yang memberikan ruang untuk tumbuh, dan berkembang, serta membantu kamu untuk mandiri secara finansial</p>
          </div>
          <div className="col-md-6">
            <img src={require('../../assets/img/header.svg')} className="img-header" alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header